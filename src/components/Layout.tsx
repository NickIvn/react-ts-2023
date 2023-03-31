import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/join">Join Us</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
