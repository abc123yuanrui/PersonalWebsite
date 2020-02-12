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
      if (window.scrollY>550) {
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
        <a href="/">Your Logo</a>
    </div>
    <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="/family">Family</a></li>
        </ul>
    </div>
    <span className="navTrigger">
        <i></i>
        <i></i>
        <i></i>
    </span>
</div>
</nav>
<section className="home">
</section>

</div>
    )
    }
}