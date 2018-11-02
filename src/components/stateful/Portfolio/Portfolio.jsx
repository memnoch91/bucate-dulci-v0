import React, { Component } from "react";
// import PropTypes from 'prop-types'
import ReactAux from "../../stateless/HigherOrderComp/ReactAux/ReactAux";
import "./portfolio.scss";
import TextBox from "../../stateless/TextBox/TextBox"

export class Portfolio extends Component {
  state = {
    width: null
  };

  updateWidth = () => {
    if (window.innerWidth > 1080) {
      this.setState({
        width: 455
      });
    } else {
      this.setState({
        width: window.innerWidth / 1.618
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return <main className="portfolio-container">BelishSpermezeu </main>;
  }
}

export default Portfolio;
