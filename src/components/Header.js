import React, {Component} from 'react';

import "./Header.scss";

export class Header extends Component {
    render() {
        return (
            <div className="d-flex align-items-center overflow-hidden text-center bg-light header p-4 text-white">
                <div className="col-12 col-sm-9 col-md-6 col-lg-5 mx-auto p-3 header-content">
                    <h1 className="header-title">{this.props.title}</h1>
                    <p className="lead font-weight-normal">{this.props.description}</p>
                    <a className="btn btn-primary" href={`#sec-${this.props.callToActionDestination}`}>{this.props.callToAction}</a>
                </div>
            </div>
        );
    }
}
