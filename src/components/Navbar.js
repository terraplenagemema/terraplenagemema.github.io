import React, {Component} from 'react';

import "./Navbar.scss";


export class Navbar extends Component {
    render() {
        let items = [];
        Object.entries(this.props.items).forEach(([item, label]) => {
            items.push(
                <li key={item} className="nav-item">
                    <a className="nav-link" href={`#sec-${item}`}>{label}</a>
                </li>);
        });
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <div className="logo-container">
                            <img className="logo" alt={this.props.brand} src={this.props.logo} />
                        </div>
                        <span>{this.props.brand}</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {items}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
