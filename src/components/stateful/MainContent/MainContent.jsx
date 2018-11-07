import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

//ACTIONS
import { getMainImages } from "../../../redux/actions/imgActions";
//CSS
import "./mainContent.scss";

import ReactAux from "../../stateless/HigherOrderComp/ReactAux/ReactAux";
import Layout from "../../stateless/HigherOrderComp/Layout/Layout";
import TextBox from "../../stateless/TextBox/TextBox";

export class MainContent extends Component {

  state = {
    width: null
  };

  updateWidth = () => {
    if (window.innerWidth > 1440) {
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
    this.props.getMainImages();
    window.addEventListener("resize", this.updateWidth);
    if(window.innerWidth < 1440) {
      this.updateWidth()
    }
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
      color: " #FFFFFF",
      fontSize: 25,
      textAlign: "center",
      lineHeight: 106,
      position: "absolute",
      top: 200,
      right: 10
    };
    const { data } = this.props.mainImages.images;
    const sliderImages = data
      ? data.map(image => (
          <ReactAux>
            <div className="mainContent-tile" key={image.id}>
              <img
                src={`${image.link}`}
                alt={`${image.id}`}
                style={styleImage}
              />
              <TextBox css={styleTextBox} text={image.id} key={image.link} />
            </div>
          </ReactAux>
        ))
      : null;
    return (
      <Layout>
        <main className="main-container">
          <div className="tile-products-container">{sliderImages}</div>
        </main>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainImages: state.mainImages
  };
};

export default connect(
  mapStateToProps,
  {
    getMainImages
  }
)(MainContent);
