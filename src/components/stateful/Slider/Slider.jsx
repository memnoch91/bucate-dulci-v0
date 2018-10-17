import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";

//ACTIONS
import {
  getSliderImages,
} from "../../../redux/actions/imgActions";

//Slider Imports
import { tns } from "tiny-slider/src/tiny-slider";
import "./tiny-slider.scss";
import { sliderOptions } from "./sliderOptions";

export class Slider extends Component {
  componentDidMount() {
    this.props.getSliderImages();
    tns(sliderOptions);
  }
  render() {
    return (
      <div className="product-slider">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  slider: state.slider
});

export default connect(
  mapStateToProps,
  {
    getSliderImages,
  }
)(Slider);

/**
 * Error: Network Error
    at createError (http://localhost:3000/static/js/0.chunk.js:1082:15)
    at XMLHttpRequest.handleError (http://localhost:3000/static/js/0.chunk.js:633:14)
 */
