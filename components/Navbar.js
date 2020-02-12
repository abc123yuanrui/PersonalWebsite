import Link from 'next/link';

const pageTitle = 'Rui(Ray)Yuan'
const Background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCY9XbB2QR9fcgfeY3V_SFnDAGpfoQs_7nvPHACdy9xDUDXEeh'  
const Navbar = () => {
    return (
        <div>
        <title>{pageTitle}</title>
    <nav className="nav affix" >
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
    <span className="navTrigger" style={{backgroundImage:`url(${Background})`}}>
        <i></i>
        <i></i>
        <i></i>
    </span>
</div>
</nav>
<section className="home">
</section>

</div>
    );
  };
  
export default Navbar;