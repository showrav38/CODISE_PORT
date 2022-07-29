import React from 'react';
import Common from '../../Homepage/Common/Common';

const Notfound = () => {
  return (
    <div>
      <Common name="Error 404 Not Found" conbg="aboutbg-image" consearch="about-search-1" />
      <section class="contact_section">
        <div class="container">
          <div class="row align-items-center flex-column flex-lg-row-reverse">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="">
                <img src="./images/error_404.png" />
              </div>
            </div>
            <div class="col-lg-5 pb-5 text-center text-lg-start">
              <h2 class="section-title">Opps...... This page is not found.</h2>
              <p class="text-black">
                Botanically, the strawberry fruit is considered an “accessory fruit” and is not a
                true berry. The flesh consists of the greatly nlarged flower receptacle.
              </p>
              <button class="btn main-btn">Back TO Home</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
