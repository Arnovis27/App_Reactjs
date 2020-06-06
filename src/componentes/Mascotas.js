import React from "react";

import './styles/style.css';
import ReactDOM from 'react-dom';
import Vista1 from '../componentes/Vista1';
import patas from '../imagenes/pawprints.png';



class Mascotas extends React.Component {
    handleClick (e) {
        ReactDOM.render(<Vista1 />, document.getElementById('root'));
    }

    render(){
        return(
            <body>
                <div className="contenedor">

                    <div className="superior">
                        <div className="importante">
                            <img className="patas" alt="patitas" src={patas}/>
                            <h1 className="primero" >ADOPTAME</h1>
                            <img className="patas" alt="patitas" src={patas}/>
                        
                        </div>

                        <hr className="linea" />

                    </div>

                    <div className="inferior">

                        <div className="descripcion">
                            <p className="parrafo">Para comprar un perro, basta con tener dinero. Pero para adoptar un animal, basta con tener corazón.</p>
                        </div>

                        <button className="boton" type="Submit"  onClick={ this.handleClick}>Entrar</button>

                    </div>

                </div>

            </body>
        );
    }
}

export default Mascotas;
