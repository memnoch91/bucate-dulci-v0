import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Slider from "react-slick";
import { connect } from 'react-redux'

//Components
import Layout from '../../stateless/HigherOrderComp/Layout/Layout'

//CSS
// import '~slick-carousel/slick/_slick.scss'


export class Home extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <Layout>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({

})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(Home)
