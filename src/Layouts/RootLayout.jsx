import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Job-Tour</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
