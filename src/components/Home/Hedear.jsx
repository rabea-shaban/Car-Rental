import carTop from "../../assets/landing-page/car 2 1.png";

const Hedear = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-4 text-center text-md-start order-md-1">
            <div className="text-center HomeInfo">
              <h3 className="fw-md-bolder fw-bold HomeTitle">
                Find, book and rent a car
                <span className=" ms-2  text-primary">Easily</span>
              </h3>
              <p className="text-muted fw-md-bold fs-md-4 fs-6 pe-md-5 HomeDiscrption">
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
            </div>
          </div>

          <div className="col-md-8 text-end order-md-2">
            <div className="mr-img ">
              <img
                src={carTop}
                alt="rinatal-home-hero-image"
                className="anmtImgTop img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hedear;
