import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../firebase/auth';

const WaitlistForm = () => {
  //const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    tier: '', // Added tier selection
    organization: '',
    otherOrganization: '' // New field for custom organization
  });
  const [loading, setLoading] = useState(false);

  const tiers = [
    {
      name: 'Tier 1',
      price: '₹599',
      features: ['Everything in the ₹400 package','Priority Seating', 'Exclusive TEDx T-shirt', 'Interactive Panel with the speakers'],
      color: 'from-red-600/30 to-red-900/30'
    },
    {
      name: 'Tier 2',
      price: '₹399',
      features: ['Access to 9 great speakers and 2 electrifying performances (An English standup comedy act and a soulful singer/band performance)', 'Delicious Lunch', 'TEDx Poster, badge, stickers, premium book & pen, tote bag & a bookmark', 'An unforgettable TEDx experience' ],
      color: 'from-yellow-600/30 to-yellow-900/30' 
    }
  ];

  const organizations = [
    'IIIT Sri City',
    'IIT Tirupati',
    'Krea University',
    'VIT Chennai',
    'Other'
  ];

  const [phoneError, setPhoneError] = useState('');

  const [tierError, setTierError] = useState('');

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers
      const numbersOnly = value.replace(/[^\d]/g, '');
      // Limit to 10 digits
      const truncated = numbersOnly.slice(0, 10);
      
      setPhoneError(truncated.length === 10 ? '' : 'Phone number must be 10 digits');
      
      setFormData(prevState => ({
        ...prevState,
        [name]: truncated
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        ...(name === 'organization' && value !== 'Other' && { otherOrganization: '' })
      }));
    }
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 7);
    return `TEDx-${timestamp}-${randomStr}`.toUpperCase();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    // Validate tier selection
    if (!formData.tier) {
      setTierError('Please select a tier');
      toast.error('Please select a tier');
      return;
    }
  
    if (formData.phone.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
      return;
    }
  
    setLoading(true);
    const uniqueId = generateUniqueId();
  
    try {
      await addDoc(collection(db, 'waitlist'), {
        ...formData,
        organization: formData.organization === 'Other' ? formData.otherOrganization : formData.organization,
        uid: uniqueId,
        timestamp: new Date(),
      });
      navigate('/success', { state: { uniqueId } });
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        tier: '',
        organization: '',
        otherOrganization: ''
      });
      setTierError('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-950 pt-24 relative overflow-hidden">
    {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full pt-24 px-4 sm:px-6 lg:px-8">
        {/* Ticket Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`backdrop-blur-lg bg-gradient-to-br ${tier.color} border ${
                tierError ? 'border-red-500' : 'border-gray-700'
              } rounded-xl p-6 shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer ${
                formData.tier === tier.name ? 'ring-2 ring-red-500' : ''
              }`}
              onClick={() => {
                setFormData(prev => ({ ...prev, tier: tier.name }));
                setTierError('');
              }}
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
        {tierError && (
          <p className="mt-1 text-sm text-red-500 text-center mb-4">
            {tierError}
          </p>
        )}

        {/* Form */}
        <div className="backdrop-blur-lg bg-black/30 rounded-xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-500">TedX IIITS Waitlist</h2>
            
            <p className="mt-2 text-gray-300">*seats will be given out on first come first serve basis</p>
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

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
                className={`w-full px-4 py-2 bg-black/30 text-white rounded-lg border ${
                  phoneError ? 'border-red-500' : 'border-gray-700'
                } focus:border-red-500 focus:ring-1 focus:ring-red-500`}
                placeholder="Enter your phone number"
              />
              {phoneError && (
                <p className="mt-1 text-sm text-red-500">
                  {phoneError}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Organization
              </label>
              <select
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray text-red rounded-lg border  focus:border-red-500 focus:ring-1 focus:ring-red-500"
                style={{ backgroundColor: 'black' }}
              >
                <option value="" className="bg-black text-white">Select Organization</option>
                {organizations.map(org => (
                  <option key={org} value={org} className="bg-black text-white">{org}</option>
                ))}
              </select>
            </div>

            {formData.organization === 'Other' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Other Organization
                </label>
                <input
                  type="text"
                  name="otherOrganization"
                  value={formData.otherOrganization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/30 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="Enter your organization"
                />
              </div>
            )}

            

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
              disabled={!formData.tier || loading}
              className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                formData.tier 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 cursor-pointer' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              {!formData.tier ? 'Please Select a Tier' : loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
            
            {/* Add helper text above button */}
            <p className="text-center text-sm text-gray-400 mb-4">
              {!formData.tier ? '👆 Select a tier package above to continue' : '✨ Ready to join!'}
            </p>
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