import React from 'react';
import Common from '../../Homepage/Common/Common';
import'./Services.css'

const Services = () => {
  return (
    <div>
      <Common name="Services" conbg="servicesbg-image" consearch="contact-search-1" />
      <div>
        <section class="section-growing section-services">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-10 col-lg-8">
                <div class="header-section">
                  <h2 class="title">Growing Teach Company</h2>
                  <p class="description">
                    A Young Teach company with so many experienced professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* ------------------Website------------- */}
            <div class="row p-3 d-flex mt-5">
              <div class="col-md-6 about-right-faq">
                <h6>Managed IT Services</h6>
                <h3 class="text-da" style={{ color: '#000' }}>
                  Website Design
                </h3>
                <p class="mt-4">
                  At Codise we take pride in the knowledge and expertise that we have gained from
                  working on many challenging but rewarding projects throughout the globally.{' '}
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores
                  reprehenderit.olor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores reprehenderit.
                </p>
              </div>
              <div class="col-md-6 left-wthree-img text-right">
                <img src="images/b1.png" alt="" class="img-fluid mt-5" />
              </div>
            </div>
           {/*  ----------Mobile App----------------- */}
            <div class="row p-3 d-flex mt-5">
              <div class="col-md-6 about-right-faq order-md-5">
                <h6>Managed IT Services</h6>
                <h3 class="text-da" style={{ color: '#000' }}>
                  Mobile App Development
                </h3>
                <p class="mt-4">
                  At Codise we take pride in the knowledge and expertise that we have gained from
                  working on many challenging but rewarding projects throughout the globally.{' '}
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores
                  reprehenderit.olor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores reprehenderit.
                </p>
              </div>
              <div class="col-md-6 left-wthree-img text-right order-md-1">
                <img src="images/b1.png" alt="" class="img-fluid mt-5" />
              </div>
            </div>
            {/* -----------Computer Software and Application----------------- */}
            <div class="row p-3 d-flex mt-5">
              <div class="col-md-6 about-right-faq">
                <h6>Managed IT Services</h6>
                <h3 class="text-da" style={{ color: '#000' }}>
                Computer Software and Application
                </h3>
                <p class="mt-4">
                  At Codise we take pride in the knowledge and expertise that we have gained from
                  working on many challenging but rewarding projects throughout the globally.{' '}
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores
                  reprehenderit.olor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores reprehenderit.
                </p>
              </div>
              <div class="col-md-6 left-wthree-img text-right">
                <img src="images/b1.png" alt="" class="img-fluid mt-5" />
              </div>
            </div>
          {/*   -----------Managed IT------------- */}
            <div class="row p-3 d-flex mt-5">
              <div class="col-md-6 about-right-faq order-md-5">
                <h6>Managed IT Services</h6>
                <h3 class="text-da" style={{ color: '#000' }}>
                  Managed IT Services
                </h3>
                <p class="mt-4">
                  At Codise we take pride in the knowledge and expertise that we have gained from
                  working on many challenging but rewarding projects throughout the globally.{' '}
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores
                  reprehenderit.olor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                  tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                  doloremque mollitia itaque voluptates similique enim asperiores reprehenderit.
                </p>
              </div>
              <div class="col-md-6 left-wthree-img text-right order-md-1">
                <img src="images/b1.png" alt="" class="img-fluid mt-5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
