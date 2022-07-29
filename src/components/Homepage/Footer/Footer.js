import React from 'react';

const Footer = () => {
  return (
    <div>
      <section class="footer_wrapper mt-3 mt-md-0">
        <div class="container px-5 px-lg-0">
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>imboo</h5>
              <p class="mb-4 ps-0 company_details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut
                laoreet pharetra....
              </p>
              <div class="contact-info">
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <i class="fa fa-home me-3"></i> No. 96, South City, London
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-phone me-3"></i>+1 222 3333
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope me-3"></i>info@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>Customer Support</h5>
              <ul class="link-widget p-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Product Returns</a>
                </li>
                <li>
                  <a href="#">Wholesale Policy</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>Quick Links</h5>
              <ul class="link-widget p-0">
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Term Of Use</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <h5>Newsletter</h5>
              <div class="form-group mb-4">
                <input
                  type="email"
                  class="form-control bg-transparent"
                  placeholder="Enter Your Email Here"
                />
                <button type="submit" class="btn main-btn">
                  Subscribe
                </button>
              </div>
              <h5>Stay Connected</h5>
              <ul class="social-network d-flex align-items-center p-0">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright-section">
          <p>
            Copyright <a href="#">© CODISE</a> All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
