import carImage from "../../assets/card/car2.png";
import user from "../../assets/landing-page/sec-5/user.png";
import message from "../../assets/landing-page/sec-5/message.png";
import chat from "../../assets/landing-page/sec-5/chat.png";

import "./ChooseUS.css";
const ChooseUS = () => {
  return (
    <div
      className="ChooseUS container-fluid overflow-hidden my-5"
      style={{ padding: "0px", marginTop: "0px" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="row choose_bg">
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-align-items-start">
                <img
                  className="d-md-block d-none"
                  src={carImage}
                  alt="Choose Us"
                  style={{
                    marginTop: "10rem",
                    width: "100%",
                    marginLeft: "-90px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex mt-3 justify-content-md-start justify-content-center align-items-center">
                <div className="rounded-2 text-uppercase popular_btn">
                  why choose us
                </div>
              </div>
              <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-center">
                <div className="my-3 text-capitalize">
                  <h2>We offer the best experience with our rental deals</h2>
                </div>
              </div>

              <ul>
                <li className=" d-flex align-items-center">
                  <div className="img">
                    <img src={user} alt="Passengers" />
                  </div>

                  <div className="text ms-4">
                    <h3>Best price guaranteed</h3>
                    <p>
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </p>
                  </div>
                </li>
                <li className=" d-flex align-items-center">
                  <div className="img">
                    <img src={user} alt="Passengers" />
                  </div>

                  <div className="text ms-4">
                    <h3>24 hour car delivery</h3>
                    <p>
                      Book your car anytime and we will deliver it directly to
                      you.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="img">
                    <img src={message} alt="Messages" />
                  </div>
                  <div className="text ms-4">
                    <h3>Best price guaranteed</h3>
                    <p>
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </p>
                  </div>
                </li>

                <li className=" d-flex align-items-center">
                  <div className="img">
                    <img src={chat} alt="Messages" />
                  </div>
                  <div className="text ms-4">
                    <h3>24/7 technical support</h3>
                    <p>
                      Have a question? Contact Rentcars support any time when
                      you have problem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
