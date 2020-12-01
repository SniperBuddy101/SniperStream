import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuthentication";

const HeaderMenu = () => {

    return <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            SniperStream
        </Link>
        <div className="ui right menu">
        <Link to="/" className="item">
            All Streams
        </Link>
        <GoogleAuth  />

        </div>
        
    </div>
}

export default HeaderMenu;