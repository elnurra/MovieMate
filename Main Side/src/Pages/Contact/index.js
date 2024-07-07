import React from "react";
import "./index.scss";
function Contact() {
  return (
    <>
      <section id="contact-map">
        <div class="backgro_mh">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="heding">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=800&amp;height=542&amp;hl=en&amp;q=Chinar Plaza &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
