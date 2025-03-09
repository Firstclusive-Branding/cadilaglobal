import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import AboutUs from "./components/AboutUs";
import ExecutiveSearch from "./components/ExecutiveSearch";
import DirectHire from "./components/DirectHire";
import ContractHire from "./components/ContractHire";
import PermanentStaffing from "./components/PermanentStaffing";
import ITStaffing from "./components/ITSatffing";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import HireTalent from "./components/HireTalent";
import FloatingIcons from "./components/FloatingIcons";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/careers", element: <Careers /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/services/executive-search", element: <ExecutiveSearch /> },
      { path: "/services/direct-hire", element: <DirectHire /> },
      { path: "/services/contract-hire", element: <ContractHire /> },
      { path: "/services/permanent-staffing", element: <PermanentStaffing /> },
      { path: "/services/it-staffing", element: <ITStaffing /> },
      { path: "/hire-talent", element: <HireTalent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
