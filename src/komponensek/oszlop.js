import { divide } from "mathjs";
import { Col } from "react-bootstrap";
import React from "react";
import './oszlop.css';

const Oszlop = props =>{
    return (
        <Col className="oszlop">
            {props.children}
        </Col>
    )
}

export default Oszlop;