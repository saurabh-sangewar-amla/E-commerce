import React, { useState } from "react";
import { useNavigate } from "react-router";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, price, image }: ProductProps) => {
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  
  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: "16px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <img src={image} alt={title} width="100%" style={{ cursor: "pointer" }} onClick={() => navigate(`/products/${id}`)} />

      <h3 style={{ cursor: "pointer" }} onClick={() => navigate(`/products/${id}`)}>{title}</h3>
      <p>₹{price}</p>

      <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        style={{
          width: "60px",
          padding: "4px",
          marginRight: "10px",
        }}
      />

      <button
        style={{ padding: "6px 12px", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
