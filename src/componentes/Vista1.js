import React from "react";

import './styles/style2.css';
import ReactDOM from 'react-dom';
import Mascotas from '../componentes/Mascotas';
import Rockye from '../componentes/Rockye';
import Pinky from '../componentes/Pinky';
import Pako from '../componentes/Pako';
import Quierenos from '../componentes/Quierenos';

import pata from '../imagenes/pawprint.png';
import imagen01 from '../imagenes/100520151431210480_1.jpg';
import imagen02 from '../imagenes/2019051618311861461.jpg';
import imagen03 from '../imagenes/Pinky-Gato-en-Adopcin-20191006203856.9223050015.jpg';
import imagen04 from '../imagenes/animal-3158652_640.jpg';
import fb from '../imagenes/facebook.png';
import tw from '../imagenes/twitter.png';
import tg from '../imagenes/telegram.png';


class Vista1 extends React.Component {
    inicio (e) {
        ReactDOM.render(<Mascotas />, document.getElementById('root'));
    };
    rk (e) {
        ReactDOM.render(<Rockye />, document.getElementById('root'));
    };
    pk (e) {
        ReactDOM.render(<Pinky />, document.getElementById('root'));
    };
    pko (e) {
        ReactDOM.render(<Pako />, document.getElementById('root'));
    };
    qns (e) {
        ReactDOM.render(<Quierenos />, document.getElementById('root'));
    }
    render(){
        return(
            <body>
                <div className="contenedor2">
                    <div className="barra">

                        <div className="menus">
                            <nav>
                                <ul>
                                    <li><a href="google.com">+</a><ul>
                                        <li><a href="google.com">Agregar Mascota</a></li>
                                        <li><a href="google.com">Ayuda</a></li>
                                        <li><a href="google.com">Donaciones</a></li>
                                    </ul></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="titulo">
                            <h1 className="segundo">ADOPTAME</h1>
                        </div>

                        <div className="logo">
                            <button onClick={this.inicio} type="Submit"><img className="patita" src={pata} alt="pata"/></button>
                        </div>

                    </div>

                    <div className="centro2">

                        <div className="centrado">

                            <div className="cincuenta">
                                <div className="cuadro1">
                                    <img className="imagen1" src={imagen01} alt="" />
                                    <button className="nombre" onClick={this.rk} >Rockye</button>
                                </div>
                
                                <div className="cuadro2">
                                    <img className="imagen2" src={imagen02} alt="" />
                                    <button className="nombre" onClick={this.pko}>Pako</button>
                                </div>
                            </div>

                            <div className="cincuenta">
                                <div className="cuadro3">
                                    <img className="imagen3" src={imagen03} alt="" />
                                    <button className="nombre" onClick={this.pk}>Pinky</button>
                                </div>

                                <div className="cuadro4">
                                    <img className="imagen4" src={imagen04} alt="" />
                                    <button className="nombre" onClick={this.qns} >Quierenos</button>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="final">
                        <a href="google.com"><img className="facebook" src={fb} alt="" /></a>
                        <a href="google.com"><img className="twitter" src={tw} alt="" /></a>
                        <a href="google.com"><img className="telegram" src={tg} alt="" /></a>
                    </div>

                    
                </div>

            </body>
        );
    }
}

export default Vista1;
