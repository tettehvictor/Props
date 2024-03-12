import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Card = (props) => {
  return (
    <>
    <div class="card" style={{width: '18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.descrpi}</p>
    <p className="card-text">{props.price}</p>
   <div className="mb-3 d-flex justify-content-between mx-3">
   <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
   </div>
    <a href="#" class="btn btn-primary w-100"> <CiShoppingCart />Add to cart </a>
  </div>
</div>
    </>
  )
}

export default Card