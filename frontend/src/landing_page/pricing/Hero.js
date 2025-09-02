import React from 'react';

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row border-bottom text-center py-4">
        <h1>Charges</h1>
        <h4 className="text-muted fs-5 mt-3">List of all charges and taxes</h4>
      </div>

      <div className="row text-center py-4">
        <div className="col-md-4 col-12 py-4">
          <img src="media/images/pricingEquity.svg" />
          <h2 className="fs-3">Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-md-4 col-12 py-4">
          <img src="media/images/intradayTrades.svg" />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-md-4 col-12 py-4">
          <img src="media/images/pricingEquity.svg" />
          <h2 className="fs-3">Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
