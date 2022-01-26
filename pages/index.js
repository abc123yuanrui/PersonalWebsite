import { withRouter } from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
// const input = testVideo.querySelector('[type=file]')
const thisUrl = `https://drive.google.com/uc?id=1TaIsYF-s_1ZX67c9l4K8Pwa_MY995fiK`;
const localUrl = '/videos/intro_new.mp4'

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
                <p className="myP">I am Ray, an industry PhD student majoring in Electrical Engineering at <a href='https://en.wikipedia.org/wiki/University_of_Adelaide'>the University of Adelaide</a> with full scholarship from the Uni, top-up scholarship and research allowance from <a href='https://watts.dk/en/'>Watts, Denmark</a>.</p>
                <p className="myP">My research focuses on Contineous Demand Response and big data in the energy industry. This position provides me exceptional opportunities to hone my skills on data mining and machine learning. More details on <a href='https://alipourmousavi.com/research_FRESNO.html'>FRESNO Project</a>. </p>
                <p className="myP">Got my Masters' degree in electronic engineering from <a href='https://en.wikipedia.org/wiki/University_of_Melbourne'>the University of Melbourne</a>. </p>
                <p className="myP">Got my Becholars' degree in telecommunication engineering from <a href='https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology'>Harbin Institute of Technology</a>.</p>
                <p className="myP">Worked one year on web development.</p>
                <p className="myP">Have an entry level certification on network engineering (Junos-Jucia).</p>
                <p className="myP">Have a solid understanding of both hardware and software applications.</p>
                <p className="myP">I’m really keen to take the next step in my career and begin to apply my skills.</p>
                <p className="myP"><a href='/files/RuiYuanCV.pdf' download>Download my CV</a></p>
            </div>
            <ReactPlayer className="myVideo" url= {localUrl} playing= {true}  controls= {true} height ="auto"/>
            </section>
            <section id='projects'>
                <div className = 'project'>
                <h2 className="myH2">Projects</h2>
                <p className='myT'>Web Chair | 32<sup>nd</sup> Australasian Universities Power Engineering Conference (AUPEC2022) | JAN2022 - OCT2022</p>
                <p className='myT'>iPhD Candidate | University of Adelaide & Watts  | JAN2021 - JAN2025</p>
                <p className="myP">As an industry PhD student working across Australia and Denmark, I'm commencing a research aiming to develop, test, and verify statistical models based on machine learning techniques to quantify prosumers’ responsiveness to time-varying prices in real-time. 
                My main research fields are: Renewable Energy, Contineous Demand Response, Data Mining, Machine Learning, Data Analysis, Stochastical Modelling. My research is funded by the University of Adelaide RTP and <a href='https://watts.dk/'>Watts, Denmark</a>.</p>
                <p className='myT'>National Award | Chunhui Cup Innovation and Entrepreneurship Competition | SEP2020 - NOV2020</p>
                <p className="myP">My independent innovative project on Blockchain awarded by China Ministry of Education and the Ministry of Science and Technology in 15<sup>th</sup> <a href='http://cyds.cscse.edu.cn/'>Chunhui Cup Innovation and Entrepreneurship Competition</a>. I was consecutively invited to 2020 and 2021 <a href='http://ocs-gz.org.cn/'>Convention on Exchange of Overseas Talents</a>, but didn't go because of the pandemic.</p>
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
            <section id='publications'>
            <div>
                <h2 className="myH2">Publications & Competitions</h2>
                <p className='myT'>IRMAC: Interpretable Refined Motifs and Binary Classification for Rooftops PV Owners</p>
                <p className="myP">In this paper, we seek to identify residential rooftop solar PV owners using imported energy data. To solve this problem with an interpretable, fast, secure, and maintainable solution, 
                we propose Interpretable Refined Motifs And binary Classification (IRMAC) method, which includes a shape-based dimensionality reduction technique we call Refined Motif (RM), and a classification technique with linear complexity to identify solar owners. 
                Furthermore, with the real data from Australia and Denmark, the proposed method is tested and verified in identifying PV owners as well as identifying electrical heating system users. <a href='https://arxiv.org/pdf/2109.13732.pdf'>Preprint</a>. </p>
                <p className='myT'>3rd Technical Challenge of the IEEE Computational Intelligence Society - Ranked 5th Place | Sep2021 - Nov2021</p>
                <p className="myP">This competition contains two objectives conducting energy prediction and class schedule optimisation. I proposed a novel Solar Generation Prediction model based on Refined Motifs and Resnet for tackling the multi-variate prediction problem.
                The competition included two phases, our solutions ranked 3rd in phase 1 and 6th in phase 2 among all 49 individuals/teams entities and over 700+ submissions in total. Check our solution at <a href='https://gitlab.com/ryuan/ieee-cis-data-challenge-fresno'>Project open source code</a>. The overall ranking in the shortlisted 7 groups is at the 5th place.&emsp;
                <a href='https://www.linkedin.com/posts/faculty-of-engineering-computer-and-mathematical-sciences_ecmsuofa-activity-6888958108773838848-W3AJ' id='trig1' class = "iframe-link">News of our achievement
                <iframe id='ifrm1'  src="https://www.linkedin.com/embed/feed/update/urn:li:share:6888958108102721536" height="1000" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </a>
                </p>
            </div>
            </section>
            <section id='contact'>
            <div style={{
                backgroundImage: `url('https://live.staticflickr.com/65535/49625617026_e984faa47d_b.jpg')`,
                width: "100%",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
                }}>
            <div className="myContact">
                <div className = "myForm">
                <h2>Let's Talk</h2>
                <form target="_blank" action="https://formsubmit.co/13a68587969ebef21d78cf774edd586a" method="POST">
                    <div class="form-group">
                    <div class="form-row">
                        <div class="col">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" />
                        </div>
                        <div class="col">
                        <input type="email" name="email" class="form-control" placeholder="Email Address" />
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-lg btn-dark btn-block">Send Message</button>
                </form>
                </div>
            </div>
            
            </div>
            </section>
            <Footer />
            </div>}
            </div>)
       
            
    }
  }
  
  export default HomePage