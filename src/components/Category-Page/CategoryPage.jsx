import React from "react";
import ProductCard from "../ProductCard";
import "./CategoryPage.css";
import { menProducts, womenProducts, kidsProducts } from "../product";

function CategoryPage() {
  return (
    <div>
      {/* Men Category */}
      <h1 className="title">Men Category</h1>
      <div className="card-container">
        {menProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr />

      {/* Women Category */}
      <h1 className="title">Women Category</h1>
      <div className="card-container">
        {womenProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr />

      {/* Kids Category */}
      <h1 className="title">Kids Category</h1>
      <div className="card-container">
        {kidsProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
