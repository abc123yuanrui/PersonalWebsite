import Link from 'next/link';
import React from 'react';

const linkStyle = {
  marginRight: 15
};

const pageTitle = 'Rui(Ray)Yuan'

const MenuList = ({id, classes}) => {
    return (
        <ul id={id} className={classes}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/family">family</a>
          </li>
        </ul>
    );
  }
  
  export default class Header extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          showBar:'',
          showMenu:' hidden'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
   }
    handleScroll = e => {
      if (window.scrollY>800) {
        // do something at end of scroll
        const clicked = e.target.id
        this.setState({showBar:  ' affix'});
      }else{
        this.setState({showBar:  ''});
      }
    }
    showMenu =() => {
      this.state.showMenu === '' ? this.setState({showMenu: ' hidden'}): this.setState({showMenu: ''});
      console.log('currentState:',this.state.showMenu);
    }
    render(){
    return (
      <div>
        <title>{pageTitle}</title>
        <meta name="description" content="Welcome to the personal website of Rui Yuan (Ray). 
        Rui Yuan is a perfessioanl electronic engineer from the University of Melbourne. Rui Yuan has 
        one year working experience on IT field and a degree in telecommunication from the Harbin 
        Institute of Technology" />

    <nav className={`nav${this.state.showBar}`} >
    <div className="container">
    <div className="logo">
        <a href="/"><img className="myLogo" src='/icons/logo.png'/></a>
    </div>
    <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/interests">Interests</a></li>
            <li><a href="/family">Gallery</a></li>
        </ul>
    </div>
    <div className='mobileMenu' onClick={this.showMenu}>Menu</div>
    <div className={`navTrigger${this.state.showMenu}`} >
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/interests">Interests</a></li>
            <li><a href="/family">Gallery</a></li>
            <img className={`mobileMenuBackground${this.state.showBar}Menu`} src='http://mckee-jaco.com/dev/wp-content/uploads/2015/05/mckeejaco_sidebar-bkg.jpg' ></img>
    </div>
</div>
</nav>
<section className="home">
<img src='/photos/optBackground.jpg' alt='Ray-yuan Background'></img>
<div><h1>Rui Yuan</h1></div>
</section>

</div>
    )
    }
}