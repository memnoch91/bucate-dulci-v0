import React, { Component } from "react";
// import PropTypes from 'prop-types'

import "./mainContent.scss";

export class MainContent extends Component {
  state = {
    width: null
  };

  logWidth = () => {
    console.log("windowWidth:", this.state.width ? this.state.width : "nada");
  };

  updateToWindowDimmensions = () => {
    this.setState({ width: window.innerWidth });
    this.logWidth()
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateToWindowDimmensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateToWindowDimmensions);
  }

  render() {
    let windowWidth = this.state.width;
    const styleImage = {
      styledWidth: `${windowWidth > 1080 ? 405 : windowWidth / 5}px`

    }
    const { images } = this.props;
    const sliderImages = images
      ? images.map(image => (
          <div className="mainContent-tile" key={image.id}>
            <img src={`${image.link}`} alt={`${image.id}`} style={styleImage} />
          </div>
        ))
      : null;
    return <div className="products-container">{sliderImages}</div>;
  }
}

export default MainContent;
