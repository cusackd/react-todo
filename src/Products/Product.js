import React, {useState} from 'react';

const Product = ({ product }) => {
  const [showActionItems, setActionItems] = useState(false);

  return (
    <div className=" col-sm-12 col-md-6 col-lg-4">
      <div className="product-item">
        <div
          className="image-container"
          onMouseEnter={() => setActionItems(true)}
          onMouseLeave={() => setActionItems(false)}
          style={{background: `url(${product.image}) no-repeat center center / contain`}}
        >
          {showActionItems && (
            <div className="action-items-container" >
              <div className="action-item" onClick={() => alert(`More Info - ${product.name}`)}>MORE INFO</div>
              <div className="action-item" onClick={() => alert(`Buy This- ${product.name}`)}>BUY THIS</div>
            </div>
          )}
        </div>
        <div className="description-container">
          <div className="product-name">{product.name}</div>
          <div className="product-pricing">Starting at {product.price}</div>
        </div>
      </div>
    </div>
  )
}

export default Product