import React from 'react';
import { addToDb } from '../utilities/fakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { id, name, image_link, price, brand, category } = props.cosmetic;
    const handlePurches = id => {
        console.log(id)
        addToDb(id);
    }
    return (
        <div className="cosmetic">
            <img width="200px" src={image_link} alt="" />
            <h2>Name: {name}</h2>
            <p>ID: {id}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => handlePurches(id)}>Buy Now</button>
        </div>
    );
};

export default Cosmetic;