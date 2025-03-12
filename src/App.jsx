import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingIcons from "./components/FloatingIcons";

// Pages
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import HireTalent from "./components/HireTalent";
import JobForm from "./components/JobForm";
import TermsAndCondition from "./components/TermsAndCondition";
import PolicyPage from "./components/PolicyPage";
import NotFound from "./components/NotFound";

// Services Pages
import PermanentHiring from "./components/PermanentHiring";
import TemporaryHiring from "./components/TemporaryHiring";
import ContractHire from "./components/ContractHire";
import RPO from "./components/RPO";
import ContractToHire from "./components/ContractToHire";
import ConsultingServices from "./components/ConsultingServices";
import ExecutiveHiring from "./components/ExecutiveHiring";
import SpecializedHiring from "./components/SpecializedHiring";

// Admin Pages
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ContentManagement from "./components/ContentManagement";
import ManageCareers from "./components/ManageCareers";
import ManageJobApplicants from "./components/ManageJobApplicants";

// Main Website Layout
const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

// Admin Panel Layout (Separate Design)
const AdminLayout = () => {
  return (
    <Admin>
      <Outlet />
    </Admin>
  );
};

const AdminRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    if (!authStatus) {
      navigate("/admin");
    }
  }, [navigate]);

  return isAuthenticated ? element : null;
};
// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "find-jobs", element: <Careers /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "services/permanent-hiring", element: <PermanentHiring /> },
      { path: "services/temporary-hiring", element: <TemporaryHiring /> },
      { path: "services/recruitment-process-outsourcing", element: <RPO /> },
      { path: "services/contract-to-hire", element: <ContractToHire /> },
      { path: "services/consulting", element: <ConsultingServices /> },
      { path: "services/executive-hiring", element: <ExecutiveHiring /> },
      { path: "services/specialized-hiring", element: <SpecializedHiring /> },
      { path: "services/contract-hiring", element: <ContractHire /> },
      { path: "find-talent", element: <HireTalent /> },
      { path: "find-jobs/apply", element: <JobForm /> },
      { path: "terms-and-conditions", element: <TermsAndCondition /> },
      { path: "privacy-policies", element: <PolicyPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, element: <AdminLogin /> },
      {
        path: "*",
        element: <Navigate to="/admin" replace />,
      },
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          {
            path: "dashboard",
            element: <AdminRoute element={<AdminDashboard />} />,
          },
          {
            path: "content-management",
            element: <AdminRoute element={<ContentManagement />} />,
          },
          {
            path: "careers",
            element: <AdminRoute element={<ManageCareers />} />,
          },
          {
            path: "job-applicants",
            element: <AdminRoute element={<ManageJobApplicants />} />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
