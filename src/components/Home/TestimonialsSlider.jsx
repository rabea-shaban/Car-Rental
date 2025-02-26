import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./TestimonialsSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

// استيراد الصور (تغيير المسارات حسب الحاجة)
import user1 from "../../assets/landing-page/sec-6/girl.png";
import user2 from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";

const reviews = [
  {
    id: 1,
    name: "Charlie Johnson",
    rating: 5.5,
    text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: user1,
    updated: "Last updated 3 mins ago",
  },
  {
    id: 2,
    name: "Charlie Johnson",
    rating: 5.5,
    text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: user2,
    updated: "Last updated 5 mins ago",
  },
  {
    id: 1,
    name: "Charlie Johnson",
    rating: 5.5,
    text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: user1,
    updated: "Last updated 3 mins ago",
  },
  {
    id: 2,
    name: "Charlie Johnson",
    rating: 5.5,
    text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    image: user2,
    updated: "Last updated 5 mins ago",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="TestimonialsSlider  container my-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        loopedSlides={reviews.length} // تكرار لا نهائي بدون توقف
        speed={2000} // سرعة الحركة بين الشرائح
        autoplay={{ delay: 0, disableOnInteraction: false }} // تشغيل تلقائي بلا توقف
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="img-fluid object-fit-cover"
                  />
                </div>

                <div className="col-md-6 p-4 pb-5 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center">
                    <h2 className="mb-0 fw-bold">{review.rating}</h2>
                    <span className="ms-2 text-muted">stars</span>
                  </div>

                  <div className="text-warning my-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>

                  <p className="text-muted">{review.text}</p>
                  <h6 className="fw-bold">{review.name}</h6>
                  <small className="text-secondary">{review.updated}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
