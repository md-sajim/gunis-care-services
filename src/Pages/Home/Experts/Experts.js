import React from "react";
import "./Experts.css";
import expert1 from "../../../Images/images/experts/expert-1.jpg";
import expert2 from "../../../Images/images/experts/expert-2.jpg";
import expert3 from "../../../Images/images/experts/expert-3.jpg";
import expert4 from "../../../Images/images/experts/expert-4.jpg";
import expert5 from "../../../Images/images/experts/expert-5.jpg";
import expert6 from "../../../Images/images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const experts = [
  { id: 1, name: "md abu taliv", img: expert1 },
  { id: 2, name: "md abdul motali", img: expert2 },
  { id: 3, name: "md abul khasam", img: expert3 },
  { id: 4, name: "md abdur rohomn", img: expert4 },
  { id: 5, name: "md abdul oiadud", img: expert5 },
  { id: 6, name: "md fozul korim", img: expert6 },
];

const Experts = () => {
  return (
    <div id="experts" className="container">
      <h1 className="expert-title my-5">Our expert</h1>
      <div className="row expert-container">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
