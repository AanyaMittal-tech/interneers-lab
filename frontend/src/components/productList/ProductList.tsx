import { useState } from "react";
import { Product } from "../product/Product";

const dummyProducts = [
  { title: "Shoes", description: "Running shoes", price: 2500 },
  { title: "Watch", description: "Smart watch", price: 3000 },
];

export const ProductList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="product-list">
      {dummyProducts.map((prod, idx) => (
        <Product
          key={idx}
          {...prod}
          isExpanded={expandedIndex === idx}
          onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
};
