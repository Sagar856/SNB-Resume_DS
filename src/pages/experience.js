import React from "react";
import Layout from "../components/Layout";
import { CgWorkAlt } from "@react-icons/all-files/cg/CgWorkAlt";
import { IoArrowRedoCircle } from "@react-icons/all-files/io5/IoArrowRedoCircle";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import ExperienceTour from "../components/Tours/ExperienceTour";
import { differenceInMonths } from "date-fns";

// Calculating Dynamic experience years
const today = new Date();
const iniDate = new Date("Feb 15, 2022");
const exp = differenceInMonths(today, iniDate) / 12;
const totalExperience = Math.round(exp * 10) / 10;

const experience = () => {
  return (
    <Layout>
      <ExperienceTour />
      <Seo title="Experience" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2 className="experience-page-walkthrough">
            <CgWorkAlt className="icons" />
            Experience
          </h2>
          <div className="description-section description-overflow">
            <span className="total-exp-span">
              Total experience : <b>{totalExperience} years</b>
            </span>
            <p>
              <pre></pre>
              As a Dynamic <b>Data Scientist</b> at
              <b> Cognizant Technology Solutions</b>
              <br />I Specialize in developing sophisticated machine learning
              models and applying advanced statistical techniques to solve
              complex real world problems.
            </p>
            <p>My responsibilities included:</p>
            <p>
              <HiArrowNarrowRight className="exp-icons" />
              Performing exploratory data analysis, developing predictive
              models, and deploying scalable solutions to address business
              challenges.
              <br />
              <HiArrowNarrowRight className="exp-icons" />
              Creating new features or transforming existing ones to improve the
              performance of machine learning models, this is done by
              dimensionality reduction, scaling, and encoding methods.
              <br />
              <HiArrowNarrowRight className="exp-icons" />
              Building and evaluating the machine learning models to solve the
              business problems and to predictions, using appropriate methods
              and hyperparameters tuning.
              <br />
              <HiArrowNarrowRight className="exp-icons" />
              Collaborating with cross-functional teams to integrate data
              science solutions into existing workflows and streamline
              processes.
            </p>
            <p>
              Through continuous learning and experimentation, I stay abreast of
              the latest advancements in the field and apply innovative
              approaches to solve diverse problems. My strong analytical skills,
              coupled with effective communication and collaboration abilities,
              have enabled me to deliver impactful insights and drive business
              growth.
            </p>
            <div className="experience-my-work">
              <h3>Explore my portfolio of Data Science triumphs :</h3>
              <ul>
                <li>
                  <Link
                    to="https://sb-simply-recipes-grind.netlify.app"
                    className="my-work-links my-work-walkthrough"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Just Recipes
                    Webapp site
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-youtube-plus-app.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Youtube Plus
                    App
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-omnifood-html-css.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Omnifood
                    HTML-CSS Desktop
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-web-warrior-gatsby.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Web Warrior
                    Site
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default experience;
