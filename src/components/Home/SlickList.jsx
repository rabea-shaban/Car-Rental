import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // استيراد التشغيل التلقائي

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SlickList.css";

// استيراد الصور
import ac from "../../assets/landing-page/ac.png";
import audi from "../../assets/landing-page/audi.png";
import jaguar from "../../assets/landing-page/jaguar.png";
import volvo from "../../assets/landing-page/volvo.png";
import nissan from "../../assets/landing-page/nissan.png";

const images = [ac, audi, jaguar, volvo, nissan];

// تكرار الصور حتى تبدو وكأن هناك عددًا لا نهائيًا
const repeatedImages = [...images, ...images, ...images];

const SlickList = () => {
  return (
    <div className="SlickList container my-5">
      <div className="row g-0 justify-content-center align-content-center align-items-center">
        <div className="col text-center">
          <Swiper
            modules={[Autoplay]} 
            spaceBetween={50} 
            slidesPerView="auto" 
            centeredSlides={false} 
            loop={true} 
            speed={2000} 
            autoplay={{
              delay: 0, 
              disableOnInteraction: false,
            }}
            allowTouchMove={true} 
          >
            {repeatedImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="img">
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlickList;
