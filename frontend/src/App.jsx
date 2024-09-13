import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Memu from "./components/layouts/Memu";
import Cart from "./components/cart/Cart";
import OrderSuccess from "./components/cart/OrderSuccess";

export default function App() {
  return <div className="App">
    <Header />
    <div className="container container-fluid">
      <Home />
      {/* <Memu /> */}
      {/* <Cart /> */}
      {/* <OrderSuccess /> */}
    </div>
    <Footer />
  </div>;
}
