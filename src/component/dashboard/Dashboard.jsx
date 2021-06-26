import React, { Component } from 'react'

import {FaRegBell} from 'react-icons/fa'
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
                            
                                <div  onClick={this.clickHandler} id={this.state.active==="Home"?"active":"Home"}>Home</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Clients"?"active":"Clients"}>Clients</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Edit"?"active":"Edit"}>Edit Progress</div>
                                <div onClick={this.clickHandler} id={this.state.active==="Add"?"active":"Add"}>Add Client</div>
                               
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
