import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Uploader from '../components/Uploader';
export default class Service extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className='serviceTitle'>Add cartoon effect to your photo</div>
                <div className='serviceP'>Choose a photo to process and see the difference! (It may take few seconds to few minutes depending on the quality of your photo)</div>
                <Uploader />
                <Footer />
            </div>
        )
    }
}