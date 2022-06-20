import Image from "next/dist/client/image"
import portfolioImg1 from "../../assets/img/portfolio/portfolio-1.jpg"
import portfolioImg2 from "../../assets/img/portfolio/portfolio-2.jpg"
import portfolioImg3 from "../../assets/img/portfolio/portfolio-3.jpg"
import portfolioImg4 from "../../assets/img/portfolio/portfolio-4.jpg"
import portfolioImg5 from "../../assets/img/portfolio/portfolio-5.jpg"
import portfolioImg6 from "../../assets/img/portfolio/portfolio-6.jpg"
import portfolioImg7 from "../../assets/img/portfolio/portfolio-7.jpg"
import portfolioImg8 from "../../assets/img/portfolio/portfolio-8.jpg"
import portfolioImg9 from "../../assets/img/portfolio/portfolio-9.jpg"


const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container wow fadeInUp" data-wow-duration="1.5s">

        <div className="section-title wow fadeInDown" data-wow-duration="2s">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center wow flipInX animated" data-wow-duration="2s">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInLeft" data-wow-duration="2.5s">
              <Image src={portfolioImg1} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 1"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-web">
            <div className="portfolio-img wow bounceInUp" data-wow-duration="2.5s">
              <Image src={portfolioImg2} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 3"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInRight" data-wow-duration="2.5s">
              <Image src={portfolioImg3} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-card">
            <div className="portfolio-img wow bounceInLeft" data-wow-duration="2.5s">
              <Image src={portfolioImg4} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-web">
            <div className="portfolio-img wow bounceInDown" data-wow-duration="2.5s">
              <Image src={portfolioImg5} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 2"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-app">
            <div className="portfolio-img wow bounceInRight" data-wow-duration="2.5s">
              <Image src={portfolioImg6} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="App 3"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-card">
            <div className="portfolio-img wow bounceInLeft" data-wow-duration="2.5s">
              <Image src={portfolioImg7} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 1"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-card">
            <div className="portfolio-img wow bounceInUp" data-wow-duration="2.5s">
              <Image src={portfolioImg8} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Card 3"><i className="fas fa-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i
                className="fas fa-paperclip"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 portfolio-item filter-web">
            <div className="portfolio-img wow bounceInRight" data-wow-duration="2.5s">
              <Image src={portfolioImg9} width="404" height="420" className="img-fluid" />
            </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link" title="Web 3"><i className="fas fa-plus"></i></a>
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