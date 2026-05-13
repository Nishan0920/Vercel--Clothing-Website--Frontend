import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import Home from "./Components/Home";
import Product from "./Components/Product";
import MyCart from "./Pages/MyCart";
import { Provider } from "./ContextProvider";

function App() {
  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
