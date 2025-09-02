import React from 'react';
import {Link} from "react-router-dom";
function NotFound() {
    return (
        <div className="container mb-5">
            <div className="row text-center">
                <h1 className="mt-5">Error 404 Not Found</h1>
                <p className="mt-2">
                    Sorry, the page you are looking for does not exists!!
                </p>

                <Link to="/"> 
                    <button className='p-1 btn btn-danger fs-5 mb-5 mt-2' style={{ width: "20%", margin: "0 auto" }}>HomePage</button></Link>
            </div>
        </div>
    );
}

export default NotFound;