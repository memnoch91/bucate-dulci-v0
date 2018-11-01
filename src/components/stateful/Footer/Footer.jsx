import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaceBookIcon, ICON_FB } from "../../stateless/Icons/facebook";
import { InstagramIcon, ICON_INSTA } from "../../stateless/Icons/instagram";
// import { connect } from "react-redux";

//CSS
import "./footer.scss";
// import { getLogo } from "../../../redux/actions/logoActions";

export class Footer extends Component {
  render() {
    return (
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
              <a href="https://www.facebook.com/prajituri.cozonac.decasa/">
                <FaceBookIcon
                  size={ICON_FB.SIZES.MED}
                  color={ICON_FB.COLORS.BRAND}
                  fontColor={ICON_FB.COLORS.FONT}
                />
              </a>
            </li>
            <li className="link-li">
              <a href="https://www.instagram.com/ged_citizen/">
                <InstagramIcon
                  size={ICON_INSTA.SIZES.MED}
                  color={ICON_INSTA.COLORS.BRAND}
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
