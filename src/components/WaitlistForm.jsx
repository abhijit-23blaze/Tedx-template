import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import toast, { Toaster } from 'react-hot-toast';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    tier: '' // Added tier selection
  });
  const [loading, setLoading] = useState(false);

  const tiers = [
    {
      name: 'Premium',
      price: '₹1999',
      features: ['Front Row Seating', 'Exclusive Merchandise', 'Meet & Greet'],
      color: 'from-red-600/30 to-red-900/30'
    },
    {
      name: 'Standard',
      price: '₹1499',
      features: ['Reserved Seating', 'Event T-Shirt'],
      color: 'from-orange-600/30 to-orange-900/30'
    },
    {
      name: 'Basic',
      price: '₹999',
      features: ['General Admission'],
      color: 'from-yellow-600/30 to-yellow-900/30'
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
    }

    setLoading(false);
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
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-2xl font-bold text-red-500 mb-4">{tier.price}</p>
              <ul className="text-gray-300 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="backdrop-blur-lg bg-black/30 rounded-xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-500">TedX Event Waitlist</h2>
            <p className="mt-2 text-gray-300">Join our exclusive waitlist for upcoming TedX events</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-black/50 border border-gray-600 rounded-md shadow-sm p-2 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-black/50 border border-gray-600 rounded-md shadow-sm p-2 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full bg-black/50 border border-gray-600 rounded-md shadow-sm p-2 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
                Why do you want to attend?
              </label>
              <textarea
                name="reason"
                id="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full bg-black/50 border border-gray-600 rounded-md shadow-sm p-2 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !formData.tier}
              className={`w-full flex justify-center py-3 px-4 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ${
                loading || !formData.tier ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default WaitlistForm;