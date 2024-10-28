import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/service";

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
            <div>
                {items.length > 0 ? (
                    items.map(item => 
                        <h1 key={item.id}>{item.name}</h1>  // הצגת שם הספר
                    )
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    );
};

export default Books;

