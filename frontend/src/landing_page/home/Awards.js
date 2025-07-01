import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 p-md-5 p-3 text-center'>
                    <img src='media/images/largestBroker.svg' alt='awards Image' className='img-fluid' />
                </div>
                <div className='col-12 col-md-6 p-md-5 p-3 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>
                        2+ million Investo users are shaping the future of finance.
                        Contributing to over 15% of daily market activity, our users invest and trade confidently in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Mutual Funds</p></li>
                                <li><p>Exchange Traded Funds (ETFs)</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures & Options</p></li>
                                <li><p>Government & Corporate Bonds</p></li>
                                <li><p>Gold & Digital Assets</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' className='img-fluid mt-3' alt='Press Logos' />
                </div>
            </div>
        </div>
    );
}

export default Awards;
