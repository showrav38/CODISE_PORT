import React from 'react';
import Common from '../../Homepage/Common/Common';
import './Contact.css';

const Contact = () => {
  // Header Scroll
  let nav = document.querySelector('.navbar');
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 40) {
      nav.classList.add('header-scrolled');
    } else {
      nav.classList.remove('header-scrolled');
    }
  };

  /*  // nav hide
  let navBar = document.querySelectorAll('.nav-link');
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function (a) {
    a.addEventListener('click', function () {
      navCollapse.classList.remove('show');
    });
  }); */
  return (
    <div>
      <Common name="Contact Us" conbg="conbg-image" consearch="contact-search-1" />
      
      {/* Navbar Section Start */}
      {/* {<header id="full_nav">
        <div class="header">
          <div class="container">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">
                <img src="./images/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main-nav"
                aria-controls="main-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              > */}
      {/* <span class="navbar-toggler-icon"></span>  */}
      {/* <i class="fas fa-stream navbar-toggler-icon"></i>
              </button>

              <div class="collapse navbar-collapse" id="main-nav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      About
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="product.html">
                      Product
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="gallery.html">
                      Gallery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Contact
                    </a>
                  </li>
                </ul>

                <div class="header_right">
                  <div class="text-lg-end">
                    <span>Call Us!</span>
                    <span class="phone_no">+91 12345678989</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>} */}
      {/*  Navbar Section Exit

    banner Section start */}
      {/* <section class="banner_section">
        <div class="container">
          <div class="banner-content">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section> */}
      {/* banner section exit

    Contact Section Start */}
      <section class="section-growing section-services contact-section">
          <div class="container">
            <div class="row justify-content-center text-center mb-5">
              <div class="col-md-10 col-lg-8">
                <div class="header-section">
                  <h2 class="title">Growing Teach Company</h2>
                  <p class="description">
                    A Young Teach company with so many experienced professionals.
                  </p>
                </div>
              </div>
            </div>
          <div class="row justify-content-center" style={{marginTop:'70px'}}>
            
            <div class="col-12 contact-form ">
              <div class="row">
                <div class="col-lg-7 mb-5">
                  <form class="row g-3">
                    <div class="col-md-6 mb-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name *"
                        required=""
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email *"
                        required=""
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Address *"
                        required=""
                      />
                    </div>
                    <div class="col-md-6 mb-4">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Your Phone *"
                        required=""
                      />
                    </div>
                    <div class="col-12 mb-4">
                      <textarea class="form-control" placeholder="your Message" />
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn main-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-lg-5 mb-5">
                  <div class="content-box ms-sm-5">
                    <ul class="info-box clearfix">
                      <li>
                        <i class="fas fa-phone-alt"></i>
                        <p>Any Questions? Call us</p>
                        <div>
                          <a href="#">+91 123 123 1234</a>
                        </div>
                      </li>
                      <li>
                        <i class="far fa-envelope-open"></i>
                        <p>Any Questions? Email us</p>
                        <div>
                          <a href="#">info@example.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
