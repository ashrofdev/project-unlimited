import React, { Component } from 'react';
import {FaEdit, FaHome, FaUserPlus, FaUsers} from 'react-icons/fa';

 class Home extends Component {
    render() {
        return (
            <div>
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
                    
                </div>
            </div>
        )
    }
}

export default Home
