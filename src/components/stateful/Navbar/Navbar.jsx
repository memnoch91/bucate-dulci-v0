import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//CSS
import "./navbar.scss";
//ACTIONS
import { getLogo } from "../../../redux/actions/logoActions";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props.getLogo();
  }

  render() {
    const logoObject = this.props.logoImage.logo
      ? this.props.logoImage.logo.data[0]
      : "#";
    console.log("linkLogo", logoObject);
    return (
      <div className="navbar">
        <div className="navbar-content-container">
          <div className="navbar-logo">
            <img src={`${logoObject.link}`} alt={`${logoObject.id}`} />
          </div>
          <ul className="navbar-links">
            <li className="link-li">
              <Link to="/">Home</Link>
            </li>
            <li className="link-li">
              <Link to="portfolio">Bucatele Noastre</Link>
            </li>
            <li className="link-li">
              <Link to="about">Despre Noi</Link>
            </li>
            <li className="link-li">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div className="after">
            <div> </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logoImage: state.logoImage
  };
};

export default connect(
  mapStateToProps,
  {
    getLogo
  }
)(Navbar);
