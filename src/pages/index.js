import React from "react";
import "../assets/styles/index.css";
import { CgWorkAlt } from "@react-icons/all-files/cg/CgWorkAlt";
import { IoSchoolOutline } from "@react-icons/all-files/io5/IoSchoolOutline";
import { GiGears } from "@react-icons/all-files/gi/GiGears";
import { GiBowman } from "@react-icons/all-files/gi/GiBowman";
import { FaRegHandPointLeft } from "@react-icons/all-files/fa/FaRegHandPointLeft";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Tour from "../components/Tours/Tour";
import experience from "./experience";

import { differenceInMonths } from "date-fns";

// //Hide tooltip after three seconds
// if (typeof window !== "undefined") {
//   let initialTimeout = setTimeout(function () {
//     document.getElementById("tooltiptext-exp").style.backgroundColor = "white";
//     document.getElementById("tooltiptext").style.backgroundColor = "white";
//     document.getElementById("tooltiptext-skill").style.backgroundColor =
//       "white";
//   }, 100);

//   let showTimeout = setTimeout(function () {
//     document.getElementById("tooltiptext-exp").style.backgroundColor =
//       "rgba(0, 0, 0, 0.429)";
//     document.getElementById("tooltiptext").style.backgroundColor =
//       "rgba(0, 0, 0, 0.429)";
//     document.getElementById("tooltiptext-skill").style.backgroundColor =
//       "rgba(0, 0, 0, 0.429)";
//   }, 3000);

//   let hidingTimeout = setTimeout(function () {
//     document.getElementById("tooltiptext-exp").style.backgroundColor = "white";
//     document.getElementById("tooltiptext").style.backgroundColor = "white";
//     document.getElementById("tooltiptext-skill").style.backgroundColor =
//       "white";
//   }, 7000);
// }

// Calculating Dynamic experience years here
const today = new Date();
const iniDate = new Date("Feb 15, 2022");
const exp = differenceInMonths(today, iniDate) / 12;
const totalExperience = Math.round(exp * 10) / 10;

const index = () => {
  return (
    <Layout>
      <Seo title="Sagar Resume" />
      <div className="right-body">
        <Link to="/experience" className="link-style-depricate tooltip">
          <Tour />
          <h2 className="experience-heading">
            <CgWorkAlt className="icons" />
            Experience
          </h2>
          {/* <span id="tooltiptext-exp" className="tooltiptext-exp">
            <span className="tooltip-icons">
              <FaRegHandPointLeft />
            </span>
            Click
          </span> */}
          <div className="description-section">
            <p>
              As a <b>Data Scientist</b> at
              <b> Cognizant Technology Solutions</b> I leverage advanced
              analytics and machine learning techniques to extract insights from
              complex datasets and drive crucial decision-making processes. also
              collaborated with cross-functional teams to integrate data science
              solutions into existing workflows and streamline processes.
            </p>
            <span>
              Total experience : <b> {totalExperience} years</b>
            </span>
          </div>
        </Link>
        <Link to="/education" className="link-style-depricate tooltip">
          <div>
            <h2 className="education-heading">
              <IoSchoolOutline className="icons" />
              Education
            </h2>
            {/* <span id="tooltiptext" className="tooltiptext">
              <span className="tooltip-icons">
                <FaRegHandPointLeft />
              </span>
              Click on each tab for more info
            </span> */}
            <div className="description-section">
              <h3>Bachelor of Engineering&ensp;(2017-21)</h3>
              <h3>Mechanical Engineer</h3>
              <p>
                From <b>Savitribai Phule Pune University,</b> Passout of
                <b> Jul-2021</b> batch
              </p>
            </div>
          </div>
        </Link>
        <Link to="/skills" className="link-style-depricate tooltip">
          <div>
            <h2 className="skills-heading">
              <GiGears className="icons" />
              Skills
            </h2>
            {/* <span id="tooltiptext-skill" className="tooltiptext-skill">
              <span className="tooltip-icons">
                <FaRegHandPointLeft />
              </span>
              Click on each tab for more info
            </span> */}
            <div className="description-section">
              <div className="skill-container">
                <div className="current-skill">
                  <h3>Data Science skills</h3>
                  <ul>
                    <li>Data Mining</li>
                    <li>Data Visualization</li>
                    <li>Statistics</li>
                    <li>Neural Networks</li>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                  </ul>
                </div>
                <div className="new-skill">
                  <h3>Tools & Technologies</h3>
                  <ul>
                    <li>Numpy & Pandas</li>
                    <li>Python for Data-science</li>
                    <li>Tableau</li>
                    <li>MySQL</li>
                    <li>Anaconda-Jupyter</li>
                    <li>Google Colab</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <h2>
            <GiBowman className="icons" />
            achievements
          </h2>
          <div className="description-section">
            <p>
              Worked as NSS Volunteer for 2 years during engineering (2019-21).
            </p>
            <p style={{ marginTop: "2%" }}>
              Participated in <b>Guinness World Record</b> of tree plantation
              organized by SPPU University in 2019.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
