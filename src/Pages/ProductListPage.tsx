import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router';
import ProductCard from '../Components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams(); // for optional ?category= query
  const selectedCategory  = searchParams.get("category") ?? "";

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.products.map((p: Product) => p.category))
        ) as string[];

        setCategories(uniqueCategories);
      });
  }, []);


 const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div>
      <h2>Shop by Category</h2>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat })}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: isActive ? "2px solid black" : "1px solid #ccc",
                background: isActive ? "#eee" : "#fff",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {cat}
            </button>
          );
        })}

        {selectedCategory && (
          <button
            onClick={() => setSearchParams({})}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid red",
              background: "#fff",
              cursor: "pointer",
              color: "red",
            }}
          >
            Clear Filter ✕
          </button>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {filteredProducts.map(p => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.title}
            price={p.price}
            image={p.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductListPage