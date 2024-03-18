import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import Seo from "../components/Seo";

const gallery = ({ data }) => {
  console.log(data)
  const galleryImg = data.allContentfulGalleryImages.nodes;
  return (
    <Layout>
      <Seo title="Gallery" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="gallery page">
          {galleryImg.map((item, index) => {
            const imgPath = getImage(item.image);
            console.log(imgPath);
            return (
              <div key={index}>
                <GatsbyImage
                  image={imgPath}
                  alt={item.title}
                  className="gallery-item"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulGalleryImages {
      nodes {
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default gallery;
