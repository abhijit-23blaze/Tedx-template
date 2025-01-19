import { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import { collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

const AttendeeTracker = () => {
  const [attendees, setAttendees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({ 
    total: 0, 
    present: { tier1: 0, tier2: 0, total: 0 }, 
    paid: { tier1: 0, tier2: 0, total: 0 }, 
    special: 0 
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAttendee, setNewAttendee] = useState({
    name: '',
    uid: '',
    phone: '',
    tier: 'Tier 2',
    isSpecialGuest: false
  });

  useEffect(() => {
    fetchAttendees();
  }, []);

  const deleteAttendee = async (attendeeId) => {
    if (window.confirm('Are you sure you want to delete this attendee?')) {
      try {
        await deleteDoc(doc(db, 'waitlist', attendeeId));
        fetchAttendees();
      } catch (error) {
        console.error('Error deleting attendee:', error);
      }
    }
  };

  const fetchAttendees = async () => {
    const querySnapshot = await getDocs(collection(db, 'waitlist'));
    const attendeeList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      isPresent: doc.data().isPresent || false,
      hasPaid: doc.data().hasPaid || false,
      isSpecialGuest: doc.data().isSpecialGuest || false
    }));
    setAttendees(attendeeList);
    updateStats(attendeeList);
  };

  const updateStats = (list) => {
    setStats({
      total: list.length,
      present: {
        tier1: list.filter(a => a.isPresent && a.tier === 'Tier 1').length,
        tier2: list.filter(a => a.isPresent && a.tier === 'Tier 2').length,
        total: list.filter(a => a.isPresent).length
      },
      paid: {
        tier1: list.filter(a => a.hasPaid && a.tier === 'Tier 1').length,
        tier2: list.filter(a => a.hasPaid && a.tier === 'Tier 2').length,
        total: list.filter(a => a.hasPaid).length
      },
      special: list.filter(a => a.isSpecialGuest).length
    });
  };

  const toggleStatus = async (attendeeId, field) => {
    const attendeeRef = doc(db, 'waitlist', attendeeId);
    const attendee = attendees.find(a => a.id === attendeeId);
    await updateDoc(attendeeRef, { [field]: !attendee[field] });
    fetchAttendees();
  };

  const handleAddAttendee = async (e) => {
    e.preventDefault();
    try {
      // Generate a unique ID for the new attendee
      const uniqueId = `TEDx-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 7)}`.toUpperCase();
      await addDoc(collection(db, 'waitlist'), {
        ...newAttendee,
        uid: uniqueId,
        timestamp: new Date(),
      });
      setShowAddForm(false);
      setNewAttendee({
        name: '',
        uid: '',
        email: '',
        phone: '',
        tier: 'Tier 2',
        isSpecialGuest: false
      });
      fetchAttendees();
    } catch (error) {
      console.error('Error adding attendee:', error);
    }
  };

  const filteredAttendees = attendees.filter(attendee => 
    attendee.uid?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attendee.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-screen pt-32 bg-900 p-8">
      {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400">Total Registrations</p>
            <p className="text-2xl font-bold text-white">{stats.total}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400">Payment Completed</p>
            <p className="text-2xl font-bold text-green-500">{stats.paid.total}</p>
            <div className="text-sm mt-1">
              <p className="text-gray-400">Tier 1: {stats.paid.tier1}</p>
              <p className="text-gray-400">Tier 2: {stats.paid.tier2}</p>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400">Present Today</p>
            <p className="text-2xl font-bold text-blue-500">{stats.present.total}</p>
            <div className="text-sm mt-1">
              <p className="text-gray-400">Tier 1: {stats.present.tier1}</p>
              <p className="text-gray-400">Tier 2: {stats.present.tier2}</p>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400">Special Guests</p>
            <p className="text-2xl font-bold text-purple-500">{stats.special}</p>
          </div>
        </div>

      {/* Add Attendee Button */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by Registration ID or Name..."
          className="w-2/3 p-4 bg-gray-900 rounded-lg text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {showAddForm ? 'Cancel' : 'Add Attendee'}
        </button>
      </div>

      {/* Add Attendee Form */}
      {showAddForm && (
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <form onSubmit={handleAddAttendee} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 bg-gray-700 rounded text-white"
              value={newAttendee.name}
              onChange={(e) => setNewAttendee({...newAttendee, name: e.target.value})}
              required
            />
            
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 bg-gray-700 rounded text-white"
              value={newAttendee.phone}
              onChange={(e) => setNewAttendee({...newAttendee, phone: e.target.value})}
              required
            />
            <select
              className="p-2 bg-gray-700 rounded text-white"
              value={newAttendee.tier}
              onChange={(e) => setNewAttendee({...newAttendee, tier: e.target.value})}
            >
              <option value="Tier 1">Tier 1</option>
              <option value="Tier 2">Tier 2</option>
            </select>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={newAttendee.isSpecialGuest}
                onChange={(e) => setNewAttendee({...newAttendee, isSpecialGuest: e.target.checked})}
              />
              <label className="text-white">Special Guest</label>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add Attendee
            </button>
          </form>
        </div>
      )}

      {/* Attendees List */}
      <div className="space-y-4">
        {filteredAttendees.map(attendee => (
          <div key={attendee.id} className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-white font-bold">
                {attendee.name}
                {attendee.isSpecialGuest && (
                  <span className="ml-2 px-2 py-1 bg-purple-600 text-xs rounded-full">Special Guest</span>
                )}
              </p>
              <p className="text-gray-400 text-sm">{attendee.uid}</p>
              <p className="text-gray-400 text-sm">{attendee.tier}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => toggleStatus(attendee.id, 'hasPaid')}
                className={`px-4 py-2 rounded ${
                  attendee.hasPaid ? 'bg-green-600' : 'bg-gray-600'
                }`}
              >
                {attendee.hasPaid ? 'Paid' : 'Mark Paid'}
              </button>
              <button
                onClick={() => toggleStatus(attendee.id, 'isPresent')}
                className={`px-4 py-2 rounded ${
                  attendee.isPresent ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                {attendee.isPresent ? 'Present' : 'Mark Present'}
              </button>
              <button
                onClick={() => toggleStatus(attendee.id, 'isSpecialGuest')}
                className={`px-4 py-2 rounded ${
                  attendee.isSpecialGuest ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                {attendee.isSpecialGuest ? 'Special Guest' : 'Mark Special'}
              </button>
              <button
                onClick={() => deleteAttendee(attendee.id)}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
            
          </div>
          
        ))}
      </div>
      <div className="mt-8 text-center pb-4">
      <p className="text-gray-500 text-sm italic">Abhijit Patil the Sigma Productions</p>
    </div>
    </div>
  );
};

export default AttendeeTracker;