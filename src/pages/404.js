import { Link } from "gatsby";
import React from "react";
import Seo from "../components/Seo";

const ErrorPage = () => {
  return (
    <>
      <Seo title="Error" />
      <main className="error-page">
        <h2>
          <b>404 !</b> page not found
        </h2>
        <h3>Sorry we couldn't find page you requested</h3>
        <Link to="/">Go back to Home</Link>
      </main>
    </>
   
  );
};

export default ErrorPage;
