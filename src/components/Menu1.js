import React, { Component } from 'react'
import './style.css'

class Menu1 extends Component {
    render() {
        return (
            <div className="menu-1 center bg-dark">
                <div className="menu">
                    {/* <div className="restro"><img src={restro}/>
                        <p>Restaurant</p>
                    </div> */}
                    <i class="fas fa-restroom"></i>
                    <p> {this.props.data[0].category[0]} </p>
                </div>
                <div className="menu">
                    {/* <div className="cafe-img">
                        <img src={cafe}/>
                        <p>Cafe</p>
                    </div> */}
                    <i class="fas fa-wine-glass-alt"></i>
                    <p>{this.props.data[0].category[1]}</p>
                </div>
                <div className="menu">
                    {/* <div className="breakfast"><img src={breakfast}/>
                        <p>Breakfast</p>
                    </div> */}
                    <i class="fas fa-coffee"></i>
                    <p>{this.props.data[0].category[2]}</p>
                </div>   
            </div>
        )
    }
}

export default Menu1
