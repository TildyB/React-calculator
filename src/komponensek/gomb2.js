
import React, { useState } from "react";
import './gomb2.css'

const Gomb2 = props =>{
  

    return (
       <button onClick={()=>props.kattintasra2(props.children)} className="gomb2" >
            {props.children}
        </button>


    )
}

export default Gomb2;