import React, { useEffect, useState } from "react";
import { getElectronics } from "../../services/service";
import Product from "../Product/Product";


const Electronics = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchElectronics = async () => {
            const data = await getElectronics();
            setItems(data);
        };
        fetchElectronics();
    }, []);

    return (
        <div>
            <h2>Electronics</h2>
            <div >
                {items.map(item => 
                    <Product key={item.id} product={item} /> 
                )}
            </div>
        </div>
    );
};

export default Electronics;
