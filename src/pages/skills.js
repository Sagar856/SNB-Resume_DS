import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { GiGears } from "@react-icons/all-files/gi/GiGears";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbChartHistogram } from "react-icons/tb";
import { SiMusicbrainz } from "react-icons/si";
import { TbPlusEqual } from "react-icons/tb";
import { TbWorldSearch } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiGooglecolab } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Seo from "../components/Seo";
import SkillsTour from "../components/Tours/SkillsTour";

const skills = () => {
  return (
    <Layout>
      <SkillsTour />
      <Seo title="Skills" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2 className="skills-page-walkthrough">
            <GiGears className="icons" />
            Skills
          </h2>
          <div className="description-section">
            <p>Outlined below are my extensive Data Science proficiencies:</p>
            <ul className="skill-page-ul">
              <li>
                <b>
                  <LiaLaptopCodeSolid className="skill-page-icons" />
                </b>
                <text>Programming Languages:</text>
                <b>&nbsp;Python, MySQL</b>
              </li>
              <li>
                <b>
                  <SiMusicbrainz className="skill-page-icons" />
                </b>
                <text>Machine Learning:</text>
                <b>
                  &nbsp;Regression, Classification, Clustering,
                  &ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Neural
                  Networks
                </b>
              </li>
              <li>
                <b>
                  <TbWorldSearch className="skill-page-icons" />
                </b>
                <text>Data Manipulation:</text>
                <b>&ensp;Pandas, Numpy</b>
              </li>
              <li>
                <b>
                  <TbChartHistogram className="skill-page-icons" />
                </b>
                <text>Data Visualization:</text>
                <b>&ensp;Tableau, Seaborn, Matplotlib</b>
              </li>
            </ul>
            <p>
              Enumerated below are the tools and technologies I have employed in
              my professional endeavors:
            </p>
            <ul className="skill-page-ul-tools">
              <li>
                <b>
                  <FaPython className="skill-page-icons" />
                  Python
                </b>
              </li>
              <li>
                <b>
                  <IoLogoTableau className="skill-page-icons" />
                  Tableau
                </b>
              </li>
              <li>
                <b>
                  <GrMysql className="skill-page-icons" />
                  MySQL
                </b>
              </li>
              <li>
                <b>
                  <SiGooglecolab className="skill-page-icons" />
                  Colab
                </b>
              </li>
              <li>
                <b>
                  <SiAnaconda className="skill-page-icons" />
                  Anaconda
                </b>
              </li>
              <li>
                <b>
                  <SiJupyter className="skill-page-icons" />
                  Jupyter
                </b>
              </li>
              <li>
                <b>
                  <TbBrandVscode className="skill-page-icons" />
                  VS-Code
                </b>
              </li>
             
            </ul>
            {/* Loading Certificates page Here */}
            <Link
              to="/skills/certificates"
              className="skill-certificates-link link-style-depricate"
            >
              <text>
                Click Here to explore my <b>Certificates</b>
              </text>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
