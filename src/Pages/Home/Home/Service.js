import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} className="w-100" alt="" />
      <h2>{name}</h2>
      <p>Price:{price}</p>
      <p>{description}</p>
      <button onClick={() => navigateDetail(id)} className="btn btn-primary">
        {name}
      </button>
    </div>
  );
};

export default Service;
