import { withRouter } from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
// const input = testVideo.querySelector('[type=file]')
const thisUrl = `https://drive.google.com/uc?id=1TaIsYF-s_1ZX67c9l4K8Pwa_MY995fiK`;
const localUrl = '/videos/intro2.mp4'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }
    render(){
        return (<div>
            {this.state.isLoading?  <Loading />:
            <div>
            <Header />
            <section id='about'>
            <div>
                <h2 className="myH2">About me</h2>
                <p className="myP">I am Ray.</p>
                <p className="myP">Got my Masters' degree in electronic engineering from <a href='https://en.wikipedia.org/wiki/University_of_Melbourne'>the University of Melbourne</a>. </p>
                <p className="myP">Got my Becholars' degree in telecommunication engineering from <a href='https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology'>Harbin Institute of Technology</a>.</p>
                <p className="myP">Worked one year on web development.</p>
                <p className="myP">Have an entry level certification on network engineering (Junos-Jucia).</p>
                <p className="myP">Have a solid understanding of both hardware and software applications.</p>
                <p className="myP">I’m really keen to take the next step in my career and begin to apply my skills.</p>
                <p className="myP"><a href='/files/RuiYuanCV2020.doc' download>Download my CV</a></p>
            </div>
            <ReactPlayer className="myVideo" url= {localUrl} playing= {true}  controls= {true} width="50%" height ="auto"/>
            </section>
            <section id='projects'>
                <div className = 'project'>
                <h2 className="myH2">Projects</h2>
                <p className='myT'>Research Assistant | RMIT University & RELUXE | JUL2020 - OCT2020</p>
                <p className="myP">Manage the model development and optimisation of the research & innovation project with the goal to generate a more accurate and practical virtual fitting model, 
                leveraging machine learning	methods (info-GAN, STN, pixel2pixelHD, etc). Details remain confidential due to the NDA.</p>
                <p className='myT'>Trouble Shooting | JUL2020 </p>
                <p className="myP">Fixed a bug in MIT deep learning library for MIT <a href='https://github.com/aamini/introtodeeplearning/pull/77#pullrequestreview-445175647'>Introduction to Deeplearning lab materials</a>.</p>
                <p className='myT'>Professional Year Program | Navitas | OCT2019 - SEP2020</p>
                <p className="myP">Honed my soft skills like business communication and got a Certificate IV in Business. I was taught about comprehensive tools like Canva, Blogger, 
                Surveymonkey, and Wix to serve the business (<a href='https://ruiyuan-navitas.blogspot.com/'>Blogs posted during Professional Year Program</a>). Additionally, my group 
                was encourageed to do <a href='https://123abcyuanrui.wixsite.com/marketstore'>an innovative project design</a></p>
                <p className='myT'>Alipay White Box payment system Australia | NOVATTI & Sage View Technology | DEC2019 - FEB2020</p>
                <p className="myP">Worked with NOVATTI company building payment system based on Alipay White Box. I worked on front end development based on Ant Design, ReactJS, Graphql, mongoDB. 
                I also designed a pure backend server for multi url merchant QR code, which will redirect current user to different payment system based on where they scan the code (Inside Wechat, Alipay, or webbrowser).</p>
                <p className='myT'>Web Developer | Sage View Technology | MAR2019 - DEC2019</p>
                <p className="myP">Worked for Sage View Technology company on website development. My skills on PHP(wordpress), ReactJS, NodeJS, React-Native, Graphql got significantly improved during this period.</p>
                <p className='myT'>Machine Learning GAN Image Caliabration | JUN2019 - JUL2019</p>
                <p className="myP">Designed a two-way GAN image processor wich can caliabrate the color and enhence the details in the image. The backend server was built by PYTHON FLASK. <a href='https://vm.tiktok.com/bNaLku/'>Small showcase video</a></p>
                <p className='myT'>Capstone project | Jul2018 - Jul2019</p>
                <p className="myP">City scale energy consumption modelling withan hourly resolution. Applying bottum-up approach, I designed 30 archetypes by EnergyPlus. With a long journey on cross-validation and 
                model caliabration, I gained lots of knowledge on data analysis and project management. The visualization was conducted by Tableau. I got the first class honor on my Capstone project.</p>
                <p className='myT'>PCB Digital Signal OSCILLOSCOPE | MAR2019 - DEC2019</p>
                <p className="myP">Designed a 20Mhz Digital Storage Oscilloscope and a PCB game console from schematic to hardware calibration. 
                The specification requirements were tested by LTSPICE. The PCB schematic was built by ALTIUM Designer.</p>
                <p className='myT'>Balancing an inverted pendulum on the EV3 robot | MAR2019 - DEC2019</p>
                <p className="myP">Built mathematical stability analysis and transfor function based on physical model. Programmed the robot by Matlab to balance the pendulum in different moving states.</p>
                <p className='myT'>PCB GAME CONTROLLER | MAR2019 - DEC2019</p>
                <p className="myP">Designed a PCB game controller and programmed games by C. 
                The hardware design process was accomplished by Altium Designer, while the software programming was carried out by AVR Studio. </p>
                    </div>
            </section>
            <img className="myPic" src='https://live.staticflickr.com/65535/49625617026_e984faa47d_b.jpg'
            // src='https://drive.google.com/uc?id=0Bwezf3fxXVZkakF3Rnl1dkxvR3FrM3Zlekd0UVZLYU5KQ1Rz'
            />
            
            
            <Footer />
            </div>}
            </div>)
       
            
    }
  }
  
  export default HomePage