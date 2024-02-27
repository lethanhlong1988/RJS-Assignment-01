import Navs from "./Navs";

import "./Navbar.css";

const Navbar = () => {
  const goHomePageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };
  const goSearchPageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/search");
  };
  const goDetailPageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/detail");
  };
  return (
    <div className="blueBG">
      <div className="container-concept topbar">
        <div className="logo">
          Booking Website
          <button onClick={goHomePageHandler}>Home</button>
          <button onClick={goSearchPageHandler}>Search</button>
          <button onClick={goDetailPageHandler}>Detail</button>
        </div>
        <div className="buttonbar">
          <button className="whiteButton">Register</button>
          <button className="whiteButton">Login</button>
        </div>
      </div>
      <Navs />
    </div>
  );
};

export default Navbar;
