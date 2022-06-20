import Image from "next/dist/client/image";
import projectImage1 from "../../assets/img/portfolio/portfolio-details-1.jpg";

const ProjectDetails = () => {
    return (
        <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <Image src={projectImage1} height="481" width="832" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={projectImage1} height="481" width="832" />
                        </div>
                        <div className="swiper-slide">
                            <Image src={projectImage1} height="481" width="832" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                        <li><strong>Category</strong>: Web design</li>
                        <li><strong>Client</strong>: ASU Company</li>
                        <li><strong>Project date</strong>: 01 March, 2020</li>
                        <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                    </ul>
                    </div>
                    <div className="portfolio-description">
                    <h2>This is an example of portfolio detail</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt laudantium dolore totam ad repudiandae recusandae velit numquam, provident sit iusto quidem eius distinctio ex debitis quasi temporibus cum beatae.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails;