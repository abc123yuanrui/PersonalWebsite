import Link from 'next/link';

const pageTitle = 'Rui(Ray)Yuan' 
const Navbar = () => {
    return (
        <div>
        <title>{pageTitle}</title>
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
            <li><a href="/family">Family</a></li>
         </ul>
    </div>
</div>
</nav>
</div>
    );
  };
  
export default Navbar;