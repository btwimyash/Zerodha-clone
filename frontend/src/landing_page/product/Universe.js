// import React from 'react';
// import './Universe.css'; // add this CSS file or include the styles inline

// function Universe() {
//     return (
//         <div className="container">
//             <div className="row text-center p-5">

//                 <h1 className="mb-3">The Zerodha Universe</h1>
//                 <p style={{ fontSize: "1.1rem" }}>
//                     Extend your trading and investment experience even further with our partner platforms
//                 </p>

//                 {/** Platform cards */}
//                 <div className="row mt-5 gy-5">
//                     <div className="col-12 col-md-4">
//                         <img src="media/images/zerodhaFundhouse.png" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Our asset management venture that is creating simple and transparent index
//                             funds to help you save for your goals.
//                         </p>
//                     </div>

//                     <div className="col-12 col-md-4">
//                         <img src="media/images/streakLogo.png" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Systematic trading platform that allows you to create and backtest strategies without coding.
//                         </p>
//                     </div>

//                     <div className="col-12 col-md-4">
//                         <img src="media/images/sensibullLogo.svg" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
//                         </p>
//                     </div>

//                     <div className="col-12 col-md-4">
//                         <img src="media/images/smallcaseLogo.png" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
//                         </p>
//                     </div>

//                     <div className="col-12 col-md-4">
//                         <img src="media/images/tijori.svg" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
//                         </p>
//                     </div>

//                     <div className="col-12 col-md-4">
//                         <img src="media/images/dittoLogo.png" className="logo-img mb-3" />
//                         <p className="text-muted small">
//                             Personalized advice on life and health insurance. No spam and no mis-selling.
//                         </p>
//                     </div>
//                 </div>

//                 <button className='btn fs-5 mt-5' style={{ width: "20%", margin: "0 auto", backgroundColor: "#387ed1", color: "white" }}>
//                     Sign up for free
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Universe; 

import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">Simple index funds</p>
        </div>
        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">Options trading tools</p>
        </div>
        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/tijori.svg" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">Stock & sector insights</p>
        </div>
        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/streakLogo.png" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">No-code algo trading</p>
        </div>
        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 mt-5">
          <img src="media/images/dittoLogo.png" style={{height:"55px", maxWidth:"100%"}}/>
          <p className="text-small text-muted">Insurance made simple</p>
        </div>
        <button
          className="p-1 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;