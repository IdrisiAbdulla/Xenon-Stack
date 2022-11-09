import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/018.webp')",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-3 mt-3">
              <div className="card">
                <div
                  className="thumbnail"
                  style={{ backgroundImage: "url('models/jumbo.jpg')" }}
                ></div>
                {/* <img
                src=""
                className="card-img-top mt-3 thumbnail"
                alt="Fissure in Sandstone"
              /> */}
                <div className="card-body">
                  3.7 <i className="fas fa-star text-warning" />
                  <h4 className="card-title">Shoe</h4>
                  <p className="card-text" style={{ color: "" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/ProductCustomizer/shoe" className="btn btn-link">
                    Start Designing
                  </Link>
                </div>
              </div>

            </div>

            <div className="col-md-3 mt-3">
              <div className="card">
                <div
                  className="thumbnail"
                  style={{ backgroundImage: "url('models/headphones.png')" }}
                ></div>
                <div className="card-body">
                  3.7 <i className="fas fa-star text-warning" />
                  <h4 className="card-title">Cricket </h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to="/ProductCustomizer/headphones"
                    className="btn btn-link "
                  >
                    Start Designing
                  </Link>
                </div>
              </div>
            </div>
            

            <div className=" col-md-3 mt-3">
              <div className="card">
                <div
                  className="thumbnail"
                  style={{ backgroundImage: "url('models/globe.png')" }}
                ></div>
                <div className="card-body ">
                  3.7 <i className="fas fa-star text-warning" />
                  <h4 className="card-title">Globe</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/ProductCustomizer/globe" className="btn btn-link">
                    Start Designing
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="card">
                <div
                  className="thumbnail"
                  style={{ backgroundImage: "url('models/watch.png')" }}
                ></div>
                <div className="card-body">
                  3.7 <i className="fas fa-star text-warning" />
                  <h4 className="card-title">Watch</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/ProductCustomizer/watch" className="btn btn-link">
                    Start Designing
                  </Link>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
