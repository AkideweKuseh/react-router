// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import Careers, { careersLoader } from "./Pages/Careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./Pages/Careers/CareerDetails";
import CareersError from "./Pages/Careers/CareersError";
import Login from "./Pages/Help/Login";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={contactAction} />
        </Route>
        <Route
          path="careers"
          element={<CareersLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////// rgb(225, 0, 0)  OLDER WAY ///////////////////////////////////////////
// <BrowserRouter>
//   <header>
//     <nav>
//       <h1>Job-Tour</h1>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//     </nav>
//   </header>
//   <main>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </main>
// </BrowserRouter>
