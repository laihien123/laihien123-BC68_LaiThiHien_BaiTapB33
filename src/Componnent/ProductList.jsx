import React from "react";

const ProductList = (props) => {
  return (
    <div className="item-shoes space-y-3">
      <div className="row">
        {props.arrSanPham.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button
                  type="primary"
                  onClick={() => props.handleShowModal(item)}
                >
                  Shoe details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
