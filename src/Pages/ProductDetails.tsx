import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  images: string[];
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  console.log(id);
  

  useEffect(() => {
  if (!id) return;

  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Product:", data); // ✅ LOG DATA HERE
      setProduct(data);
    });
}, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px" }}
      />

      <p>{product.description}</p>
      <h2>Price: ₹{product.price}</h2>
    </div>
  );
};

export default ProductDetails;
