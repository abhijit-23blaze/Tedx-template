import BgSpiral from "../assets/hands.png";
import SeaBanner from "../assets/sea2.jpg";
import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="backdrop-blur-lg bg-black/30 rounded-xl p-8 border border-gray-700 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Humanity Reimagined
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed italic">
              Envisions a world where the beauty of human diversity comes together to create something extraordinary. Just like a kaleidoscope, where every shift reveals new patterns and colors, humanity is a vibrant mosaic of cultures, perspectives, and experiences.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div 
            className="relative w-full aspect-square rounded-xl overflow-hidden"
            style={{ 
              backgroundImage: `url(${BgSpiral})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <button 
                onClick={handleClick}
                className="px-8 py-4 bg-transparent text-red-500 text-xl font-bold border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              >
                JOIN WAITLIST
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
