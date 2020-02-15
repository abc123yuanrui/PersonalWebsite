import { withRouter } from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import Footer from '../components/Footer';

// const input = testVideo.querySelector('[type=file]')
const thisUrl = `https://drive.google.com/uc?id=1TaIsYF-s_1ZX67c9l4K8Pwa_MY995fiK`;
const localUrl = '/videos/test.mp4'

class HomePage extends Component {

    render(){
        return <div>
            <Header />
            <div>
<h2 className="myH2">About me ?</h2>
<p className="myP">I am Ray</p>
<p className="myP">My project sources can be found on (<a href="https://github.com/abc123yuanrui">My Github Profile</a>) </p>
<p className="myP">I HOPE YOU FIND THIS USEFULL</p>
<p className="myP">Rui (Ray) Yuan</p>
<p className="myP">	My contact info:
</p>
</div>
            <ReactPlayer className="myVideo" url= {thisUrl} playing= {true}  controls= {true}/>
            <img className="myPic" src='https://drive.google.com/uc?id=0Bwezf3fxXVZkakF3Rnl1dkxvR3FrM3Zlekd0UVZLYU5KQ1Rz'/>
            <Footer />
            </div>
    }
  }
  
  export default HomePage