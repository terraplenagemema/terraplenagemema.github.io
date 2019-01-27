import React, {Component} from 'react';
import {Image} from "./Image.js";

import "./Carousel.scss";

export class Carousel extends Component {
    render() {
        let indicators = [], i = 0;
        this.props.children.forEach(c => {
            let active = c.props.active? "active" : "";
            indicators.push(<li key={i} data-target="#myCarousel" data-slide-to={i} className={active}></li>);
            i += 1;
        });

        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {this.props.children}
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
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