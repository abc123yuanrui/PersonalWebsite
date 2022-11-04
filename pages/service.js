import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Uploader from '../components/Uploader';
export default class Service extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className='serviceTitle'>Generate realistic images and art with your choice</div>
                <div className='serviceP'>Credit: Dall-e-2 and Openai</div>
                <form className='serviceP'>
               {/* <input type="text" className="form-control" /> */}
               <textarea className="serviceP" cols="20" rows="3">This is the default test</textarea>
               <button type="submit">Generate picture</button>
                </form>
                <div className='serviceTitle'>Add cartoon effect to your photo</div>
                <div className='serviceP'>Choose a photo to process and see the difference! (It may take few seconds to few minutes depending on the quality of your photo)</div>
                <Uploader />
                <Footer />
            </div>
        )
    }
}