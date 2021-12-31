import React, {Component} from 'react';
import {Image} from "./Image.js";

import "./Carousel.scss";

export class Carousel extends Component {
    render() {
        let indicators = [], i = 0;
        this.props.children.forEach(c => {
            let active = c.props.active? "active" : "";
            indicators.push(<li key={i} data-bs-target="#myCarousel" data-bs-slide-to={i} className={active}></li>);
            i += 1;
        });

        return (
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {this.props.children}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}


export class CarouselImage extends Component {
    render() {
        let active = this.props.active? "active" : "";
        return (
            <div className={`carousel-item ${active}`}>
                <Image image={this.props.image} alt={this.props.alt} />
            </div>
        );
    }
}
