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
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <div className="logo-container">
                            <img className="logo" alt={this.props.brand} src={this.props.logo} />
                        </div>
                        <span>{this.props.brand}</span>
                    </a>
                    <button className="navbar-custom-toggler btn" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {items}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
