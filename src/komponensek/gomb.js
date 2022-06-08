
import React, { useState } from "react";
import './gomb.css'

const Gomb = props =>{
  

    return (
       <button onClick={()=>props.kattintasra2(props.children)} className="gomb" >
            {props.children}
        </button>


    )
}

export default Gomb;