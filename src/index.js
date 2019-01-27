import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap";

import imageCompany from "./images/company.jpg";
import imageC1 from "./images/c1.jpg";
import imageC2 from "./images/c2.jpg";
import imageC3 from "./images/c3.jpg";
import imageC4 from "./images/c4.jpg";

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
            <Navbar></Navbar>
            <main>
                <Header
                    title="Terraplenagem EMA"
                    description="A EMA realiza serviços de terraplenagem e locação de equipamentos
                    em Monte Mor e região."
                    callToAction="Solicite um orçamento grátis!"
                    callToActionDestination="contact"></Header>
            </main>
            <div className="container mt-5">
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
                    illustration={<Image image={imageC2}></Image>}
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
                            <CarouselImage image={imageC1} active={true} />
                            <CarouselImage image={imageC2} />
                            <CarouselImage image={imageC3} />
                            <CarouselImage image={imageC4} />
                        </Carousel>
                    }
                ></Section>

                <Section
                    id="customers"
                    title="Clientes"
                    description={<>
                        <p className="lead">Veja alguns de nossos clientes:</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>MRV Engenharia</li>
                                    <li>SGO Construções</li>
                                    <li>Hortolândia Incorporações</li>
                                    <li>Pavimentadora e Construtora São Pedro</li>
                                    <li>Agre Urbanismo</li>
                                    <li>SAAE Capivari</li>
                                    <li>Copagaz Distribuidora de Gás</li>
                                    <li>Prefeitura de Elias Fausto</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>Estância Árvore da Vida</li>
                                    <li>Cassol Pré-Fabricados</li>
                                    <li>Asvotec Termoindustrial</li>
                                    <li>BMC Engenharia</li>
                                    <li>NHL Requalificadora</li>
                                    <li>CBP Brasil Colchões</li>
                                    <li>Posto BR de Monte Mor</li>
                                    <li>Sinter Futura</li>
                                </ul>
                            </div>
                        </div>
                    </>}
                    illustration={<Image image={imageC4}></Image>}
                    orientation="right"
                ></Section>

                <Section
                    id="contact"
                    title="Contato"
                    description={
                        <>
                            <p className="lead">Peça seu orçamento gratuito!</p>

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
                                        <li>Esmeraldo: <a href="tel:019996056603">(19) 99605-6603</a></li>
                                        <li>Edison: <a href="tel:019996056605">(19) 99605-6605</a></li>
                                        <li>Edevaldo: <a href="tel:019996056602">(19) 99605-6602</a></li>
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
