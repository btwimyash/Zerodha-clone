import React from 'react';
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="py-3" id="supportWrapper">
                <h4 className="fs-4 mt-4">
                    Support Portal
                </h4>
                <a href="" className="mt-4" style={{ fontSize: "17px" }}>Track Tickets</a>
            </div>

            <div className="row p-5" id="supportSections">
                <div className="col-lg-1"></div>
                <div className="col-12 col-md-6 mb-4 px-md-5" >
                    <h1 className="fs-4 fw-normal">Search for an answer or browse help topics to create a ticket</h1>

                    <div className="position-relative mt-4 mb-3">
                        <input
                            type="text"
                            className="form-control ps-3 pe-5 supportInput"
                            placeholder="Eg. how do I activate F&O, why is my order getting rejected.."
                        />
                        <i
                            className="fa-solid fa-magnifying-glass"
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "20px",
                                transform: "translateY(-50%)",
                                color: "gray",
                                pointerEvents: "none"
                            }}
                        ></i>
                    </div>

                    <a href="" style={{ fontSize: "18px" }}>Track account opening </a>&nbsp;&nbsp;
                    <a href="" style={{ fontSize: "18px" }}>Track segment activation </a>&nbsp;&nbsp;
                    <a href="" style={{ fontSize: "18px" }}>Intraday margins</a>&nbsp;&nbsp;
                    <a href="" style={{ fontSize: "18px" }}>Kite user manual</a>
                </div>
                <div className="col-12 col-md-5 px-md-5" >
                    <h1 className="fs-4 fw-semibold">Featured yash</h1>
                    <ol>
                        <li><a href="" className="" style={{ fontSize: "17px" }}>Quarterly Settlement of Funds - July 2025 </a></li><br></br>
                        <li><a href="" className="" style={{ fontSize: "17px" }}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;