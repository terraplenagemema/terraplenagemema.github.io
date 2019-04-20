import React, {Component} from 'react';

import "./Header.scss";

export class Header extends Component {
    render() {
        return (
            <div className="d-flex align-items-end overflow-hidden header p-4 text-white">
                <div className="col-12">
                    <div className="row p-3">
                        <div className="col-8">
                            <p className="lead font-weight-normal header-description">{this.props.description}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <a className="btn btn-secondary" href={`#sec-${this.props.callToActionDestination}`}>{this.props.callToAction}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
