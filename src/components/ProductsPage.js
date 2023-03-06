import React, { useState } from 'react';
import ProductCard from './ProductCard'; // importing the ProductCard component
import productsData from '../data/productsData'; // importing the data for the products

function ProductsPage() {
const [products, setProducts] = useState(productsData); // initializing the products data

// function to handle the search input
function handleSearch(event) {
    const query = event.target.value.toLowerCase(); // converting the search query to lowercase
const filteredProducts = productsData.filter((product) =>
product.name.toLowerCase().includes(query)
); // filtering the products based on the search query
setProducts(filteredProducts); // updating the state with the filtered products
}

return (
<div>
<h1>Medicines</h1>
<input type="text" placeholder="Search for a medicine..." onChange={handleSearch} />
<div className="product-list">
{products.map((product) => (
<ProductCard key={product.id} product={product} />
))} {/* rendering the ProductCard component for each product */}
</div>
</div>
);
}

export default ProductsPage;