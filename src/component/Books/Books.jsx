import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/service";
import Product from "../Product/Product";

const Books = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await getBooks();
                setItems(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <div >
                {items.map(item =>
                    <Product key={item.id} product={item} />
                )}
            </div>
        </div>
    );
};

export default Books;

