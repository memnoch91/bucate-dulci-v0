import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

//Components
import Layout from "../../stateless/HigherOrderComp/Layout/Layout";
import Carousel from "../Carousel/Carousel";

//ACTIONS
import { getSliderImages } from "../../../redux/actions/imgActions";

//CSS

export class Home extends Component {

    constructor(props) {
        super(props);
        this.props.getSliderImages()
    }

  render() {
    const { data } = this.props.slider.images;
    return (
      <Layout>
        <Carousel images={data} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    slider: state.slider
  };
};

export default connect(
  mapStateToProps,
  {
    getSliderImages
  }
)(Home);
