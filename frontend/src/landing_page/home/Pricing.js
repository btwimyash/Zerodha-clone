import React from 'react';

function Pricing() {
    return (
        <div className='container py-5 px-3'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-5'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges — only at Investo.
                    </p>
                    <a href='' style={{ textDecoration: 'none' }}>
                        See Pricing <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                    </a>
                </div>

                <div className='col-12 col-md-6 offset-md-1 mt-5 mt-md-0'>
                    <div className='row'>
                        <div className='col-12 col-md-6 p-3 border text-center mb-3 mb-md-0'>
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and direct mutual fund investments with Investo</p>
                        </div>
                        <div className='col-12 col-md-6 p-3 border text-center'>
                            <h1 className="mb-3">₹20</h1>
                            <p>Flat ₹20 per order for intraday and F&O trades — no hidden charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
