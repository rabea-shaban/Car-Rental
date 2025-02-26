import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

// استيراد الصور
import car1 from "../../assets/card/car1.png";
import car2 from "../../assets/card/car2.png";
import car3 from "../../assets/card/car3.png";
import user from "../../assets/card/user.png";
import Air from "../../assets/card/d8wxke_2_.png";
import Frame from "../../assets/card/Frame.png";
import doors from "../../assets/card/doors.png";

const localImages = [car1, car2, car3];

const Details = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const UrlApiID = `https://myfakeapi.com/api/cars/${numericId}`;
  const [dataID, setDataID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetApiId = async () => {
      try {
        const response = await axios.get(UrlApiID);
        setDataID(response.data.Car);
      } catch (error) {
        console.error("Error fetching car:", error);
        setError("Failed to fetch car details.");
      } finally {
        setLoading(false);
      }
    };
    GetApiId();
  }, [numericId]);

  const carImage = localImages[numericId % localImages.length];

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!dataID) return <p className="text-danger">No car details found.</p>;

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/home/all-vehicles">Cars</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Car Details / {numericId}
          </li>
        </ol>
      </nav>

      <div className="container-fluid overflow-hidden" style={{ padding: "0px", marginTop: "0px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="row choose_us_bg">
              <div className="col-md-6">
                <div className="d-flex justify-content-center align-align-items-start">
                  <img
                    className="d-md-block d-none"
                    src={carImage}
                    alt="Choose Us"
                    style={{ marginTop: "10rem", width: "100%", marginLeft: "-90px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mt-3 justify-content-md-start justify-content-center align-items-center">
                  <div className="rounded-2 text-uppercase popular_btn">why choose us</div>
                </div>
                <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-center">
                  <div className="my-3 text-capitalize">
                    <h2>We offer the best experience with our rental deals</h2>
                  </div>
                </div>
                <div className="row flex-column text-muted p-2">
                  <div className="user d-flex align-items-center">
                    <img src={user} alt="Passengers" width={20} height={20} />
                    <span className="mx-3">{dataID.passenger || 4} Passengers</span>
                  </div>
                  <div className="Air d-flex align-items-center">
                    <img src={Air} alt="Air Conditioning" width={20} height={20} />
                    <span className="mx-3">{dataID.airConditioning ? "Air Conditioning" : "No AC"}</span>
                  </div>
                  <div className="clender d-flex align-items-center">
                    <img src={Frame} alt="Year" width={20} height={20} />
                    <span className="mx-3">{dataID.car_model_year || "2025"}</span>
                  </div>
                  <div className="Automatic d-flex align-items-center">
                    <img src={doors} alt="Transmission" width={20} height={20} />
                    <span className="mx-3">{dataID.transmission || "Automatic"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;