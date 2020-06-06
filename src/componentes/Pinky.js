import React from "react";

import './styles/style3.css';
import ReactDOM from 'react-dom';
import Mascotas from '../componentes/Mascotas';
import Vista1 from '../componentes/Vista1';

import pata from '../imagenes/pawprint.png';
import fb from '../imagenes/facebook.png';
import tw from '../imagenes/twitter.png';
import tg from '../imagenes/telegram.png';


class Pinky extends React.Component {
    inicio (e) {
        ReactDOM.render(<Mascotas />, document.getElementById('root'));
    };
    vista (e){
        ReactDOM.render(<Vista1 />, document.getElementById('root'));
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

                    <div className="centro3">
                        <div className="superior3">
                            <h2 className="tercero" >PINKY</h2>
                        </div>

                        <div className="inferior3">
                            <p className="random">Suspendisse vitae pretium sem. Donec tristique cursus velit in gravida. Nullam efficitur ipsum id nulla tincidunt cursus. Suspendisse nulla nisi, porttitor ut libero non, tempor interdum lorem. Curabitur quis semper leo</p>
                        
                            <a className="boton2" href="google.com">Quiero Adoptar!</a>
                            <div className="separar">
                                <button className="volver2" onClick={this.vista} type="Submit">Volver</button>
                            </div>
                            
                        </div>

                        <div className="final2">
                            <a href="google.com"><img className="facebook2" src={fb} alt="" /></a>
                            <a href="google.com"><img className="twitter2" src={tw} alt="" /></a>
                            <a href="google.com"><img className="telegram2" src={tg} alt="" /></a>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Pinky;