import Image from "next/dist/client/image"
import portfolioImg1 from "../../assets/img/portfolio/napcheif.png"
import portfolioImg2 from "../../assets/img/portfolio/sleepyowl.png"
import portfolioImg3 from "../../assets/img/portfolio/xylife.png"
import portfolioImg4 from "../../assets/img/portfolio/gem.png"
import portfolioImg5 from "../../assets/img/portfolio/soulful.png"
import portfolioImg6 from "../../assets/img/portfolio/equator.png"


const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container wow fadeInUp" data-wow-duration="1.5s">

        <div className="section-title wow fadeInDown" data-wow-duration="2s">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Providing Smarter Websites.</p>
        </div>

        {/* <ul id="portfolio-flters" className="d-flex justify-content-center wow flipInX animated" data-wow-duration="2s">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul> */}

        <div className="row portfolio-container">

          <div className="col-lg-6 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInLeft" data-wow-duration="2.5s">
              <Image src={portfolioImg1} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="https://napchief.com/" target="_blank">
              <h4>NapChief</h4>
              <p>This is a shopify store which is build from scratch.</p>
              </a>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 1"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 portfolio-item filter-web">
            <div className="portfolio-img wow bounceInUp" data-wow-duration="2.5s">
              <Image src={portfolioImg2} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="https://sleepyowl.co/">
              <h4>Sleepy Owl</h4>
              <p>This is project for a shopify client.</p>
              </a>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 3"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInRight" data-wow-duration="2.5s">
              <Image src={portfolioImg3} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="https://xylife.com/">
              <h4>XY Life</h4>
              <p>My project for xylife</p>
              </a>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 portfolio-item filter-card">
            <div className="portfolio-img wow bounceInLeft" data-wow-duration="2.5s">
              <Image src={portfolioImg4} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="https://dailygem.co/">
              <h4>GEM Vitamins</h4>
              <p>My project for GEM Vitamins.</p>
              </a>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 portfolio-item filter-web">
            <div className="portfolio-img wow bounceInDown" data-wow-duration="2.5s">
              <Image src={portfolioImg5} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="#" >
              <h4>Soulful</h4>
              <p>Soulful</p>
              </a>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInRight" data-wow-duration="2.5s">
              <Image src={portfolioImg6} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <a href="#">
              <h4>Equator</h4>
              <p>Equator</p>
              </a>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 3"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;