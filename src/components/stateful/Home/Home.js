import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'

//Components
import Layout from '../../stateless/HigherOrderComp/Layout/Layout'
import Slider from "../Slider/Slider";

//Functions

//CSS


export class Home extends Component {

    render() {

        return (
            <Layout>
                <Slider/>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        admin: state.admin
    }
}


export default connect(mapStateToProps, null)(Home)
