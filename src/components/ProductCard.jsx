import './ProductCard.css';

function ProductCard({ image, name, price, description }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">LKR {price}</p>
        <p className="product-description">{description}</p>
        <button className="product-button">Contact to Purchase</button>
      </div>
    </div>
  );
}

export default ProductCard;
