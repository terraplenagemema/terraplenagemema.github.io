import React, {Component} from 'react';

import "./Section.scss";

export class Section extends Component {
    render() {
        let illustrationOrder = "order-lg-1";
        let descriptionOrder = "order-lg-0";
        if (this.props.orientation !== "left") {
            illustrationOrder = "order-lg-0";
            descriptionOrder = "order-lg-1";
        }

        let description = (
            <div className={`col-12 col-lg-${this.props.descriptionSize} ${descriptionOrder}`}>
                <h2 className="section-heading mb-4">{this.props.title}</h2>
                {this.props.description}
            </div>
        );

        let illustration = (
            <div className={`col-12 col-lg-${this.props.illustrationSize} ${illustrationOrder}`}>
                {this.props.illustration}
            </div>
        );

        let orientation = this.props.orientation === "left" ? "section-left" : "section-right";
        return (
            <div id={`sec-${this.props.id}`} className={`row ${orientation} section d-flex mt-4 mb-4 py-4`}>
                {/* Use nested containers to get full-width background color */}
                <div className="container">
                    <div className="row">
                        {description}
                        {illustration}
                    </div>
                </div>
            </div>
        );
    }
}
Section.defaultProps = {
    descriptionSize: 7,
    illustrationSize: 5
}