import React, { Component } from 'react'
import {FaEdit, FaHome, FaRegBell, FaUserPlus, FaUsers} from 'react-icons/fa'
import Addclient from './Addclient'
import Clients from './Clients'
import EditProgress from './EditProgress'
import Home from './Home'
class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active:"Home"
        }
    }
    
    clickHandler=(e)=>{
        this.setState({
            active:e.target.id
        })
        
    }
    render() {
        return (
            <>
                <div className="container">
                    
                    <div className="header">
                    <FaRegBell id="bell"/>
                    </div>
                    <div className="nav">
                        <div id="avatar">
                            <span>John Doe</span>
                            <span id="title">Mentor</span>
                        </div>
                        <div id="nav-items">
                            
                                <div onClick={this.clickHandler} id={this.state.active==="Home"?"active":"Home"}><div className="icon"><FaHome id="icon" /></div> Home</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Clients"?"active":"Clients"}><div className="icon"><FaUsers id="icon" /></div> Clients</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Edit"?"active":"Edit"}><div className="icon"><FaEdit id="icon" /></div> Edit Progress</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Add"?"active":"Add"}><div className="icon"><FaUserPlus id="icon" /></div> Add Client</div>
                               
                        </div>
                    </div>
                    <div className="main">
                        {this.state.active==="Home"?<Home/>:null}
                        {this.state.active==="Clients"?<Clients/>:null}
                        {this.state.active==="Add"?<Addclient/>:null}
                        {this.state.active==="Edit"?<EditProgress/>:null}
                    </div>

                    
                </div>

            </>
        )
    }
}

export default Dashboard
