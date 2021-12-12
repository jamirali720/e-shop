import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className="header-top sticky-top"  style={{height: 33, backgroundColor: '#059862', }}>
                <div className="center d-flex justify-content-around p-1">
                    <div className="header-tes text-white">
                        Trustful Shopping Site In Bangladesh
                    </div>
                    <div className="hotline">
                        <span> <Link to="#" className="text-decoration-none text-white">+8801814245427 (9am - 9pm)</Link>  </span>
                    </div>
                    <div className="header-top-links-right">
                        <Link className="text-decoration-none text-white me-3" to="#"> <small>How to buy</small></Link>
                        <Link className="text-decoration-none text-white" to="#"> <small> Sell with us</small></Link>
                    </div>
                </div>

        </div>
    );
};

export default TopHeader;