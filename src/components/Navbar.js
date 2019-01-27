import React, {Component} from 'react';

import "./Navbar.scss";
import logo from "../images/logo.png";

export class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg navbar-ema">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <div className="logo-container">
                            <img className="logo" src={logo} />
                        </div>
                        <span>Terraplenagem EMA</span>
                    </a>
                    <button className="navbar-custom-toggler btn" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sec-company">A empresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sec-services">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sec-album">Fotos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sec-customers">Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sec-contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
