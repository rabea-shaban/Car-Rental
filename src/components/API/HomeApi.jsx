import { useState, useEffect } from "react";
import axios from "axios";
import "./HomeApi.scss";

import car1 from "../../assets/card/car1.png";
import car2 from "../../assets/card/car2.png";
import car3 from "../../assets/card/car3.png";
import { Link } from "react-router-dom";

const localImages = [car1, car2, car3];

const HomeApi = () => {
  const urlApi = "https://myfakeapi.com/api/cars/";
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(urlApi);
      setCars(response.data.cars); // جلب جميع السيارات بدون تقليل العدد
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  // فلترة السيارات بناءً على البحث ثم أخذ أول 5 نتائج فقط
  const filteredCars = cars
    .filter((car) => car.car.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 5); // أخذ أول 5 سيارات فقط من النتائج

  return (
    <div className="container">
      <div className="col-12 my-1">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <input
            type="text"
            className="form-control py-2"
            placeholder="Search for cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="input-group-text btn btn-primary">
            Search
          </button>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12 text-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="rounded-2 text-uppercase popular_btn">
              popular rental deals
            </div>
          </div>
          <h2 className="text-capitalize my-3 popular_title">
            Most Popular Cars Rental Deals
          </h2>
        </div>
      </div>

      <div className="row my-3">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div className="col-md-6 col-lg-4" key={car.id}>
              <div className="card p-4 my-2">
                <div className="img">
                  <img
                    src={localImages[index % localImages.length]}
                    alt={car.car}
                    className="w-100"
                  />
                </div>
                <div className="card-top">
                  <h5 className="card-title fs-3">{car.car}</h5>
                </div>

                <div className="card-body">
                  <p className="reviews">
                    <i className="fa-solid fa-star"></i>
                    <span className="mx-2">({car.reviews || 0} reviews)</span>
                  </p>
                  <div className="row">
                    <div className="col-6 user">
                      <i className="fa-regular fa-user"></i>
                      <span className="mx-2">
                        {car.passenger || 4} Passengers
                      </span>
                    </div>
                    <div className="col-6 Air">
                      <i className="fa-solid fa-snowflake"></i>
                      <span className="mx-2">
                        {car.airConditioning ? "Air Conditioning" : "No AC"}
                      </span>
                    </div>
                    <div className="col-6 clender">
                      <i className="fa-solid fa-calendar-alt"></i>
                      <span className="mx-2">
                        {car.car_model_year || "2025"}
                      </span>
                    </div>
                    <div className="col-6 Automatic">
                      <i className="fa-solid fa-gauge"></i>
                      <span className="mx-2">
                        {car.transmission || "Automatic"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-bottom border-top pt-3">
                  <div className="d-flex justify-content-between">
                    <p className="text-muted">Price</p>
                    <div className="d-flex">
                      <h6>${car.price || "N/A"}</h6>
                      <p className="text-muted">/day</p>
                    </div>
                  </div>
                  <Link
                    to={`home/all-vehicles/${car.id}`}
                    className="w-100 btn btn-primary"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h5 className="text-muted">No cars found!</h5>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center align-items-cnter">
        <a href="/home/all-vehicles">
          <button
            type="button"
            className="btn btn-outline-secondary _show_all_iny2y_2"
          >
            Show all vehicles
            <i className="px-2 fas fa-long-arrow-alt-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeApi;
