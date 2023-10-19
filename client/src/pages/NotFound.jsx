import React from "react";
import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import Footer from "../components/Layout/Footer";

function NotFound() {
  return (
    <>
      <Header />
      <MainSection>
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="display-1">Hit a Snap</div>
          <div className="display-1" style={{ color: "red" }}>
            404
          </div>
          <div className="test-muted">
            Resource you are trying to access, Not Found!
          </div>
        </div>
      </MainSection>
      <Footer />
    </>
  );
}

export default NotFound;
