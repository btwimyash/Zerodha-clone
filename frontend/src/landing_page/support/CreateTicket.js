import React from 'react';
function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-4 text-muted mb-5">
                    To create a ticket, select a relevant topic
                </h1>
                <div className="col-md-4 col-12 py-md-5 mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-solid fa-circle-plus fa-sm"></i> Account Opening
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Resident individual</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Minor</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Non Resident Indian (NRI)</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Company, Partnership, HUF and LLP</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Glossary</button><br></br>
                </div>
                <div className="col-md-4 col-12 py-md-5  mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-regular fa-user fa-sm"></i> Your Zerodha Account
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Your Profile</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Account modification</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Client Master Report (CMR) and Depository Participant (DP)</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Nomination</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Transfer and conversion of securities</button><br></br>
                </div>
                <div className="col-md-4 col-12 py-md-5 mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-solid fa-chart-line me-2 fa-sm"></i> Kite
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>IPO</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Trading FAQs</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Margin Trading Facility (MTF) and Margins</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Charts and orders</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Alerts and Nudges</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>General</button><br></br>
                </div>
                <div className="col-md-4 col-12 py-md-5 mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-solid fa-money-bill-wave me-2 fa-sm"></i> Funds
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Add money</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Withdraw money</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Add bank accounts</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>eMandates</button><br></br>
                </div>
                <div className="col-md-4 col-12 py-md-5 mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-regular fa-rectangle-list me-2 fa-sm"></i> Console
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Portfolio</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Corporate actions</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Funds statement</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Reports</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Profile</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Segments</button><br></br>
                </div>
                <div className="col-md-4 col-12 py-md-5 mt-1 mb-3">
                    <h4 className="fs-5">
                       <i className="fa-regular fa-clock me-2 fa-sm"></i> Coin
                    </h4>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Mutual funds</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>National Pension Scheme (NPS)</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Fixed Deposit (FD)</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Features on Coin</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>Payments and Orders</button><br></br>
                    <button type="button" style={{background:"none",border:"none",padding:0,lineHeight:"2.5",textDecoration:"none",color:"inherit",textAlign:"left"}}>General</button><br></br>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;