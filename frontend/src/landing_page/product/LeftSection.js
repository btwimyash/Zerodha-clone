import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 align-items-center g-5">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center ">
          <img src={imageURL} className="img-fluid" alt="product" />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-md-5">
          <h1 className="mb-3">{productName}</h1>
          <p style={{ fontSize: "1.1rem" }}>{productDescription}</p>

          <div className="mt-3 mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              className="ms-5"
              style={{ textDecoration: "none" }}
            >
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" alt="Google Play" />
            </a>
            <a href={appStore} className="ms-3">
              <img src="media/images/appstoreBadge.svg" className="img-fluid" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
