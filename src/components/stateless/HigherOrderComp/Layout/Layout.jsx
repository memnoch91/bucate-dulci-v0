import React from "react";
import "./layout.scss";

//COMPONENTS
import Navbar from "../../../stateful/Navbar/Navbar";
import Footer from "../../../stateful/Footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
        <Navbar />
        {props.children}
        <Footer />
    </div>
  );
}

export default Layout;
