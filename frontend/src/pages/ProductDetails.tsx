import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Product as ProductType } from "../types/Product";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  const handleSave = () => {
    if (!product) return;
    axios
      .put(`/products/${id}/update/`, product)
      .then(() => alert("Updated successfully!"))
      .catch(() => setError("Update failed"));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-details">
      <h2>Edit Product</h2>
      <label>Title</label>
      <input
        value={product?.title}
        onChange={(e) => setProduct({ ...product!, title: e.target.value })}
      />

      <label>Description</label>
      <input
        value={product?.description}
        onChange={(e) =>
          setProduct({ ...product!, description: e.target.value })
        }
      />

      <label>Price</label>
      <input
        type="number"
        value={product?.price}
        onChange={(e) =>
          setProduct({ ...product!, price: Number(e.target.value) })
        }
      />

      <label>Category</label>
      <select
        value={product?.category}
        onChange={(e) => setProduct({ ...product!, category: e.target.value })}
      >
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
      </select>

      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
