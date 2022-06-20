import Image from "next/dist/client/image";
import clientPhoto1 from "../../assets/img/testimonials/testimonials-1.jpg"
import clientPhoto2 from "../../assets/img/testimonials/testimonials-2.jpg"
import clientPhoto3 from "../../assets/img/testimonials/testimonials-3.jpg"
import clientPhoto4 from "../../assets/img/testimonials/testimonials-4.jpg"
import clientPhoto5 from "../../assets/img/testimonials/testimonials-5.jpg"

const Testimonials = () => {
    return (
        <section id="testimonials">
        <div className="container position-relative testimonials wow fadeIn" data-wow-duration="5s">
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image src={clientPhoto1} width="100%" height="100%" className="testimonial-img" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                    Accusantium
                    quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image src={clientPhoto2} width="100%" height="100%" className="testimonial-img" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                    quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image src={clientPhoto3} width="100%" height="100%" className="testimonial-img" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                    tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image src={clientPhoto4} width="100%" height="100%" className="testimonial-img" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                    minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <Image src={clientPhoto5} width="100%" height="100%" className="testimonial-img" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                    culpa
                    labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    )
}

export default Testimonials;