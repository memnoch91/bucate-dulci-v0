import React, { Component } from "react";
import { connect } from "react-redux";

// import PropTypes from 'prop-types'
//ACTIONS
import { getMainImages } from "../../../redux/actions/imgActions";

//CSS
import "./portfolio.scss";

// import ReactAux from "../../stateless/HigherOrderComp/ReactAux/ReactAux";
import Layout from "../../stateless/HigherOrderComp/Layout/Layout";

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
    return (
      <Layout>
        <main className="portfolio-container">BelishSpermezeu </main>
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
)(Portfolio);
