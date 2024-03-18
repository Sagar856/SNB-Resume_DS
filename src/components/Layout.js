import React from "react";
import { FiPhone } from "@react-icons/all-files/fi/FiPhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaRegHandPointDown } from "@react-icons/all-files/fa/FaRegHandPointDown";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <section className="left-side">
          <div className="left-header">
            <Link
              to="/gallery"
              className="link-style-depricate photo-walkthrough"
            >
              <StaticImage
                src="../assets/images/Profile-image.png"
                alt="home page img"
                className="profile-img"
                placeholder="BLURRED"
                layout="fullWidth"
              />
            </Link>
            <div className="left-body">
              <div className="tooltip">
                {/* <span id="tooltiptext-profile" className="tooltiptext-profile">
                  <span className="tooltip-icons">
                    <FaRegHandPointDown />
                  </span>
                  Click
                </span> */}
              </div>
              <Link to="/profile" className="link-style-depricate">
                <h3 className="profile-heading">Profile</h3>
                <p>
                  A results-driven and analytical-minded data scientist with experience in harnessing the power of data to drive
                  business insights and strategy. Proficient in a wide range of
                  data science methodologies and tools, including machine
                  learning, statistical analysis, and data visualization.
                </p>
              </Link>
              <div className="contact-me-section">
                <h3>Contact me</h3>
                <ul>
                  <li>
                    <FiPhone className="contact-me-icons" />
                    +919403067286
                  </li>
                  <li>
                    <a
                      className="contact-email"
                      href="mailto:sagarbodkhe856@gmail.com"
                    >
                      <AiOutlineMail className="contact-me-icons" />
                      sagarbodkhe856@gmail.com
                      {/* <br/>&emsp;&emsp; */}
                    </a>
                  </li>
                  <li>
                    <ImLocation className="contact-me-icons" />
                    Pune
                  </li>
                  <li>
                    <Link
                      className="contact-email"
                      target="_blank"
                      to="https://www.linkedin.com/in/sagar-bodkhe-sb856"
                    >
                      <AiFillLinkedin className="contact-me-icons" />
                      Visit linkedin Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="right-side">
          <div className="right-header">
            <small>Name:</small>
            <Link to="/" className="link-style-depricate">
              <h1>Sagar Bodkhe</h1>
            </Link>
            <text>-Data Scientist</text>
          </div>
          {/* Rendering children here */}
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
