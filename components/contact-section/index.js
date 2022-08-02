import axios from 'axios';
import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({name: '', email:'', subject:'', message:''})

  const handleChange =  evt => {
    const field = evt.target.name;
    setForm({...form, [field]: evt.target.value})

    // do onChange validation here below
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // setIsLoading(true);
    
    // please validate before this
    try{
      const response = await axios.post('/api/contact', form)
      if(response.status === 200) {
        console.log(response.data.message)
        // use state to rest form fields
      } 
      console.log("response" , response)
    } catch(err) {
      window.alert(`${err} check console for the error`)
      console.log(err)

    }
    
  }
    return (
        <section id="contact" className="contact">
        <div className="container wow fadeInLeftBig animated" data-wow-duration="1.5s">
          <div className="section-title wow fadeInDownBig animated" data-wow-duration="2s">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12 wow bounceInDown animated" data-wow-duration="2s">
                  <div className="info-box m-0">
                    <i className="fas fa-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a className="twitter"><i className="fab fa-twitter"></i></a>
                      <a className="facebook"><i className="fab fa-facebook"></i></a>
                      <a className="instagram"><i className="fab fa-instagram"></i></a>
                      <a className="google-plus"><i className="fab fa-google"></i></a>
                      <a className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow bounceInLeft animated" data-wow-duration="2s">
                  <div className="info-box">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Me</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6 wow bounceInRight animated" data-wow-duration="2s">
                  <div className="info-box">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Call Me</h3>
                    <p>+123456789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow bounceIn animated" data-wow-duration="2s">
              <form className="email-form" component= "form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                     type="text"
                      name="name"
                       className="form-control"
                        id="name" 
                        placeholder="Your Name" 
                        value={form.name}
                        onChange={handleChange}
                        required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input 
                    className="form-control" 
                    id="contact-email" 
                    type="email" 
                    name="email" 
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                      required=""
                      />
                  </div>
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control" 
                  name="subject" 
                  id="subject" 
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                  className="form-control" 
                  name="message" 
                  rows="6" 
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  required
                  ></textarea>
                </div>
                <div 
                className="text-center"
                ><button type="submit" onClick={handleSubmit}>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ContactSection;