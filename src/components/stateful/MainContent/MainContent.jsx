import React, { Component } from "react";
// import PropTypes from 'prop-types'
import ReactAux from "../../stateless/HigherOrderComp/ReactAux/ReactAux";
import "./mainContent.scss";
import TextBox from "../../stateless/TextBox/TextBox"

export class MainContent extends Component {
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
    const styleImage = {
      width: this.state.width || 455
    };
    const styleTextBox = {
      display: "block",
      backgound: "transparent",
      border: "3px solid #FFFFFF",
      width: 173,
      height: 106,
      color:" #FFFFFF",
      fontSize: 25,
      textAlign: "center",
      lineHeight: 106,
      position: "absolute",
      top: 200,
      right: 10
    }
    const { images } = this.props;
    const sliderImages = images
      ? images.map((image) => (
          <ReactAux>
            <div className="mainContent-tile" key={image.id}>
              <img
                src={`${image.link}`}
                alt={`${image.id}`}
                style={styleImage}
              />
            <TextBox  css={styleTextBox} text={image.id} key={image.link}/>
            </div>
          </ReactAux>
        ))
      : null;
    return <main className="products-container">{sliderImages} </main>;
  }
}

export default MainContent;
