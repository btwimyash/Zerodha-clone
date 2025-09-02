import React from "react";
function Hero() {
  return (
    <div className="container mb-5 p-5 border-bottom">
      <div className="text-center mt-3 p-5">
        <h1 className="fw-medium " style={{opacity:"0.85"}}>Zerodha Products</h1>
        <h4 className="mt-4 mb-4 fw-normal">Sleek, modern and intuitive trading platforms</h4>
        <p>
          Check out our {" "}
          <a href="" style={{textDecoration:"none"}}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
