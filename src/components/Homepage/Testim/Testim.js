import React from 'react';
import '../Testim/Testim.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testim = () => {
  const responsive = {
    1280: {
      items: 4,
    },
    600: {
      items: 2,
    },
    320: {
      items: 1,
    },
  };
  return (
    <div>
            <section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Our Client Says</h2>
						<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p>
					</div>
				</div>
			</div>
    <div id="our-testimonial" className="padding">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <OwlCarousel
            items={3}
            loop={true}
            nav={true}
            dots={true}
            autoplay={true}
            autoplayTimeout="4000"
                autoplaySpeed="1000"
                navSpeed="1000"
            navText={[
              '<i class="fas fa-chevron-left"></i>',
              '<i class="fas fa-chevron-right"></i>',
            ]}
            responsive={responsive}
            id="testimonial-slider"
            className="owl-carousel"
          >
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Nevertheless, it was only in the 20th century when food critics became popular.
                    Critics like Ruth Reichl and the promotion of newspapers like The New York times
                    brought criticism to the spotlight.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-1.jpg" />
                </div>
                <h4 className="darkcolor">Sam David</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Nevertheless, it was only in the 20th century when food critics became popular.
                    Critics like Ruth Reichl and the promotion of newspapers like The New York times
                    brought criticism to the spotlight.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-2.jpg" />
                </div>
                <h4 className="darkcolor">Jams Shah</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    The term food critic, however, has been lately devilized. When I ask people
                    (especially chefs) about what they think a food critic is, they usually answer
                    something like.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-3.jpg" />
                </div>
                <h4 className="darkcolor">Zubin Zucker</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    The term food critic, however, has been lately devilized. When I ask people
                    (especially chefs) about what they think a food critic is, they usually answer
                    something like
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-1.jpg" />
                </div>
                <h4 className="darkcolor">David Zucker</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Nevertheless, it was only in the 20th century when food critics became popular.
                    Critics like Ruth Reichl and the promotion of newspapers like The New York times
                    brought criticism to the spotlight.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-2.jpg" />
                </div>
                <h4 className="darkcolor">Akten Jansen</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Restaurant criticism is an old thing, as early as the human being probably.
                    Since eating is something we have always done as humans, I believe that even in
                    ancient times there
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-3.jpg" />
                </div>
                <h4 className="darkcolor">Doe Raleway</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    The term food critic, however, has been lately devilized. When I ask people
                    (especially chefs) about what they think a food critic is, they usually answer
                    something like.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-1.jpg" />
                </div>
                <h4 className="darkcolor">Shamoun Raleway</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Nevertheless, it was only in the 20th century when food critics became popular.
                    Critics like Ruth Reichl and the promotion of newspapers like The New York times
                    brought criticism to the spotlight.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-3.jpg" />
                </div>
                <h4 className="darkcolor">Albugdadi Raleway</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
            <div className="item">
              <div className="testimonial-wrapp">
                {' '}
                <span className="quoted">
                  <i className="fa fa-quote-right" />
                </span>
                <div className="testimonial-text">
                  <p className="bottom40">
                    Nevertheless, it was only in the 20th century when food critics became popular.
                    Critics like Ruth Reichl and the promotion of newspapers like The New York times
                    brought criticism to the spotlight.
                  </p>
                </div>
                <div className="testimonial-photo">
                  <img alt="" src="images/testimonial-3.jpg" />
                </div>
                <h4 className="darkcolor">Albugdadi Raleway</h4>
                <small className="defaultcolor">Businessman</small>{' '}
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>
  );
};

export default Testim;
