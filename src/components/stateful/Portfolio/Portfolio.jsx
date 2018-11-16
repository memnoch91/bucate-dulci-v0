import React, { Component } from "react";
import { connect } from "react-redux";

// import PropTypes from 'prop-types'
//ACTIONS
import { getPortfolioImages } from "../../../redux/actions/portfolioActions";

//CSS
import "./portfolio.scss";

// import ReactAux from "../../stateless/HigherOrderComp/ReactAux/ReactAux";
import Layout from "../../stateless/HigherOrderComp/Layout/Layout";

export class Portfolio extends Component {



  componentDidMount() {
    this.props.getPortfolioImages();
  }


  render() {
    const images = this.props.portfolioImages;
    const description = this.props.portfolioImages ? this.props.portfolioImages[0].description : null;
    const descJSON = JSON.parse(description);
    console.log(descJSON);
    const card = images ? images.map(image => (
      <div key={`${image.id}`}>
        <img src={`${image.link}`} alt={`${image.title}`}  className="card"/>
      </div>
    )) : null;
    return (
      <Layout>
        <main className="portfolio-container expand">
          <section className="portfolio-asortate">
          <div className="portfolio-banner" title="Asortate"></div>
          <div className="container-images-asortate">
            {card}
          </div>
          </section>
         </main>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolioImages: state.portfolioImages.images.data
  };
};

export default connect(
  mapStateToProps,
  {
    getPortfolioImages
  }
)(Portfolio);
