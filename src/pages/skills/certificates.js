import React from "react";
import Layout from "../../components/Layout";
import { Link, graphql } from "gatsby";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { AiOutlineSafetyCertificate } from "@react-icons/all-files/ai/AiOutlineSafetyCertificate";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const certificates = ({ data }) => {
  const certi = data.allContentfulCertificates.nodes;
  return (
    <Layout>
      <Seo title="Certificates" />
      <div className="right-body">
        <Link to="/skills" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2>
            <AiOutlineSafetyCertificate className="icons" />
            Certificates
          </h2>
          <div className="description-section">
            <section className="certificate-data">
              {certi.map((items, index) => {
                const pathToImg = getImage(items.image);
                console.log(items.image);
                return (
                  <div key={index}>
                    <h3>{items.title}</h3>
                    <GatsbyImage image={pathToImg} 
                    alt={items.title}/>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulCertificates {
      nodes {
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default certificates;
