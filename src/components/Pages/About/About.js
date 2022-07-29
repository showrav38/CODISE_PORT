import React from 'react';
import Common from '../../Homepage/Common/Common';
import './About.css';

const About = () => {
  return (
    <div>
      <Common name="About Us" conbg="aboutbg-image" consearch="about-search-1" />
      <section class="section-growing section-services contact-section">
        <div className="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Here is some story about Us</h2>
                <p class="description">
                  A Young Teach company with so many experienced professionals.
                </p>
              </div>
            </div>
          </div>
          <div class="row p-3 d-flex mt-5">
            <div class="col-md-6 about-right-faq">
              <h6>Managed IT Services</h6>
              <h3 class="text-da" style={{ color: '#000' }}>
                The Young Tech Company
              </h3>
              <p class="mt-4">
                At Codise we take pride in the knowledge and expertise that we have gained from
                working on many challenging but rewarding projects throughout the globally.{' '}
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat obcaecati ex
                tempora, esse iste rem earum velit tempore quo, reiciendis officiis. Corrupti
                doloremque mollitia itaque voluptates similique enim asperiores reprehenderit.olor,
                sit amet consectetur adipisicing elit. Quaerat obcaecati ex tempora, esse iste rem
                earum velit tempore quo, reiciendis officiis. Corrupti doloremque mollitia itaque
                voluptates similique enim asperiores reprehenderit.
              </p>
            </div>
            <div class="col-md-6 left-wthree-img text-right">
              <img src="images/b1.png" alt="" class="img-fluid mt-5" />
            </div>
          </div>
        </div>
      </section>

      {/*--------------- Procedure of work section ---------------*/}
      <section class="section-services contact-section"style={{backgroundColor:'#e6edf7'}}>
        <div className="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Concept Of Procedure</h2>
                <p class="description">
                  A Young Teach company with so many experienced professionals.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
            <div class="ser-grd mt-md-0 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr3">
                    <span class="fa fa-handshake"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid">
                    <h4>Planning</h4>
                    <p>
                      The enterprise architects in conjunction with the business analyst teams work
                      on the user requirement documents and the approval process is completed in
                      this phase.
                    </p>
                  </div>
                </div>
              </div>
              <div class="ser-grd mt-md-5 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr6">
                    <span class="fa fa-coffee"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid">
                    <h4>Development</h4>
                    <p>
                      This is one of the most crucial phase for the team at Codise, wherein the
                      architecture, delivery development and quality teams work together to
                      development and implement the business requirement from the client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="ser-grd mt-md-0 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr1">
                    <span class="fa fa-headphones"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid">
                    <h4>Analysis</h4>
                    <p>
                      After planning, the business analysts create detailed "Business Requirement
                      Document", "Functional Requirement Document" and seek approval from the
                      clients.
                    </p>
                  </div>
                </div>
              </div>
              <div class="ser-grd mt-md-5 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr2">
                    <span class="fa fa fa-eye"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid "style={{marginTop:'20px'}}>
                    <h4>Quality Assurance</h4>
                    <p>
                      Even after Test-driven development, quality control and quality assurance
                      plays a major role. By amalgamating TQM with Agile, Codise ensures the product
                      delivers ontime with required quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="ser-grd mt-md-0 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr3">
                    <span class="fa fa-folder-open"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid">
                    <h4>Design</h4>
                    <p>
                      The enterprise architects in conjunction with the business analyst teams work
                      on the user requirement documents and the approval process is completed in
                      this phase.
                    </p>
                  </div>
                </div>
              </div>
              <div class="ser-grd mt-md-0 mt-4">
                <div class="row">
                  <div class="col-md-3 col-2 text-center services-icon icon-clr3">
                    <span class="fa fa-folder-open"></span>
                  </div>
                  <div class="col-md-9 col-10 text-left services-grid mt-5">
                    <h4>Maintainace</h4>
                    <p>
                      The enterprise architects in conjunction with the business analyst teams work
                      on the user requirement documents and the approval process is completed in
                      this phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*------------------ Team Section Start-------------- */}
      <section class="section-growing section-services contact-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title mt-5">Meet Our Team</h2>
                <p class="description">
                  A Young Teach company with so many experienced professionals.
                </p>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Jane"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>
                <div class="card-body">
                  <blockquote>
                    <SvgIcon />

                    <p class="font-italic mt-2 mb-6">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder" style={{ color: '#ff2c95' }}>
                    Jane
                  </p>
                  <small class="text-muted">Head of Project Management</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Thomas"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>
                <div class="card-body">
                  <blockquote>
                    <SvgIcon />

                    <p class="font-italic mt-2 mb-6">
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder">Thomas</p>
                  <small class="text-muted">Software Architect</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Jasmine"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>

                <div class="card-body">
                  <blockquote>
                    <SvgIcon />

                    <p class="font-italic mt-2 mb-6">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder">Jasmine</p>
                  <small class="text-muted">Lead Front-End Designer</small>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
            <div class="col">
              <div class="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Dave"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>
                <div class="card-body">
                  <blockquote>
                    <SvgIcon />

                    <p class="font-italic mt-2 mb-6">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder">Dave</p>
                  <small class="text-muted">Chief Operating Officer, Partner</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-pink h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Michele"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>
                <div class="card-body">
                  <blockquote>
                    <SvgIcon />

                    <p class="font-italic mt-2 mb-6">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show
                      that equal height action.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder">Michele</p>
                  <small class="text-muted">Senior Front-End Designer & Developer</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card-blue h-100 overflow-hidden shadow bg-white border-0 px-0">
                <div class="card-shape">
                  <img
                    src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    class="card-img-top"
                    alt="Larry"
                  />
                  <div class="custom-shape-divider-bottom-1634717805">
                    <SvgIcon2 />
                  </div>
                </div>

                <div class="card-body">
                  <blockquote>
                    <SvgIcon />
                    <p class="font-italic mt-2 mb-6">
                      This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                  </blockquote>
                </div>
                <div class="card-footer">
                  <p class="mb-0 font-weight-bolder">Larry</p>
                  <small class="text-muted">Lead Developer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function SvgIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      x="0"
      y="0"
      viewBox="0 0 475.082 475.081"
    >
      <path d="M164.45 219.27h-63.954c-7.614 0-14.087-2.664-19.417-7.994-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.416-51.678 14.276-14.272 31.503-21.411 51.678-21.411h18.271c4.948 0 9.229-1.809 12.847-5.424 3.616-3.617 5.424-7.898 5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797 0-38.684 3.858-56.673 11.563-17.987 7.71-33.545 18.132-46.68 31.267-13.134 13.129-23.553 28.688-31.262 46.677C3.855 144.039 0 162.931 0 182.726v200.991c0 15.235 5.327 28.171 15.986 38.834 10.66 10.657 23.606 15.985 38.832 15.985h109.639c15.225 0 28.167-5.328 38.828-15.985 10.657-10.663 15.987-23.599 15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832-10.656-10.656-23.603-15.986-38.828-15.986zM459.103 235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61 0-14.089-2.664-19.41-7.994-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.409-51.678 14.271-14.272 31.497-21.411 51.682-21.411h18.267c4.949 0 9.233-1.809 12.848-5.424 3.613-3.617 5.428-7.898 5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808 0-38.691 3.858-56.685 11.563-17.984 7.71-33.537 18.132-46.672 31.267-13.135 13.129-23.559 28.688-31.265 46.677-7.707 17.987-11.567 36.879-11.567 56.674v200.991c0 15.235 5.332 28.171 15.988 38.834 10.657 10.657 23.6 15.985 38.828 15.985h109.633c15.229 0 28.171-5.328 38.827-15.985 10.664-10.663 15.985-23.599 15.985-38.834V274.088c.001-15.233-5.321-28.168-15.978-38.832z"></path>
    </svg>
  );
}

function SvgIcon2() {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        class="shape-fill"
      ></path>
    </svg>
  );
}

export default About;
