import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap";

import logo from "./images/logo.png";
import imageCompany from "./images/company.jpg";
import imageServices from "./images/services.jpg";
import imageCustomers from "./images/customers.jpg";
import imageAlbum1 from "./images/album1.jpg";
import imageAlbum2 from "./images/album2.jpg";
import imageAlbum3 from "./images/album3.jpg";
import imageAlbum4 from "./images/album4.jpg";
import imageAlbum5 from "./images/album5.jpg";
import imageAlbum6 from "./images/album6.jpg";
import imageWhatsAppLogo from "./images/whatsapp.png";


import {Navbar} from "./components/Navbar.js";
import {Header} from "./components/Header.js";
import {Section} from "./components/Section.js";
import {Image} from "./components/Image.js";
import {Carousel, CarouselImage} from './components/Carousel.js';
import {Footer} from "./components/Footer.js";

import './index.scss';

class App extends Component {
    render() {
        return (<>
            <Navbar
                logo={logo}
                brand="Terraplenagem EMA"
                items={{
                    "company": "A empresa",
                    "services": "Serviços",
                    "album": "Fotos",
                    "customers": "Clientes",
                    "contact": "Contato"
                }}
            />
            <Header
                title="Terraplenagem EMA"
                description="Serviços de terraplenagem e locação de equipamentos em Monte Mor e região"
                callToAction="Solicite um orçamento grátis!"
                callToActionDestination="contact">
            </Header>
            <div className="container-fluid mt-4">
                <Section
                    id="company"
                    title="A empresa"
                    description={<>
                        <p className="lead">A EMA realiza serviços de terraplenagem com qualidade e eficiência há mais de 30 anos.</p>
                        <p>Atuamos em Monte Mor e região. Nossa qualidade é comprovada através dos diversos tipos de serviços realizados para nossos clientes.</p>
                    </>
                    }
                    illustration={<Image image={imageCompany}></Image>}
                    orientation="left"
                ></Section>

                <Section
                    id="services"
                    title="Serviços"
                    description={
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="lead">Terraplenagem</p>
                                <ul>
                                    <li>Cortes e aterros</li>
                                    <li>Compensação de áreas para obtenção de platôs</li>
                                    <li>Transporte de materiais escavados</li>
                                    <li>Escavação em locais diversos</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <p className="lead">Locação</p>
                                <ul>
                                    <li>Escavadeiras hidráulicas</li>
                                    <li>Motoniveladora</li>
                                    <li>Retroescavadeiras</li>
                                    <li>Rolos compactadores</li>
                                    <li>Tratores agrícolas</li>
                                    <li>Valetadeiras</li>
                                    <li>Caminhões pipa</li>
                                    <li>Carretas prancha</li>
                                    <li>Caminhões basculantes</li>
                                </ul>
                            </div>
                        </div>
                    }
                    illustration={<Image image={imageServices}></Image>}
                    orientation="right"
                ></Section>

                <Section
                    id="album"
                    title="Fotos"
                    description={
                        <p className="lead">
                            Na EMA nos orgulhamos de nossos serviços e equipamentos. Veja ao lado alguns de nossos equipamento e as obras que realizamos.
                        </p>
                    }
                    orientation="left"
                    descriptionSize={4}
                    illustrationSize={8}
                    illustration={
                        <Carousel>
                            <CarouselImage image={imageAlbum1} active={true} />
                            <CarouselImage image={imageAlbum2} />
                            <CarouselImage image={imageAlbum3} />
                            <CarouselImage image={imageAlbum4} />
                            <CarouselImage image={imageAlbum5} />
                            <CarouselImage image={imageAlbum6} />
                        </Carousel>
                    }
                ></Section>

                <Section
                    id="customers"
                    title="Clientes"
                    description={<>
                        <p className="lead">Conheça alguns de nossos clientes:</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>Alesco</li>
                                    <li>SAAE indaiatuba</li>
                                    <li>Corpus Indaiatuba</li>
                                    <li>Asvotec Termoindustrial</li>
                                    <li>NHL Requalificadora</li>
                                    <li>Grupo CBP</li>
                                    <li>Posto BR de Monte Mor</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>Haras Larissa </li>
                                    <li>Pezão Bar</li>
                                    <li>Solueng Engenharia</li>
                                    <li>ECB </li>
                                    <li>VCV Engenharia</li>
                                    <li>John Deere</li>
                                </ul>
                            </div>
                        </div>
                    </>}
                    illustration={<Image image={imageCustomers}></Image>}
                    orientation="right"
                ></Section>

                <Section
                    id="contact"
                    title="Contato"
                    description={
                        <>
                            <p className="text-center mb-4">
                                <a className="btn btn-secondary d-flex align-items-center justify-content-center" href="https://wa.me/5519996056605">
                                    <img className="btn-icon" src={imageWhatsAppLogo} alt="" />
                                    Clique aqui e peça seu orçamento gratuito via WhatsApp!
                                </a>
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <address>
                                        Rua Siqueira Campos, 1276 <br />
                                        Centro, Monte Mor, SP <br />
                                        CEP: 13190-000 <br />
                                        Fone: <a href="tel:01938791730">(19) 3879-1730</a>
                                    </address>

                                    Contatos diretos:
                                    <ul>
                                        <li>Edison: <a href="tel:019996056605">(19) 99605-6605</a></li>
                                        <li>Edevaldo: <a href="tel:019996056602">(19) 99605-6602</a></li>
                                        <li>Esmeraldo: <a href="tel:019996056603">(19) 99605-6603</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <p>Atendemos as seguintes cidades:</p>
                                    <ul>
                                        <li>Monte Mor</li>
                                        <li>Campinas</li>
                                        <li>Indaiatuba</li>
                                        <li>Sumaré</li>
                                        <li>Americana</li>
                                        <li>Capivari</li>
                                        <li>Elias Fausto</li>
                                        <li>Itu</li>
                                    </ul>
                                    <p className="small">Se sua cidade é próxima de uma das cidades acima, provavelmente também conseguimos lhe atender!</p>
                                </div>
                            </div>

                        </>
                    }
                    orientation="left"
                    illustration={
                        <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.150382377993!2d-47.32549905716361!3d-22.958048343450827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8a56c6063192f%3A0xd8b0b92924107623!2sTerraplenagem+Ema!5e0!3m2!1spt-BR!2sbr!4v1547944574077" frameBorder="0" allowFullScreen></iframe>
                    }
                ></Section>

                <Footer year={2019} author="Terraplenagem EMA" />
            </div>
        </>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
