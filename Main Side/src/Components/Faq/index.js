import React from "react";
import "./index.scss";
import { faqService } from "../../APIs/Services/FaqService";

function Faq() {
  const [faqs, setFaqs] = React.useState([]);

  React.useEffect(() => {
    const fetchFaq = async () => {
      const { data } = await faqService.getAll();
      setFaqs(data);
    };
    fetchFaq();
  }, []);

  const midPoint = Math.ceil(faqs.length / 2); // Calculate midpoint for splitting

  return (
    <section style={{ marginTop: "50px" }} className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {faqs.slice(0, midPoint).map(({ name, description }, idx) => (
              <div key={idx} className="faq">
                <h3 className="faq__title">{name}</h3>
                <p className="faq__text">{description}</p>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6">
            {faqs.slice(midPoint).map(({ name, description }, idx) => (
              <div key={idx + midPoint} className="faq">
                <h3 className="faq__title">{name}</h3>
                <p className="faq__text">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
