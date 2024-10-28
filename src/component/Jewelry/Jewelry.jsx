import React, { useEffect, useState } from "react";
import { getJewelry } from "../../services/service";
import Product  from "../Product/Product";

const Jewelry = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchJewelry = async () => {
            const data = await getJewelry();
            setItems(data);
        };
        fetchJewelry();
    }, []);

    return (
        <div>
            <h2>Jewelry</h2>
            <div >
                {items.map(item => 
                    <Product key={item.id} product={item} /> 
                )}
            </div>
        </div>
    );
};

export default Jewelry;

