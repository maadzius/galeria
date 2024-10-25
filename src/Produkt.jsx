import React from 'react';
import './Produkt.css';
import serce from "./img/serce.png";
import kot from "./img/kot.png";
import piorun from "./img/piorun.png";
import kwiat from "./img/kwiat.png";
import latawiec from "./img/latawiec.png";
import drzewo from "./img/drzewo.png";
import gwiazda from "./img/gwiazda.png";
import slonce from "./img/slonce.png";

 
 
const products = [
    { id: 1, name: 'Ania', price: '15zł', image: serce, description: "serduszko"},
    { id: 2, name: 'Michał', price: '50zł', image: kot, description: "kotek"},
    { id: 3, name: 'Kuba', price: '60zł', image: piorun, description: "piorun" },
    { id: 4, name: 'Klaudia', price: '45zł', image: kwiat, description: "kwiatuszek" },
    { id: 5, name: 'Ola', price: '35zł', image: latawiec, description: "latawiec" },
    { id: 6, name: 'Marcin', price: '50zł', image: drzewo, description: "drzewko" },
    { id: 7, name: 'Arek', price: '40zł', image: gwiazda, description: "gwiazdka" },
    { id: 8, name: 'Bartek', price: '20zł', image: slonce, description: "słoneczko" },
];
 
const Produkt = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p style={{ color: 'white' }}>{product.description}</p>
                </div>
            ))}
        </div>
    );
};
 
 
export default Produkt;