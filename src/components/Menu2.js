import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import './style.css'

class Menu2 extends Component {

    render() {
        const {votes} = this.props.data[0].review_rating;
        const featureRating = this.props.data[0].feature_rating;
        // let totalStar = 5;
        // for(let item in votes){
        //     const starPercentage = (votes[item].rating/totalStar)*100;

        //     // round to nearest 10
        //     const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;
        //     console.log(starPercentageRounded)
        //     // document.querySelector(`.${item} .stars-inner`).getElementsByClassName.width = starPercentageRounded;
        //     const style = {
        //         width: `${starPercentageRounded}`
        //     }
        // }
        

        return (
            <div className="menu-2">
                <div className="review-rating">
                    <h1>Review Rating</h1>
                    <Table className="table-rating" striped bordered hover variant="dark">
                        <thead>
                            <tr className="table-row">
                                <th>Rating</th>
                                <th>Star Rating</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="table-row">
                                <td>{votes[0].rating} </td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "80%"}}></div>
                                    </div>
                                </td>
                                <td>{votes[0].votes}</td>
                            </tr>
                            <tr className="table-row">
                                <td>{votes[1].rating}</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "100%"}}></div>
                                    </div>
                                </td>
                                <td>{votes[1].votes}</td>
                            </tr>
                            <tr className="table-row">
                                <td>{votes[2].rating}</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "40%"}}></div>
                                    </div>
                                </td>
                                <td>{votes[2].votes}</td>
                            </tr>
                            <tr className="table-row">
                                <td>{votes[3].rating}</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "60%"}}></div>
                                    </div>
                                </td>
                                <td>{votes[3].votes}</td>
                            </tr>
                            <tr className="table-row">
                                <td>{votes[4].rating}</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "20%"}}></div>
                                    </div>
                                </td>
                                <td>{votes[4].votes}</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
                
                <div className="feture-rating bg-dark">
                    <h1>Feature Rating</h1>
                    <Table className="table-rating" striped bordered hover variant="dark">
                        <thead>
                            <tr className="table-row">
                                <th>Feature</th>
                                <th>Star Rating</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="table-row">
                                <td> Place </td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "70%"}}></div>
                                    </div>
                                </td>
                                <td>{featureRating.place}</td>
                            </tr>
                            <tr className="table-row">
                                <td>Food</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "70%"}}></div>
                                    </div>
                                </td>
                                <td>{featureRating.food}</td>
                            </tr>
                            <tr className="table-row">
                                <td>Service</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "80%"}}></div>
                                    </div>
                                </td>
                                <td>{featureRating.service}</td>
                            </tr>
                            <tr className="table-row">
                                <td>Staff</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "80%"}}></div>
                                    </div>
                                </td>
                                <td>{featureRating.staff}</td>
                            </tr>
                            <tr className="table-row">
                                <td>Breakfast</td>
                                <td>
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{width: "70%"}}></div>
                                    </div>
                                </td>
                                <td>{featureRating.breakfast}</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </div>
        )
    }
}

export default Menu2
