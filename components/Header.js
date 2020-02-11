import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

// const Header = () => (
//   <div>
//     <Link href="/">
//       <a style={linkStyle}>Home</a>
//     </Link>
//     <Link href="/family">
//       <a style={linkStyle}>About</a>
//     </Link>
//   </div>
// );
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
  
  const Header = () => {
    return (
          //   <div>
    //     <title>{pageTitle}</title>
    //     <nav className="teal lighten-1" style={{position: 'fixed', top: '0px', zIndex: '99'}}>
    //       <div className="nav-wrapper">
    //         <a href="" className="brand-logo left">
    //           <img width="83px" height="50px" /></a>
    //         <a className='hide-on-large-only dropdown-trigger right'  href='#' data-target='mobile-view'>
    //           <div style={{marginTop: 10}}>
    //             <img width="32px" height="32px"  />
    //           </div>
    //         </a>
    //         <MenuList id="mobile-view" classes="dropdown-content" />
    //         <MenuList id="desktop-view" classes="right hide-on-med-and-down" />
    //       </div>
    //     </nav>
    //   </div>
      <div>
    <nav className='nav'>
    <div className="container">
    <div className="logo">
        <a href="#">Your Logo</a>
    </div>
    <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
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
<div>
<h2 className="myH2">What is this ?</h2>
<p className="myP">This is a responsive fixed navbar animated on scroll</p>
<p className="myP">I took inspiration from  ABDO STEIF (<a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">https://codepen.io/abdosteif/pen/bRoyMb?editors=1100</a>)
and Dicson <a href="https://codepen.io/dicson/pen/waKPgQ">(https://codepen.io/dicson/pen/waKPgQ)</a></p>
<p className="myP">I HOPE YOU FIND THIS USEFULL</p>
<p className="myP">Albi</p>
<p className="myP">
</p>
</div>
</div>
    );
  };
  
export default Header;