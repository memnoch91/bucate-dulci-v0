import React, { Component } from "react";
// import PropTypes from 'prop-types'

import "./mainContent.scss";

export class MainContent extends Component {
  state = {
    width: null,
    liveWidth: null
  };

  logWidth = () => {
    console.log("windowWidth:", window.innerWidth);
  };

  updateWidth = () => {
    if (window.innerWidth > 1080) {
      this.setState({
        liveWidth: 455
      })
    } else {
      this.setState({
        liveWidth: window.innerWidth / 1.618
      })
    }
  };

  liveResizle = () => {

    this.updateWidth();
    this.logWidth();
    return this.state.liveWidth
  }

  updateToWindowDimmensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.liveResizle);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.liveResizle);
  }

  render() {
    const styleImage = {
      width: this.state.liveWidth || 455
    };
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
