import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const product = {
    name: "Wireless Headphones",
    price: 2999,
    originalPrice: 4999,
    rating: 4.6,
    reviews: 1200,
    description:
      "Premium sound quality headphones with 40-hour battery life and active noise cancellation.",
    features: [
      "40-hour battery",
      "Bluetooth 5.3",
      "Noise cancellation",
      "Fast charging",
      "1-year warranty",
    ],
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt="headphones"
          width="400"
        />

        <div>
          <h1>{product.name}</h1>
          <p>⭐ {product.rating} ({product.reviews} reviews)</p>

          <h2>₹{product.price}</h2>
          <p>
            <del>₹{product.originalPrice}</del> 40% OFF
          </p>

          <p>{product.description}</p>

          <h3>Features</h3>
          <ul>
            {product.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>🛒 Cart Items: {cartCount}</p>

          <button onClick={() => setCartCount(cartCount + 1)}>
            Add to Cart
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => alert("Proceeding to checkout")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}