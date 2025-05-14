import React from "react";
import "./Product.css"; // Ensure custom styles are there too

type ProductProps = {
  title: string;
  description: string;
  price: number;
  isExpanded: boolean;
  onClick: () => void;
};

export const Product = ({
  title,
  description,
  price,
  isExpanded,
  onClick,
}: ProductProps) => {
  return (
    <div
      className={`product-tile ${isExpanded ? "expanded" : "collapsed"}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      {isExpanded ? (
        <>
          <p>{description}</p>
          <strong>Price:</strong> ₹{price}
        </>
      ) : (
        <div className="centered-placeholder">Click to view details</div>
      )}
    </div>
  );
};
