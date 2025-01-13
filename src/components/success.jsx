import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { uniqueId } = location.state || {};

  useEffect(() => {
    if (!uniqueId) {
      navigate('/');
    }
  }, [uniqueId, navigate]);

  return (
    <div className="min-h-screen w-screen pt-32 bg-gradient-to-br from-black via-gray-900 to-red-950 pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 flex items-center justify-center">
        <div className="backdrop-blur-lg bg-black/30 rounded-2xl p-8 border border-gray-700 shadow-2xl max-w-2xl w-full">
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-white">Registration Successful!</h1>
            <p className="text-xl text-gray-300">Thank you for registering for TEDxIIIT Sri City</p>
            
            <div className="py-6 border-t border-gray-700">
              <p className="text-gray-400">Your Registration ID:</p>
              <p className="text-2xl font-mono text-red-500 mt-2">{uniqueId}</p>
            </div>

            <p className="text-gray-300 text-sm">
              Please save your registration ID for future reference.
              <br />
              We will contact you soon with further details.
            </p>

            <button
              onClick={() => navigate('/')}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;