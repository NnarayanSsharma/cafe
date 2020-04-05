import React, { Component } from 'react'
import img from './image/slides1.jpg'
import './style.css'

class Header extends Component {
    state = {
        // images: [
        //     'image/slides1.jpg',
        //     './image/slides1.jpg',
        //     './image/slides2.jpg',
        //     './image/slides3.jpg',
        //     './image/slides4.jpg',
        //     './image/slides5.jpg',
        //     './image/slides6.jpg',
        // ]
    }
    
    render() {
        console.log(this.props.data)
        return (
            <div className="header">
                <div className="content">
                    <p className="logo"><i class="far fa-thumbs-up 7x"></i></p>
                    <p className="name">{this.props.data[0].name} </p>
                    {/* <p className="area">{this.props.data[0].area} </p> */}
                </div>
            </div>
        )
    }
}

export default Header
