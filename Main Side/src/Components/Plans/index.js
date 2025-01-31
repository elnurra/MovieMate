import React from "react";
import "./index.scss";
import { plansService } from "../../APIs/Services/PlansService";
import background from "../../Pages/Catalog/section.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Plans() {
  const navigate = useNavigate();
  const [plans, setPLans] = React.useState([]);
  const handleNavigate = (id) => {
    navigate(`/checkout/${id}`);
  };
  const selectPlan = localStorage.getItem("plan");
  React.useState(() => {
    const fetchPlans = async () => {
      const { data } = await plansService.getAll();
      setPLans(data);
    };

    fetchPlans();
  }, []);

  return (
    <>
      <section
        className="section catalog section--first section--bg"
        style={{
          backgroundImage: `url(${background})`,

          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section__wrap"
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <h2 className="section__title">Plans</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <div className="row">
            {/* price */}
            {plans.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="price">
                  <div className="price__item price__item--first">
                    <span>{item.planName}</span>
                    {item.price}$
                  </div>
                  {item.properties.map((property, idx) => (
                    <div key={idx} className="price__item">
                      <span>{property.name}</span>
                    </div>
                  ))}
                  {selectPlan != undefined && selectPlan == item.id ? (
                    <Button
                      onClick={() => {
                        handleNavigate(item.id);
                      }}
                      className="price__btn"
                    >
                      SelectedPlan
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleNavigate(item.id);
                      }}
                      className="price__btn"
                    >
                      Choose Plan
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {/* end price */}
          </div>
        </div>
      </div>
    </>
  );
}
