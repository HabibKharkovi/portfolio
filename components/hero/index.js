import Image from "next/dist/client/image";
import heroImage from "../../assets/img/hero-bg.jpg"

const Hero = () => {
    return (
        <section id="hero" className="pt-30">
        <div className="container">
          <span className="background"></span>
          <div className="row">
            <div className="col-12 wow bounceInUp" data-wow-duration="3s">
              <div className="hero-img">
                <Image src={heroImage} width="1000" height="100%" />
              </div>
            </div>
            <div className="col-12 wow bounceInDown" data-wow-duration="3s">
              <div className="hero-box">
                <h1>Habib ur Rehman</h1>
                <h2>I am <span className="typed"></span></h2>
                <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="fas fa-angle-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero;