import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handlePayment = () => {
    window.open(userData.paylink, '_blank');
    setTimeout(() => {
      navigate('/thank-you');
    }, 5000);
  };


  if (!userData) {
    return (
      <div className="min-h-screen w-full  bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center">
        <div className="backdrop-blur-lg  bg-black/30 p-8 rounded-xl border border-red-500/20">
          <div className="animate-spin  w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
  
      <div className="max-w-3xl mx-auto">
        {/* Ticket Container */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative">
          {/* TEDx Header */}
          <div className="bg-gradient-to-r from-red-700 to-red-900 p-8">
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold tracking-tight">
                TED<span className="text-red-400">x</span>
              </h1>
              <h2 className="text-gray-300 text-xl mt-1 tracking-widest font-light">
                IIIT SRI CITY
              </h2>
            </div>
          </div>
  
          {/* Ticket Content */}
          <div className="p-8 space-y-8">
            {/* Decorative Elements */}
            <div className="absolute left-0 top-1/2 w-4 h-4 bg-black rounded-full -ml-2"></div>
            <div className="absolute right-0 top-1/2 w-4 h-4 bg-black rounded-full -mr-2"></div>
            <div className="border-t-2 border-dashed border-gray-800 absolute left-4 right-4 top-1/2"></div>
  
            {/* Main Info */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Name</label>
                <p className="text-2xl font-bold text-white mt-1">{userData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Tier</label>
                <p className="text-2xl font-bold text-red-500 mt-1">{userData.tier}</p>
              </div>
            </div>
  
            <div className="grid grid-cols-2 pt-16 gap-4">
              <div>
                <label className="text-sm font-medium  text-gray-400 uppercase tracking-wider">Email</label>
                <p className="text-base text-white mt-1 font-medium">{userData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Phone</label>
                <p className="text-base text-white mt-1 font-medium">{userData.phone}</p>
              </div>
            </div>
  
            {/* Ticket Footer */}
            <div className="pt-8  border-t border-gray-800 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Registration ID</p>
                  <p className="text-lg font-mono text-white mt-1 font-bold">{userData.uid}</p>
                </div>
                
                <button
                  onClick={handlePayment}
                  className="px-2 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 shadow-lg"
                >
                  <span>Complete Payment</span>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationForm;