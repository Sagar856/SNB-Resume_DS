import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { IoSchoolOutline } from "@react-icons/all-files/io5/IoSchoolOutline";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import Seo from "../components/Seo";

const education = () => {
  return (
    <Layout>
      <Seo title="Education" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2>
            <IoSchoolOutline className="icons" />
            Education
          </h2>
          <div className="description-section education-page">
            <section>
              <h3>Bachelor of Engineering&ensp;(2017-21)</h3>
              <p>Course:&emsp;<b>Mechanical Engineering</b></p>
              <p>
                University:&emsp;<b>Savitribai Phule Pune University</b>
              </p>
              <p>
                Institute:&emsp;
                <b> JSPM's Imperial College of Engineering & Res, Pune.</b>
              </p>
              <p>
                SGPA:&emsp;<b>7.88</b>&ensp;(First class with Distinction)
              </p>
            </section>
            <section>
              <h3>Higher secondary education&ensp;(2017)</h3>
              <p>Course:&emsp;<b>Science</b></p>
              <p>
                Education Board:&emsp;<b> Maharashtra State Board.</b>
              </p>
              <p>
                Institute:&emsp;
                <b>Vivekananda Science College, Ch. Sambhajinagar</b>
              </p>
              <p>
                Percentage:&emsp;<b>72.92&ensp;%</b>
              </p>
            </section>
            <section>
              <h3>Secondary school education&ensp;(2015)</h3>
              <p>
                Education Board:&emsp;<b> Maharashtra State Board.</b>
              </p>
              <p>
                Institute:&emsp;
                <b>Mukul Mandir high school, Ch. Sambhajinagar</b>
              </p>
              <p>
                Percentage:&emsp;<b>85.60&ensp;%</b>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default education;
