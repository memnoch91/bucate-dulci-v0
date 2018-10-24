import React, { Component } from "react";
import Slider from 'react-slick';
import "./slick.scss";
import "./slick-theme.scss";


// import PropTypes from 'prop-types'
import { connect } from "react-redux";



export class Carousel extends Component {

  render() {
    const setting = {
      arrows:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    const { images } = this.props;
    const sliderImages = images ? images.map(image => (
          <div key={image.id}>
            <img src={`${image.link}`} alt={`${image.id}`} />
          </div>
        ))
      : null;
    return <Slider {...setting} className="product-slider">{sliderImages}</Slider>;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Carousel);
