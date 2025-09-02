import React from 'react';

function Footer() {
    return (
        <footer className="border-top" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-12 col-md-3">
                        <img src="media/images/logo.svg"   style={{ width: "40%" }} alt="logo" />
                        <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
                            &copy; 2010 - 2024, Not Zerodha Broking Ltd.<br />
                            All rights reserved.
                        </p>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5 style={{ color: "#333333" }}>Company</h5>
                        <a href="/about" className="d-block mb-1">About</a>
                        <a href="/product" className="d-block mb-1">Products</a>
                        <a href="/pricing" className="d-block mb-1">Pricing</a>
                        <a href="/referral" className="d-block mb-1">Referral Programme</a>
                        <a href="/careers" className="d-block mb-1">Careers</a>
                        <a href="https://zerodha.tech" className="d-block mb-1" target="_blank" rel="noopener noreferrer">Zerodha.tech</a>
                        <a href="/press" className="d-block mb-1">Press & Media</a>
                        <a href="/csr" className="d-block mb-1">Zerodha Cares (CSR)</a>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5 style={{ color: "#333333" }}>Support</h5>
                        <a href="/support" className="d-block mb-1">Contact</a>
                        <a href="/support" className="d-block mb-1">Support portal</a>
                        <a href="/z-connect" className="d-block mb-1">Z-Connect blog</a>
                        <a href="/charges" className="d-block mb-1">List of charges</a>
                        <a href="/downloads" className="d-block mb-1">Downloads & resources</a>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5 style={{ color: "#333333" }}>Account</h5>
                        <a href="/signup" className="d-block mb-1">Open an account</a>
                        <a href="/fund-transfer" className="d-block mb-1">Fund Transfer</a>
                        <a href="/challenge" className="d-block mb-1">6 day challenge</a>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5 style={{ color: "#333333" }}>Quick links</h5>
                        <a href="/upcoming-ipos" className="d-block mb-1">Upcoming IPOs</a>
                        <a href="/pricing" className="d-block mb-1">Brokerage charges</a>
                        <a href="/market-holidays" className="d-block mb-1">Market holidays</a>
                        <a href="/economic-calendar" className="d-block mb-1">Economic calendar</a>
                        <a href="/calculators" className="d-block mb-1">Calculators</a>
                        <a href="/markets" className="d-block mb-1">Markets</a>
                        <a href="/sectors" className="d-block mb-1">Sectors</a>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-muted" style={{ fontSize: "14px" }}>
                        <p>
                            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd.
                            – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha
                            Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
                            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
                            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                            For any complaints pertaining to securities broking please write to
                            complaints@zerodha.com, for DP related to dp@zerodha.com.
                            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>

                        <p>
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
                            Mandatory details for filing complaints on SCORES: Name, PAN, Address,
                            Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>

                        <p>
                            Investments in securities market are subject to market risks; read
                            all the related documents carefully before investing.
                        </p>

                        <p>
                            "Prevent unauthorised transactions in your account. Update your
                            mobile numbers/email IDs with your stock brokers. Receive
                            information of your transactions directly from Exchange on your
                            mobile/email at the end of the day. Issued in the interest of
                            investors. KYC is one time exercise while dealing in securities
                            markets - once KYC is done through a SEBI registered intermediary
                            (broker, DP, Mutual Fund etc.), you need not undergo the same
                            process again when you approach another intermediary." Dear
                            Investor, if you are subscribing to an IPO, there is no need to
                            issue a cheque. Please write the Bank account number and sign the
                            IPO application form to authorize your bank to make payment in case
                            of allotment. In case of non allotment the funds will remain in your
                            bank account. As a business we don't give stock tips, and have not
                            authorized anyone to trade on behalf of others. If you find anyone
                            claiming to be part of Zerodha and offering such services, please
                            create a ticket here.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex flex-wrap gap-3 justify-content-center fw-semibold" style={{ opacity: "0.8" }} >
                        <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer">NSE</a>
                        <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer">BSE</a>
                        <a href="https://www.mcxindia.com" target="_blank" rel="noopener noreferrer">MCX</a>
                        <a href="/terms">Terms & conditions</a>
                        <a href="/policies">Policies & procedures</a>
                        <a href="/privacy">Privacy policy</a>
                        <a href="/disclosures">Disclosure For investor's attention</a>
                        <a href="/investor-charter">Investor charter</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
