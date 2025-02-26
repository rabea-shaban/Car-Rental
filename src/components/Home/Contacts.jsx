import imgPone from "../../assets/landing-page/sec-7/iPhone-14.png";
import andriod from "../../assets/landing-page/andriod.png";
import ios from "../../assets/landing-page/ios.png";
import "./contact.css";
const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="container">
        <div className="row  justify-contentr align-items-end">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="my-md-5 mt-3 pt-md-5 _apps_bg_qgyuq_1">
              <h2>
                Download Rentcars App for{" "}
                <span className="text-primary">FREE</span>
              </h2>
              <small className="fs-5">
                For faster, easier booking and exclusive deals.
              </small>
              <div className="d-flex justify-content-start my-4">
                <img
                  src={andriod}
                  alt="Download Rentcars App"
                  className="img-fluid"
                />
                <img
                  src={ios}
                  alt="Download Rentcars App"
                  className="img-fluid ms-3"
                />
              </div>
              <form>
                <div className="input-group mb-3" style={{ width: "360px" }}>
                  <input
                    type="text"
                    className="form-control _info_qgyuq_21 my-0"
                    placeholder="Name"
                  />
                </div>

                <div className="input-group mb-3" style={{ width: "360px" }}>
                  <input
                    type="text"
                    className="form-control _info_qgyuq_21 my-0"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="input-group mb-3" style={{ width: "360px" }}>
                  <input
                    type="text"
                    className="form-control _info_qgyuq_21 my-0"
                    placeholder="Email"
                  />
                </div>

                <div
                  className="d-flex justify-content-center my-1"
                  style={{ width: "360px" }}
                >
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-end d-md-block d-none mb-0">
            <div
              className="img"
              style={{
                marginLeft: "50px",
              }}
            >
              <img
                src={imgPone}
                alt="iPhone 14"
                className="img-fluid"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
