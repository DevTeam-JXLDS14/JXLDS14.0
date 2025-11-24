import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Store.css';

function Store() {
  return (
    <div className="store-page">
      <div className="page-header">
        <h1>JXLDS 14.0 Merchandise</h1>
        <p>Get your exclusive JXLDS gear</p>
      </div>

      <div className="container">
        <div className="store-intro">
          <p>
            Show your JXLDS spirit with our exclusive merchandise! All proceeds support
            our mission to develop the next generation of leaders.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>

        <div className="purchase-info">
          <h2>How to Purchase</h2>
          <p>
            To place an order, please contact us via email at <strong>store@jxlds.com</strong> or
            call <strong>+94 XX XXX XXXX</strong>. We accept cash payments and online transfers.
          </p>
          <p>
            Merchandise will be available for pickup at the event or can be shipped within Sri Lanka
            (shipping charges apply).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Store;
