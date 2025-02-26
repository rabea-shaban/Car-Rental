import caricon from "../../assets/landing-page/car-icon.png";
import location from "../../assets/landing-page/location.png";
import SlickList from "./SlickList";
import "./Work.css";
const Work = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-cnter">
              <div className="rounded-2 text-uppercase popular_btn">
                how it work
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <h2 className="text-capitalize popular_title">
              Rent with following 3 working steps
            </h2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 text-center   ">
              <div className="work-Item">
                <div className="img">
                  <img src={caricon} alt="" />
                </div>
                <div>
                  <h3>Choose location</h3>
                  <p>Choose your and find your best car</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 text-center   ">
              <div className="work-Item">
                <div className="img">
                  <img src={location} alt="" />
                </div>
                <div>
                  <h3>Pick-up date</h3>
                  <p>Select your pick up date and time to book your car</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 text-center   ">
              <div className="work-Item">
                <div className="img">
                  <img src={caricon} alt="" />
                </div>
                <div>
                  <h3>Book your car</h3>
                  <p>Book your car and we will deliver it directly to you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SlickList />
    </>
  );
};

export default Work;
