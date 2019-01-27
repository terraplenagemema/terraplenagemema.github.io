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
            <div className={`col-lg-${this.props.descriptionSize} ${descriptionOrder}`}>
                <h2 className="section-heading mb-4">{this.props.title}</h2>
                {this.props.description}
            </div>
        );

        let illustration = (
            <div className={`col-lg-${this.props.illustrationSize} ${illustrationOrder}`}>
                {this.props.illustration}
            </div>
        );

        return (
            <>
                <div id={`sec-${this.props.id}`} className="row section d-flex">
                    {description}
                    {illustration}
                </div>
                <hr className="section-divider" />
            </>
        );
    }
}
Section.defaultProps = {
    descriptionSize: 7,
    illustrationSize: 5
}