import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement("#root");

import "./App.css";
import Header from "./components/Mainpage/Header";
import Navbar from "./components/Mainpage/Navbar";
import Footer from "./components/Mainpage/Footer";
import ScrollToTop from "./components/Mainpage/ScrollToTop";
import FloatingIcons from "./components/Mainpage/FloatingIcons";

// Main Pages
import Homepage from "./components/Mainpage/Homepage";
import ContactUs from "./components/Mainpage/ContactUs";
import Careers from "./components/Mainpage/Careers";
import AboutUs from "./components/Mainpage/AboutUs";
import Services from "./components/Mainpage/Services";
import HireTalent from "./components/Mainpage/HireTalent";
import JobForm from "./components/Mainpage/JobForm";
import TermsAndCondition from "./components/Mainpage/TermsAndCondition";
import PolicyPage from "./components/Mainpage/PolicyPage";
import NotFound from "./components/Mainpage/NotFound";

// Service Pages
import PermanentHiring from "./components/Mainpage/PermanentHiring";
import TemporaryHiring from "./components/Mainpage/TemporaryHiring";
import ContractHire from "./components/Mainpage/ContractHire";
import RPO from "./components/Mainpage/RPO";
import ContractToHire from "./components/Mainpage/ContractToHire";
import ConsultingServices from "./components/Mainpage/ConsultingServices";
import ExecutiveHiring from "./components/Mainpage/ExecutiveHiring";
import SpecializedHiring from "./components/Mainpage/SpecializedHiring";

// Auth Pages
import AdminLogin from "./components/Admin components/AdminLogin";
import AdminSignup from "./components/Admin components/AdminSignup";

// Dashboard Layouts & Pages
import AdminLayout from "./components/Admin components/AdminLayout";
import AdminDashboard from "./components/Admin components/AdminDashboard";
import ManageJobs from "./components/Admin components/ManageJobs";
import ManageJobApplicants from "./components/Admin components/ManageJobApplicants";
import RecruiterForm from "./components/Admin components/RecruiterForm";
import ContactForms from "./components/Admin components/ContactForms";
import AdminUsers from "./components/Admin components/AdminUsers";
import ForgotPassword from "./components/Admin components/ForgotPassword";

// Route Protection
const ProtectedRoute = ({ element, roleKey }) => {
  const isAuthenticated = localStorage.getItem(roleKey) === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/fb", { replace: true });
  }, [isAuthenticated]);

  return isAuthenticated ? (
    element
  ) : (
    <div className="loading-screen">Loading...</div>
  );
};

// Layout for Main Site
const AppLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <FloatingIcons />
    </>
  );
};

// Router
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
      { path: "services/contract-hiring", element: <ContractHire /> },
      { path: "services/contract-to-hire", element: <ContractToHire /> },
      { path: "services/recruitment-process-outsourcing", element: <RPO /> },
      { path: "services/consulting", element: <ConsultingServices /> },
      { path: "services/executive-hiring", element: <ExecutiveHiring /> },
      { path: "services/specialized-hiring", element: <SpecializedHiring /> },
      { path: "find-talent", element: <HireTalent /> },
      { path: "find-jobs/apply", element: <JobForm /> },
      { path: "terms-and-conditions", element: <TermsAndCondition /> },
      { path: "privacy-policy", element: <PolicyPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/fb",
    children: [
      { index: true, element: <AdminLogin /> },
      { path: "sign-up", element: <AdminSignup /> },
      { path: "password-reset", element: <ForgotPassword /> },
      { path: "*", element: <Navigate to="/fb" replace /> },
      {
        element: <AdminLayout />,
        children: [
          // Dashboards
          {
            path: "admin-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="adminAuthenticated"
              />
            ),
          },
          {
            path: "manager-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="managerAuthenticated"
              />
            ),
          },
          {
            path: "recruiter-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="recruiterAuthenticated"
              />
            ),
          },

          {
            path: "users",
            element: (
              <ProtectedRoute
                element={
                  <AdminUsers
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },

          {
            path: "jobs",
            element: (
              <ProtectedRoute
                element={
                  <ManageJobs
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },

          {
            path: "job-applicants",
            element: (
              <ProtectedRoute
                element={
                  <ManageJobApplicants
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },

          // Recruiter Forms - Admin & Manager only
          {
            path: "recruiter-forms",
            element: (
              <ProtectedRoute
                element={<RecruiterForm />}
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : "managerAuthenticated"
                }
              />
            ),
          },

          // Contact Forms - Admin & Manager only
          {
            path: "contact-forms",
            element: (
              <ProtectedRoute
                element={<ContactForms />}
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : "managerAuthenticated"
                }
              />
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover={false}
      theme="colored"
    />
  </>
);
export default App;
