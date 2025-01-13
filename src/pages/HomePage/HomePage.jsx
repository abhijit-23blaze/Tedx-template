import Booking from "../../components/Booking";
import ReasonsToAttend from "../../components/reasons";
import StartingBanner from "../../components/StartingBanner";
import Timer from "../../components/Timer";
import Speaker from "../../components/Speaker";
//import Footer from "../../components/Footer";
function HomePage() {
  return (
    <div>
      <StartingBanner />
      <Booking />
      <Timer />
      <ReasonsToAttend />
      <Speaker />

      
    </div>
  );
}

export default HomePage;
