import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import MainInfo from "./components/mainInfo/MainInfo";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Decor from "./components/decor/Decor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainInfo />
    <Navigation />
    <Footer />
    <Decor />
  </React.StrictMode>
);
