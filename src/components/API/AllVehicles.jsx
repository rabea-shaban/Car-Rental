import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./HomeApi.scss";

import car1 from "../../assets/card/car1.png";
import car2 from "../../assets/card/car2.png";
import car3 from "../../assets/card/car3.png";
const localImages = [car1, car2, car3];

const AllVehicles = () => {
  const urlApi = "https://myfakeapi.com/api/cars/";
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 16;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(urlApi);
        setCars(response.data.cars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  const pageCount = Math.ceil(cars.length / carsPerPage);
  const offset = currentPage * carsPerPage;
  const currentCars = cars.slice(offset, offset + carsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cars
          </li>
        </ol>
      </nav>
      <div className="row my-4">
        <div className="col-12 text-center">
          <div className="d-flex justify-content-center align-items-cnter">
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
        {currentCars.map((car, index) => (
          <div className="col-md-6 col-lg-4" key={car.id}>
            <div className="card p-4">
              <div className="img">
                <img
                  src={localImages[index % localImages.length]}
                  alt={car.name}
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
                    <span className="mx-2">{car.car_model_year || "2025"}</span>
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
                  to={`/home/all-vehicles/${car.id}`}
                  className="w-100 btn btn-primary"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* الترقيم */}
      <div className="d-flex justify-content-center mt-4">
        <ReactPaginate
          previousLabel="«"
          nextLabel="»"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default AllVehicles;
