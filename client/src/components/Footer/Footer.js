import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'; 



const Footer = () => {
 
  return (
    <div className='FooterComponent'>   
        <div className="FooterContainer">
            <div className="FooterOne">
              <Link className='privacy' >Privacy Policy</Link>
              <Link className='privacy' >Cookie Policy</Link>
              <Link className='privacy' >Licensing & Copyright</Link>
              <Link className='report' >Report Errors</Link>
              <Link className='report' >Provide Feeback</Link>
              <Link className='report' >Help</Link>
            </div>
            <hr />
            <div className="FooterTwo">
              
              <div className="FooterTwo-one">
                <h3>THE MISSION</h3>
                <h5>The mission of Studnet Activity Center at esteemed Koneru Lakshmaiah Education Foundation is to develop principled, innovative leaders who improve the world and to generate ideas that advance management practice.</h5>
              </div>

              <div className="FooterTwo-two">

                <div className="Footer-two-inner">

                  <div className="official-communication">
                     <div id="google_translate_element"></div>
                      <h3>Official Communication</h3>
                      <h4>K L Deemed to be University,
                          Admin. Office, 29-36-38, Museum Road, Governorpet, Vijayawada. A.P., India. 
                          Pincode: 520 002.
                      </h4>
                  </div>

                  <div className="campus">
                    <h3>Campus</h3>
                    <h4>K L Deemed to be University,
                        Green Fields, Vaddeswaram, 
                        Guntur District, A.P., INDIA. 
                        Pincode : 522 302.</h4>
                  </div>

                </div>
                <h5 id='cont'>+91 08645 - 350200 (Andhrapradesh) <br /> +91 040 - 35045055 (Telangana) </h5>
              </div>

            </div>
            <hr />
            <div className="FooterThree">

              <div className="FooterThree-one">
                <span id='copyright'>
                  <i class="fa fa-copyright" aria-hidden="true"></i> <p>2023 Koneru Lakshmaiah Education Foundation - Student Activity Center | Designed & Developed by <a target='_blank' href="https://www.linkedin.com/in/deepakreddygathpa/">Deepak Reddy Gathpa</a>
                  </p>
                </span>
              </div>

              <div className="FooterThree-two">
                <span id='socialIcons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i href="https://www.instagram.com/klu_sac/" class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                </span>
              </div>

            </div>

        </div>

    </div>
  )
}

export default Footer

