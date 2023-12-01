import React from "react";

interface FurnitureItemProps {
  imagePath: string;
  productType: string;
  productName: string;
  size: string;
  price: string;
}

const FurnitureItem: React.FC<FurnitureItemProps> = ({
  imagePath,
  productType,
  productName,
  size,
  price,
}) => {
  return (
    <div className="best-seller-inner">
        <div className="best-seller-img-wrapper">
          <img src={imagePath} alt={productName}  />
        </div>
      <span className="product-type">{productType}</span>
      <h3>{productName}</h3>
      <p>{size}</p>
      <span className="price">{price}</span>
    </div>
  );
};

export default FurnitureItem;
