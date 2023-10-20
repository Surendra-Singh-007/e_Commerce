// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import CartDetails from "./components/CartDetails"
// import { Routes, Route } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<CartDetails />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// };

// export default App;









import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
    <Header />
    <Home />
    </div>
  )
}

export default App