import React, { useState, useEffect } from 'react';

function Section5() {
  return (
    <div className="section5box ">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
              <div className="h-100">
                <h6 className="section-title  text-start text-primary pe-3">Why Choose Us</h6>
                <h1 className="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
                <p className="mb-4">People trust crop recommendation and disease systems when they demonstrate accuracy, reliability, and transparency in their recommendations and analyses. Accuracy ensures that the recommendations provided align closely with the specific needs and conditions of the users' crops, leading to better outcomes and increased confidence in the system </p>
                <div className="row g-4">
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Crop recommendation prediction </p>
                        <p className="mb-2 perno">95%</p>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-primary moving-progress-bar1" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Crop Fire prediction</p>
                        <p className="mb-2 perno">90%</p>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-primary moving-progress-bar2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Crop disease </p>
                        <p className="mb-2 perno">89%</p>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-primary moving-progress-bar3" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "89%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-6 wow fadeInUp"   data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp" }}>
              <div className="img-border">
                <img className="img-fluid" src="https://www.teamplusindia.in/wp-content/uploads/2023/08/three-15.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
