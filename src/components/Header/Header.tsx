import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About Us"} />
          <Route path="/join" element={"Join Us"} />
          <Route path="*" element={"Not Found"} />
        </Routes>
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/join">Join US</NavLink>
    </header>
  );
};

export default Header;
