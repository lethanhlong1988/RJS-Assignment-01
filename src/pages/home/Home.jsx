import Navbar from "../../components/Header/Navbar";
import HeaderHome from "../../components/Header/HeaderHome";
import BodyHome from "../../components/Body/BodyHome";
import Footer from "../../components/Footer/Footer";
import SignupBar from "../../components/Footer/SignupBar";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="bg blueBG ">
        <div className="container-content">
          <Navbar />
        </div>
      </div>
      <div className="bg blueBG">
        <div className="container-content">
          <HeaderHome />
        </div>
      </div>
      <div className="bg">
        <div className="container-content body-content">
          <BodyHome />
        </div>
      </div>
      <div className="bg blueBG bg-singupBar">
        <div className="container-content body-content">
          <SignupBar />
        </div>
      </div>
      <div className="bg">
        <div className="container-content body-content">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
