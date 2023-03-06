import React from 'react';

function ProductCard(props) {
const { product } = props; // destructuring the product object from the props
return (
<div className="product-card">
<img src={product.image} alt={product.name} />
<h2>{product.name}</h2>
<p>{product.description}</p>
<span className="price">{product.price}</span>
<button>Add to cart</button>
</div>
);
}

export default ProductCard;