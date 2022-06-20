const Footer = () => {
    return (
        <footer id="footer">
        <div className="container wow flipInX animated" data-wow-duration="2s">
          <h3>Alex Smith</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta perferendis maiores ullam beatae
            inventore!</p>
          <div className="social-links">
            <a className="twitter"><i className="fab fa-twitter"></i></a>
            <a className="facebook"><i className="fab fa-facebook-f"></i></a>
            <a className="instagram"><i className="fab fa-instagram"></i></a>
            <a className="google-plus"><i className="fab fa-skype"></i></a>
            <a className="linkedin"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="copyright">
            Copyright© &nbsp; <i className="fa fa-heart wow pulse" data-wow-iteration="infinite"
              data-wow-duration="500ms"></i>&nbsp;&nbsp;All rigths reserved
          </div>
        </div>
      </footer>
    )
}

export default Footer;