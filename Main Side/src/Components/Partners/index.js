import React from "react";
import "../Partners/index.scss";
function Partners() {
  const partners = [
    { imageUrl: "/img/partners/background1.png" },
    { imageUrl: "/img/partners/background2.png" },
    { imageUrl: "/img/partners/background3.png" },
  ];
  return (
    <section
      id="partnerSection"
      className="section"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* section title */}
          <div className="col-12">
            <h2
              className="section__title section__title--no-margin"
              style={{ color: "#fff" }}
            >
              Our Partners
            </h2>
          </div>
          {/* end section title */}
          {/* section text */}
          <div className="col-12">
            <p className="section__text section__text--last-with-margin">
              <b>Holberton School</b>, a renowned project-based software
              engineering school, has launched its program in Azerbaijan. The
              initiative is sponsored by <b>Pasha Holding</b>, a leading
              investment holding company in the region, and supported by the{" "}
              <b>Innovation and Digital Development Agency (IDDA)</b> . This
              collaboration aims to nurture local tech talent and contribute to
              the development of Azerbaijan's digital economy.
            </p>
          </div>
          {/* end section text */}
          {/* partner */}
          {partners.map((partner, idx) => (
            <div key={idx} className="col-4 col-sm-4 col-md-3 col-lg-2">
              <a className="partner">
                <img
                  src={partner.imageUrl}
                  alt="partner"
                  className="partner__img"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
