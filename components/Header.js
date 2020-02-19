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
          showBar:''
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
    render(){
    return (
      <div>
        <title>{pageTitle}</title>
    <nav className={`nav${this.state.showBar}`} >
    <div className="container">
    <div className="logo">
        <a href="/"><img className="myLogo" src='/icons/logo.png'/></a>
    </div>
    <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#">Interests</a></li>
            <li><a href="/family">Family</a></li>
        </ul>
    </div>
    <span className="navTrigger">
    <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#">Interests</a></li>
            <li><a href="/family">Family</a></li>
    </span>
</div>
</nav>
<section className="home">
<img src='/photos/optBackground.jpg'></img>
<div><h1>Rui Yuan</h1></div>
</section>

</div>
    )
    }
}