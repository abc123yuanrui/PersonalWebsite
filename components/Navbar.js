import { render } from "react-dom";
import { Component } from "react";

const pageTitle = 'Rui(Ray)Yuan' 

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:' hidden'
        };
      }
      showMenu =() => {
        this.state.showMenu === '' ? this.setState({showMenu: ' hidden'}): this.setState({showMenu: ''});
        console.log('currentState:',this.state.showMenu);
      }
    render() {
        return (
            <div>
            <title>{pageTitle}</title>
            <meta name="description" content="Welcome to the personal website of Rui Yuan (Ray). 
            Rui Yuan is a perfessioanl electronic engineer from the University of Melbourne. Rui Yuan has 
            one year working experience on IT field and a degree in telecommunication from the Harbin 
            Institute of Technology." />
        <nav className="nav fix" >
        <div className="container">
        <div className="logo">
        <a href="/"><img className="myLogo" src='/icons/logo.png'/></a>
        </div>
        <div id="mainListDiv" className="main_list">
             <ul className="navlinks">
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/interests">Interests</a></li>
                <li><a href="/family">Gallery</a></li>
                <li><a href="/service">Service</a></li>
             </ul>
        </div>
        <div className='mobileMenu' onClick={this.showMenu}>Menu</div>
        <div className={`navTrigger${this.state.showMenu}`} >
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/interests">Interests</a></li>
            <li><a href="/family">Gallery</a></li>
            <li><a href="/service">Service</a></li>
    </div>
    </div>
    </nav>
    </div>
        );
    }
    
  }