import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { FcBusinessman } from "@react-icons/all-files/fc/FcBusinessman";
import Seo from "../components/Seo";
import { differenceInYears,differenceInMonths } from "date-fns";

// Calculating Dynamic experience years
const today = new Date();
const iniDate = new Date("Jan 02, 2000");
const exp = differenceInYears(today, iniDate);
const totalAge = Math.round(exp * 10) / 10;

const profile = () => {
  return (
    <Layout>
      <Seo title="My Profile" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2>
            <FcBusinessman className="icons" />
            Profile
          </h2>
          <div className="description-section">
            <section>
              <p>
                Full Name:&emsp;<b>Sagar Nanasaheb Bodkhe</b>
              </p>
              <p>
                Date of Birth:&emsp;<b>2nd Jan 2000</b>
              </p>
              <p>
                Age:&emsp;<b>{totalAge} years</b>
              </p>
              <p>
                Sex:&emsp;
                <b>Male</b>
              </p>
            </section>
            <section>
              <h3>Description:</h3>
              <div className="profile-description">
                <p>
                  Skilled in transforming complex datasets into actionable
                  insights to inform strategic decision-making and optimize
                  processes. Through continuous learning and experimentation,
                  Committed to continuous learning and staying updated with the
                  latest developments in data science and technology. Passionate
                  about leveraging data-driven approaches to solve complex
                  problems and drive organizational success.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
