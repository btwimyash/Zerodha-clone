import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    link
}) {
    return (
        <div className="container">
            <div className="row p-5 align-items-center g-5">

                {/* Content Section */}
                <div className="col-12 col-md-6 p-md-5">
                    <h1 className="mb-3">{productName}</h1>
                    <p style={{ fontSize: "1.1rem" }}>{productDescription}</p>

                    <a href="" style={{ textDecoration: "none" }}>
                        {link} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Image Section */}
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center ">
                    <img src={imageURL} className="img-fluid" alt="product" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
