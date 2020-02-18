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
            <section id='about'>
            <div>
<h2 className="myH2">About me</h2>
<p className="myP">I am Ray.</p>
<p className="myP">Got my Masters' degree in electronic engineering from the University of Melbourne. </p>
<p className="myP">Got my Becholars' degree in telecommunication engineering from the Harbin Institute of Technology.</p>
<p className="myP">Worked one year on web development.</p>
<p className="myP">Have a entry level certification on network engineering (Junos-Jucia).</p>
<p className="myP">Have a solid understanding of both hardware and software applications.</p>
<p className="myP">I’m really keen to take the next step in my career and begin to apply my skills.
</p>
</div>
            <ReactPlayer className="myVideo" url= {thisUrl} playing= {true}  controls= {true}/>
            <img className="myPic" src='https://drive.google.com/uc?id=0Bwezf3fxXVZkakF3Rnl1dkxvR3FrM3Zlekd0UVZLYU5KQ1Rz'/>
            </section>
            <Footer />
            </div>
            
    }
  }
  
  export default HomePage