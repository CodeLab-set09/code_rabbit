import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Heropage from "./components/Heropage";
// import backImg from "../../public/hero.png";

const LandingPage = () => {
  return (
    <div>
      <div className="h-screen">
        <Heropage />
      </div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
};

export default LandingPage;
