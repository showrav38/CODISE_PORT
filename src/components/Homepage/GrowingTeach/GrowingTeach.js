import React from 'react';
import './GrowingTeach.css';
const GrowingTeach = () => {
  return (
    <div>
      <section class="section-growing section-services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Growing Tech Company</h2>
                <p class="description">
                  A Young Teach company with so many experienced professionals.
                </p>
              </div>
            </div>
          </div>
          <div class="row p-3">
            <div class="col-md-6 about-right-faq">
              <h6>Managed IT Services</h6>
              <h3 class="text-da"style={{color:'#000'}}>10 Years of Industry Experience</h3>
              <p class="mt-4">
                At Codise we take pride in the knowledge and expertise that we have gained from
                working on many challenging but rewarding projects throughout the globally.{' '}
              </p>
              <ul class="w3l-right-book mt-4">
                <li>Website Designing &amp; Development</li>
                <li>Web Applications &amp; Software</li>
                <li>Mobile App Development</li>
                <li>Hardware Solution</li>
                <li>Managed Service Provider</li>
              </ul>
              <a href="about.html" class="btn btn-primary mt-sm-5 mt-4">
                Read More
              </a>
            </div>
            <div class="col-md-6 left-wthree-img text-right">
              <img src="images/b1.png" alt="" class="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowingTeach;
