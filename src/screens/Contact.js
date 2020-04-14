import React from 'react';
import Navbar from './NavBar';
// import {Link} from 'react-router-dom'

class Contact extends React.Component {
  render() {
    return (
      <div className="aboutusbody container-fluid">
        <link rel="stylesheet" href="css/contact.css" />
        <link rel="stylesheet" href="css/aboutus.css" />
        <Navbar /> <br /> <br /> <br />
        <div className="container">
            <h1 className="contactustitle text-center">Contact Us <i className="fas fa-phone" /></h1>
              <div className="imagediv ">
                
                <img className="imagehere2" src="images/cjit-logo.png" alt="college name"/>
                <img className="imagehere3" src="images/colg.jpg" alt="golden jubilee of college"/>
    
              </div>
                <div className="row">
                  <div className="columnstyle1 col">
                    <ul>
                      <div className="colheader"> <h5>Address  <i className="listicon fas fa-map" /></h5></div>
                      <li className="listitem">Colombo Nagar,Yeshwanthapur (Village),
                      Jangaon, Andagoli,Jangaon (Dist),
                      Telangana -506167</li>
                    <button className="buttonmore btn btn-info"> <a className="gotomaptitle" href="https://www.google.com/maps/place/Christu+Jyothi+Institute+of+Technology+%26+Science/@17.72449,79.199283,16z/data=!4m5!3m4!1s0x0:0x4715c3adcabcb992!8m2!3d17.7244904!4d79.1992834?hl=en-US" >
                        Go to Map</a></button>
                    </ul>
                  </div>
                  <div className="columnstyle2 col">
                    <ul>
                      <div className="colheader"> <h5>Email  <i className="listicon fas fa-envelope" /></h5></div>
                      <li>exams@cjits.org</li>
                      <li>Principal@cjits.org</li>
                    </ul>
                  </div>
                  <div className="columnstyle3 col">
                      <ul>
                      <div className="colheader"> <h5>Contact  <i className="listicon fas fa-phone-square" /></h5></div>
                          <li>Office: +91 93464749160</li>
                          <li>Principal: + 91 9346474916</li>
                        </ul>
                  </div>
                </div>
          </div>

          <div className="imageSectionSecond row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/director.jpg" alt="Director" />
            <h4>Director</h4>
            <h2>Fr.T. Augustine Reddy</h2>
            
           

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/principal.png" alt="Principal" />
            <h4>Principal</h4>
            <h2>Dr. Chandrashekhar Reddy S</h2>
            
            
          </div>
                  
        </div>

        <hr className="featurette-divider" />

      </div>
    )
  }
}
export default Contact;