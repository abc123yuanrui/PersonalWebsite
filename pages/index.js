import { withRouter } from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import Footer from '../components/Footer';

// const input = testVideo.querySelector('[type=file]')
const thisUrl = `https://drive.google.com/uc?id=1TaIsYF-s_1ZX67c9l4K8Pwa_MY995fiK`;
const localUrl = '/videos/introduction.mp4'

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
            <ReactPlayer className="myVideo" url= {localUrl} playing= {true}  controls= {true}/>
            </section>
            <section id='projects'>
                <div className = 'project'>
                <h2 className="myH2">Projects</h2>
                <p className='myT'>Alipay White Box payment system Australia | DEC2019 - FEB2020</p>
                <p className="myP">Worked with NOVATTI company building payment system based on Alipay White Box. I worked on front end development based on Ant Design, ReactJS, Graphql, mongoDB. 
                I also designed a pure backend server for multi url merchant QR code, which will redirect current user to different payment system based on where they scan the code (Inside Wechat, Alipay, or webbrowser).</p>
                <p className='myT'>Web Development | MAR2019 - DEC2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                <p className='myT'>Machine Learning GAN Image Caliabrater | JUN2019 - JUL2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                <p className='myT'>Capstone project | Jul2018 - Jul2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                <p className='myT'>PCB Digital Signal OSCILLOSCOPE | MAR2019 - DEC2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                <p className='myT'>Balancing an inverted pendulum on the EV3 robot | MAR2019 - DEC2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                <p className='myT'>PCB GAME CONTROLLER | MAR2019 - DEC2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. </p>
                    </div>
            </section>
            <img className="myPic" src='https://drive.google.com/uc?id=0Bwezf3fxXVZkakF3Rnl1dkxvR3FrM3Zlekd0UVZLYU5KQ1Rz'/>
            
            
            <Footer />
            </div>
            
    }
  }
  
  export default HomePage