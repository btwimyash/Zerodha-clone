import React from 'react';

function Education() {
    return (
        <div className='container py-5 px-3'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img
                        src="media/images/education.svg"
                        className="img-fluid"
                        style={{ maxWidth: "75%" }}
                        alt="Investo Education"
                    />
                </div>
                <div className='col-1'></div>
                <div className='col-12 col-md-5'>
                    <h1 className="mb-4">Education for Every Investor</h1>

                    <div className='mt-4'>
                        <p className="text-muted">
                            Learn investing and trading at your own pace. Investo empowers you with free, easy-to-understand resources to grow financially.
                        </p>
                        <a href="#" className="d-block mb-3 text-decoration-none">
                            Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>

                    </div>
                    <div className='mt-4'>
                        <p className="text-muted">
                            From market basics to expert strategies, explore articles, videos, and Q&As — all tailored for Indian investors.
                        </p>
                        <a href="#" className="d-block text-decoration-none">
                            Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
