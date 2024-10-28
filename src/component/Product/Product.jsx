import React from 'react';
import styles from './Product.module.css'

const Product = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="styles.image" />
            <div className="styles.content">
                <h2>{product.title}</h2>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p>{product.description}</p>
                <div className="styles.rating">
                    <p><strong>Rating:</strong> {product.rating.rate} / 5</p>
                    <p><strong>Reviews:</strong> {product.rating.count}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
