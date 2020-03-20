import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Uploader from '../components/Uploader';
export default class Service extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className='serviceTitle'>Animate your photo</div>
                <Uploader />
                <Footer />
            </div>
        )
    }
}