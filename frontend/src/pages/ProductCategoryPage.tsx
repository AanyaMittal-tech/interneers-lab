import { useParams } from "react-router-dom";

export const ProductCategoryPage = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>Category: {category}</h2>
      {/* Reuse <ProductList /> with API filter logic */}
    </div>
  );
};
