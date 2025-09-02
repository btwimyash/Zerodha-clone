import React from 'react';

function Stats() {
    return (
        <div className='container py-5 px-3'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 py-4'>
                    <h1 className="fs-2 mb-4">Trust with confidence</h1>

                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">1.3+ crore customers trust Investo with ₹3.5+ lakh crores in equity investments.</p>

                    <h2 className="fs-4">Built on Trust</h2>
                    <p className="text-muted">Investo empowers millions to invest confidently with transparent and secure platforms.</p>

                    <h2 className="fs-4">Seamless Investing</h2>
                    <p className="text-muted">From stocks to mutual funds, Investo makes investing easy and accessible for everyone.</p>

                    <h2 className="fs-4">Your Financial Growth Partner</h2>
                    <p className="text-muted">Join Investo’s growing community shaping the future of finance in India.</p>
                </div>

                <div className='col-12 col-md-6 text-center py-4'>
                    <img src='media/images/ecosystem.png' className="img-fluid mb-4" alt="Ecosystem" />
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                        <a href="#" style={{ textDecoration: "none" }}>
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            Try Kite Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
