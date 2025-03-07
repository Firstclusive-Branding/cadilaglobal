// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Homepage from "./components/Homepage";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <Homepage />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
// import About from "./components/About";
// import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

// Layout Component (Includes Header, Navbar, Footer)
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet /> {/* Dynamic content goes here */}
      <Footer />
    </div>
  );
};

// Define Routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Homepage /> },
      // { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
