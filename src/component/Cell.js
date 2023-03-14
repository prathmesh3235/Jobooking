import { hover } from "@testing-library/user-event/dist/hover";
import React, {useState} from "react";
import nike from "../assets/nike-black.jpg"

function Cell({shoe, image}) {
    const [hover, setHover] = useState(false);
    return (
      <div onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=> {setHover(false)}} className="cell">
        <img src={image} />
        <h3>{shoe.description}</h3>
        <p className="price">Price: {shoe.price}</p>
        <button style={{display: !hover ? "none" : ""}} className="btn">More Info</button>
      </div>
    );
  }
  
  export default Cell;
  