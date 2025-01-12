import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

function ConfirmationForm() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, 'waitlist', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative backdrop-blur-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">Confirmation Form</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name:</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm sm:text-sm">
              {userData.name}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email:</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm sm:text-sm">
              {userData.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Phone:</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm sm:text-sm">
              {userData.phone}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Reason:</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm sm:text-sm">
              {userData.reason}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Tier:</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm sm:text-sm">
              {userData.tier}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationForm;