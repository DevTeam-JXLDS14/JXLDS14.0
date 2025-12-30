import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Store.css';

function Store() {
  return (
    <div className="store-page">
      <div className="page-header">
        <h1>JXLDS 14.0 Merchandise</h1>
        <p>Get your JXLDS merch.</p>
      </div>

      <div className="container">
        <div className="opening-soon">
          <h2>Opening Soon...</h2>
          <p>Stay tuned for exciting reveal of our JXLDS merchandise!</p>
        </div>

        {/* <div className="store-intro">
          <p>
            Show your JXLDS spirit with exclusive merchandise! All proceeds support 
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
            To order, contact us at <strong>store@jxlds.com</strong> or call <strong>+94 XX XXX XXXX</strong>. 
            We accept cash and online transfers.
          </p>
          <p>
            Pickup available at the event or delivery within Sri Lanka (shipping charges apply).
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Store;
