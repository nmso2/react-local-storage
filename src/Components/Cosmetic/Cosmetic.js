import React from 'react';
import { addToDb, deleteFromDb } from '../utilities/fakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { id, name, image_link, price, brand, category } = props.cosmetic;
    const handlePurches = id => {
        addToDb(id);
    }
    const handleRemove = id => {
        deleteFromDb(id);
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
            <button onClick={() => handleRemove(id)}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;