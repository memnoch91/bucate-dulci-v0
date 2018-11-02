import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaceBookIcon } from "../../stateless/Icons/facebook";
import { InstagramIcon } from "../../stateless/Icons/instagram";
import { FBCOLORBRAND, INSTACOLORBRAN, WHITECOLOR, MIDSIZE } from "../../../utils/cssConsts"
// import { connect } from "react-redux";

//CSS
import "./footer.scss";
// import { getLogo } from "../../../redux/actions/logoActions";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content-container">
          {/* FOOTER LEFT */}
          <div className="footer-left">
            <div> </div>
          </div>
          {/* FOOTER MIDDLE */}
          <ul className="footer-links">
            <li className="link-li">
              <span className="underline">
                <Link to="/">Comenzi</Link>
              </span>
            </li>
            <li className="link-li">
              <span className="underline">
                <Link to="portfolio">Detalii Comerciale</Link>
              </span>
            </li>
            <li className="link-li">
              <span className="underline">
                <Link to="about">Formular Feedback</Link>
              </span>
            </li>
            <li className="link-li">
              <span className="underline">
                <Link to="contact">Recomandari</Link>
              </span>
            </li>
          </ul>
          {/* FOOTER RIGHT */}
          <ul className="footer-icons">
            <li className="link-li">
              <a href="https://www.facebook.com/prajituri.cozonac.decasa/">
                <FaceBookIcon
                  size={MIDSIZE}
                  color={FBCOLORBRAND}
                  fontColor={WHITECOLOR}
                />
              </a>
            </li>
            <li className="link-li">
              <a href="https://www.instagram.com/ged_citizen/">
                <InstagramIcon
                  size={MIDSIZE}
                  color={INSTACOLORBRAN}
                />
              </a>
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
    );
  }
}

export default Footer;
