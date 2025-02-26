import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hedear from "../Home/Hedear";
import HomeApi from "../API/HomeApi";
import Work from "./Work";
import ChooseUS from "./ChooseUS";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import { Footer } from "../Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Hedear />
      </div>
      <HomeApi />
      <Work />
      <ChooseUS />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
