import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            <img src={ props.imagem } />
            <div>
                <h4> { props.fixo }: </h4>
                <p> {props.valor} </p>
            </div>
        </div>
        
    )
}

export default CardPequeno;