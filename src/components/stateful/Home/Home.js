import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

//Components
import Layout from "../../stateless/HigherOrderComp/Layout/Layout";
import MainContent from "../MainContent/MainContent";

//ACTIONS
import { getMainImages } from "../../../redux/actions/imgActions";

//CSS

export class Home extends Component {

    constructor(props) {
        super(props);
        this.props.getMainImages()
    }

  render() {
    const { data } = this.props.mainImages.images;
    return (
      <Layout>
        <MainContent images={data} />
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
)(Home);
