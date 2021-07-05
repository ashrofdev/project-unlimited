import React, { Component } from 'react';
import {FaEdit, FaHome, FaUserPlus, FaUsers} from 'react-icons/fa';

 class Home extends Component {
    render() {
        return (
            <div className="home">
                HOME
                <div className="menu">
                    <div className="menuitem">
                        <FaHome/>
                    </div>
                    <div className="menuitem">
                        <FaUsers/>
                    </div>
                    <div className="menuitem">
                        <FaEdit/>
                    </div>
                    <div className="menuitem">
                        <FaUserPlus/>
                    </div>

                </div>
                <div className="activity">
                    <h5>Monthly Activity</h5>
                    <div className="canvas">
                        
                    </div>
                </div>
                <div className="efficiencycalculator">
                    <div className="totalphone">
                        <h6>Total Assigned Phone numbers</h6>
                        <p className="figure">200 <span>{'phone numbers'}</span></p>
                    </div>
                    <div className="totalconverted">
                        <h6>Total Converted Phone numbers</h6>
                        <p className="figure">120 <span>{'phone numbers'}</span></p>
                    </div>
                    <div className="totalpending">
                        <h6>Total Pending Phone numbers</h6>
                        <p className="figure">65 <span>{'phone numbers'}</span></p>
                    </div>
                    <div className="totalrejections">
                        <h6>Total Rejections</h6>
                        <p className="figure">15 <span>{'phone numbers'}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
