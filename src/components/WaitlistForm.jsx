import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useAuth } from '../firebase/auth'; // Import your custom hook for authentication
import { db } from '../firebase/config';

const WaitlistForm = () => {
  const { currentUser } = useAuth(); // Get the current authenticated user at the top level
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    tier: ''
  });
  const [loading, setLoading] = useState(false);

  const tiers = [
    {
      name: 'Basic',
      price: '$10',
      features: ['Feature 1', 'Feature 2'],
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'Standard',
      price: '$20',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Premium',
      price: '$30',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      color: 'from-yellow-400 to-red-500'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'waitlist'), {
        ...formData,
        uid: currentUser.uid, // Store the user's UID
        timestamp: new Date(),
      });
      toast.success('Successfully joined the waitlist!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        tier: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Ticket Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`backdrop-blur-lg bg-gradient-to-br ${tier.color} border border-gray-700 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer ${formData.tier === tier.name ? 'ring-2 ring-red-500' : ''}`}
              onClick={() => handleChange({ target: { name: 'tier', value: tier.name } })}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-lg">{tier.price}</p>
              <ul className="mt-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;