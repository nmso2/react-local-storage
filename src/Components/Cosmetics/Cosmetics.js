import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])
    return (
        <div>
            <h3>Shop my Cosmetics</h3>
            <div className="cosmetics">
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}></Cosmetic>)
                }
            </div>
        </div>

    );
};

export default Cosmetics;