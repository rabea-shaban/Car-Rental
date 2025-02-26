import TestimonialsSlider from "./TestimonialsSlider";
import "./testimonials.css"
const Testimonials = () => {
  return (
    <div className="testimonials py-5 my-3 ">
      <div className="text-title text-center">
        <div className="d-flex mt-3  justify-content-center align-items-center">
          <div className="rounded-2 text-uppercase popular_btn fs-6 fw-bold">
            testimonials
          </div>
        </div>
        <div className="d-flex  mx-md-0 mx-4 justify-content-center align-items-center">
          <div className="my-3 text-capitalize">
            <h2>what people say about us?</h2>
          </div>
        </div>
      </div>

      <TestimonialsSlider />
    </div>
  );
};

export default Testimonials;
