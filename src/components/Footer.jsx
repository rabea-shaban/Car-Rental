import "./footer.css";
import call from "../assets/footer/call.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instagram.png";
import location from "../assets/footer/location.png";
import logo_footer from "../assets/footer/logo-footer.png";
import sms from "../assets/footer/sms.png";
import youtube from "../assets/footer/youtube.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5 mt-2">
            <div className="row">
              <div className="col-8 top-left ">
                <img src={logo_footer} alt="" />
                <ul>
                  <li className="">
                    <a className="d-flex align-items-center" href="#">
                      <img src={location} alt="" />
                      <p>
                        25566 Hc 1,Glenallen,
                        <br /> Alaska, 99588, USA
                      </p>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src={call} alt="" />
                      +603 4784 273 12
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={sms} alt="" />
                      rentcars@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled text-white our-products">
                  <h6>our products</h6>
                  <li>
                    <a href="#">Carrers</a>
                  </li>
                  <li>
                    <a href="#">cars</a>
                  </li>
                  <li>
                    <a href="#">Packages</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Priceline</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-2">
            <div className="row">
              <div className="col-4">
                <ul className="list-unstyled text-white our-products">
                  <h6>about rent cars</h6>
                  <li>
                    <a href="#"> why choose us</a>
                  </li>
                  <li>
                    <a href="#">our story</a>
                  </li>
                  <li>
                    <a href="#">investor relations</a>
                  </li>
                  <li>
                    <a href="#">press center</a>
                  </li>
                  <li>
                    <a href="#">advertise</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled text-white our-products">
                  <h6>resources</h6>
                  <li>
                    <a href="#"> download</a>
                  </li>
                  <li>
                    <a href="#">help center</a>
                  </li>
                  <li>
                    <a href="#">guides</a>
                  </li>
                  <li>
                    <a href="#">partner network</a>
                  </li>
                  <li>
                    <a href="#">cruises</a>
                  </li>
                  <li>
                    <a href="#">developer</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <div className=" text-white our-products">
                  <h6>follow us</h6>
                  <ul className=" list-unstyled d-flex gap-2">
                    <li>
                      <a href="#">
                        <img src={facebook} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instagram} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={youtube} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 border-top">
          <div className="col-12 justify-content-center text-start">
            <p className="text-white">
              &copy; 2022 rent cars. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
