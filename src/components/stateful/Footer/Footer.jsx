import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

//CSS
import "./footer.scss";
//ACTIONS
// import { getLogo } from "../../../redux/actions/logoActions";

export class Footer extends Component {
  render() {
    return(
    <div className="footer">
      <div className="footer-content-container">
        <div className="footer-left">
          <div> </div>
        </div>
        <ul className="footer-links">
          <li className="link-li">
            <Link to="/">Comenzi</Link>
            <span className="underline" />
          </li>
          <li className="link-li">
            <Link to="portfolio">Detalii Comerciale</Link>
            <span className="underline" />
          </li>
          <li className="link-li">
            <Link to="about">Formular Feedback</Link>
          </li>
          <li className="link-li">
            <Link to="contact">Recomandari</Link>
            <span className="underline" />
          </li>
        </ul>
        <ul className="footer-icons">
          <li className="link-li">
            <a href="https://www.facebook.com/prajituri.cozonac.decasa/" >
              <img src="./facebook.svg" alt="icon with link to facebook https://www.facebook.com/prajituri.cozonac.decasa/"/>
            </a>
          </li>
          <li className="link-li">
            <Link to="portfolio" />
          </li>
          <li className="link-li">
            <Link to="about" />
          </li>
          <li className="link-li">
            <Link to="contact" />
          </li>
        </ul>
      </div>
    </div>
    )
  }
}

export default Footer;
