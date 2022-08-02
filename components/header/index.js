import Image from "next/image"
import me from "../../assets/img/me.jpg"
 
const Header = () => {
    return (
        <header id="header" className="header-transparent">
            <div className="profile">
                <div className="img-fluid-wrapper" >
                </div>
                <h1>Habib </h1>
            </div>
            <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="/"><i className="fas fa-house-user"></i>Home</a></li>
                <li><a className="nav-link scrollto" href="#about"><i className="fas fa-user-alt"></i>About</a></li>
                {/* <li><a className="nav-link scrollto" href="#services"><i className="fas fa-poll"></i>Services</a></li> */}
                <li><a className="nav-link scrollto" href="#portfolio"> <i className="fas fa-briefcase"></i>Portfolio</a></li>
                {/* <li><a className="nav-link scrollto" href="#blog"><i className="fas fa-file"></i>Blog</a></li> */}
                <li><a className="nav-link scrollto" href="#contact"><i className="fas fa-envelope"></i>Contact</a></li>
            </ul>
            <i className="fas fa-bars mobile-nav-toggle"></i>
            </nav>
            <div className="social-links">
            <a className="twitter"><i className="fab fa-twitter"></i></a>
            <a className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a className="instagram"><i className="fab fa-instagram"></i></a>
            <a className="google-plus"><i className="fab fa-skype"></i></a>
            </div>
        </header>
    )
}

export default Header;