import React from "react";

const Products = (props) => {

  return (
    <div className="col-md-3 my-1">
      <div
        className="card border-0 shadow-sm p-3 mb-5 bg-white rounded px-0 py-0"
        style={{ width: "17.5rem" }}
      >
        <a
          href="https://www.myntra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <img
            src={props.img}
            className="card-img-top"
            alt={props.product}
            style={{ width: "245", height: "326" }}
          />
          <div className="card-body text-wrap" style={{ height: "130px" }}>
            <h5 className="card-title">{props.brand}</h5>
            <h6 className="ard-subtitle mb-2 text-muted">{props.product}</h6>
            <p className="card-text">
              Rs. {props.price}{" "}
              <s style={{ color: "#FFD39F" }}>Rs. {props.mrp}</s> {props.dis}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
