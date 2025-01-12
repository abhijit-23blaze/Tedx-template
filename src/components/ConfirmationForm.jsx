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
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center">
        <div className="backdrop-blur-lg bg-black/30 p-8 rounded-xl border border-red-500/20">
          <div className="animate-spin w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-red-950 pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="pt-16 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto backdrop-blur-lg bg-black/30 rounded-xl shadow-2xl border border-gray-700 relative">
        {/* Ticket Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-t-xl pt-16 pb-16">
          <h2 className="text-4xl font-bold text-white text-center">TEDx IIITS</h2>
          <p className="text-xl text-white/80 text-center mt-2">Kaleidoscope of Humanity</p>
        </div>

        

        {/* Ticket Content */}
        <div className="pt-16 pb-16 p-8 space-y-10">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-400">Name</label>
              <p className="text-xl font-semibold text-white">{userData.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400">Tier</label>
              <p className="text-xl font-semibold text-red-500">{userData.tier}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-400">Email</label>
              <p className="text-base text-white">{userData.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-400">Phone</label>
              <p className="text-base text-white">{userData.phone}</p>
            </div>
          </div>

          {/* <div>
            <label className="text-sm font-medium text-gray-400">Reason</label>
            <p className="text-base text-white mt-1">{userData.reason}</p>
          </div> */}

          {/* Ticket Footer */}
          <div className="pt-6 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Registration ID</p>
                <p className="text-lg font-mono text-white">{userId}</p>
              </div>
              {/* Fake QR Code */}
              <div className="w-16 h-16 bg-white p-2 rounded-lg">
                <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000000_0px,#000000_2px,transparent_2px,transparent_6px)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ConfirmationForm;