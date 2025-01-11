import BgSpiral from "../assets/hands.png";
import SeaBanner from "../assets/sea2.jpg";
import { useNavigate } from 'react-router-dom';
function Booking() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <div className="h-[auto] mb-4">
      <div className="w-full h-[90%] flex flex-row">
        <div
          className="flex w-[110%] bg-right bg-[210%_auto] px-8 bg-no-repeat
        bg-opacity-15"
          style={{ backgroundImage: `url(${SeaBanner})` }}
        >
          {/* <div className="absolute h-[100%] w-[100vw] block top-0 left-0 bg-black opacity-50"></div> */}
          <div className="inset-0 bg-gradient-to-br from-[#002f4b] to-[#dc4225] opacity-60"></div>
          <div className="flex flex-col justify-center">
            <div className="">
              <section className="flex items-top justify-center h-[100%] bg-black-100">
                <div className="flex flex-col p-3 max-w-2xl w-full rounded-lg shadow-md justify-center">
                  <p className="text-[1.25rem] my-6">
                    <i>Kaleidoscope of Humanity,</i> envisions a world where the
                    beauty of human diversity comes together to create something
                    extraordinary. Just like a kaleidoscope, where every shift
                    reveals new patterns and colors, humanity is a vibrant
                    mosaic of cultures, perspectives, and experiences.
                  </p>
                  {/* <button className="overflow-hidden w-[25%] ml-[37%] bg-#ef4444-500 bg-black border-white hover:bg-red-700 text-white font-bold py-2 px-4 rounded group mt-[5vh] p-[2vh]">
                    <span className="inline-block relative transition-all duration-500 group-hover:pr-4 cursor-pointer">
                      Book Now
                    </span>
                  </button> */}
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          className="bg-center w-[60%] h-auto bg-repeat flex justify-center items-center"
          style={{ backgroundImage: `url(${BgSpiral})` }}
        >
          <button className="px-2 h-auto py-3 rounded-lg bg-black text-red-500 text-lg border border-red-500 transform hover:scale-105 transition duration-300 mr-2" 
          onClick={handleClick}>
            Book Your Tickets!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Booking;
