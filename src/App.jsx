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
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import FloatingIcons from "./components/FloatingIcons";
import PermanentHiring from "./components/PermanentHiring";
import TemporaryHiring from "./components/TemporaryHiring";
import ContractHire from "./components/ContractHire";
import RPO from "./components/RPO";
import ContractToHire from "./components/ContractToHire";
import ConsultingServices from "./components/ConsultingServices";
import ExecutiveHiring from "./components/ExecutiveHiring";
import SpecializedHiring from "./components/SpecializedHiring";
import HireTalent from "./components/HireTalent";
import Services from "./components/Services";

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
      { path: "/find-jobs", element: <Careers /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/services/permanent-hiring", element: <PermanentHiring /> },
      { path: "/services/temporary-hiring", element: <TemporaryHiring /> },
      { path: "/services/recruitment-process-outsourcing", element: <RPO /> },
      { path: "/services/contract-to-hire", element: <ContractToHire /> },
      { path: "/services/consulting", element: <ConsultingServices /> },
      { path: "/services/executive-hiring", element: <ExecutiveHiring /> },
      { path: "/services/specialized-hiring", element: <SpecializedHiring /> },
      { path: "/services/contract-hiring", element: <ContractHire /> },
      { path: "/find-talent", element: <HireTalent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
