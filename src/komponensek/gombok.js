import React, { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Oszlop from "./oszlop";
import Gomb from "./gomb";
import Gomb2 from "./gomb2";
import {evaluate} from "mathjs";

import './gombok.css';



const Gombok = props =>{
    const[szamok,setSzamok]=useState('');
 
    const kattintasra =(x)=>{
            setSzamok(szamok.concat(x))
            
    }
    const vegeredmeny = () =>{
        const szam = evaluate(szamok)
        setSzamok(szam.toString())
    }
    const torles = () =>{
        setSzamok('')
    }
    return (

            <Container style={{padding:'0px'}}>
                <h1 className="kijelzo" style={{padding:'0px',margin:'0px',height: '13vh', borderTopLeftRadius: '10px',borderTopRightRadius: '10px',paddingRight: '5px' }}>{szamok}</h1>
                <Row style={{width: '100%', margin:'0px',height: '9vh'}}>
                    <Oszlop><Gomb  kattintasra2={kattintasra}>{'7'}</Gomb></Oszlop>
                    <Oszlop><Gomb  kattintasra2={kattintasra}>{'8'}</Gomb></Oszlop>
                    <Oszlop><Gomb  kattintasra2={kattintasra}>{'9'}</Gomb></Oszlop>
                    <Oszlop><Gomb2 kattintasra2={kattintasra}>{'/'}</Gomb2></Oszlop>
                </Row>
                <Row style={{width: '100%', margin:'0px',height: '9vh'}}>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'4'}</Gomb></Oszlop>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'5'}</Gomb></Oszlop>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'6'}</Gomb></Oszlop>
                    <Oszlop><Gomb2 kattintasra2={kattintasra}>{'*'}</Gomb2></Oszlop>
                </Row>
                <Row style={{width: '100%', margin:'0px',height: '9vh'}}>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'1'}</Gomb></Oszlop>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'2'}</Gomb></Oszlop>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'3'}</Gomb></Oszlop>
                    <Oszlop><Gomb2 kattintasra2={kattintasra}>{'+'}</Gomb2></Oszlop>
                </Row>
                <Row style={{width: '100%', margin:'0px',height: '9vh'}}>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'.'}</Gomb></Oszlop>
                    <Oszlop><Gomb kattintasra2={kattintasra}>{'0'}</Gomb></Oszlop>
                    <Oszlop><button className="gomb" onClick={vegeredmeny}>=</button></Oszlop>
                    <Oszlop><Gomb2 kattintasra2={kattintasra}>{'-'}</Gomb2></Oszlop>
                </Row>
                <Row style={{width: '100%', margin:'0px',height: '9vh', backgroundColor:'rgb(206, 206, 194)'}}>
                    <button style={{borderBottomLeftRadius: '10px',borderBottomRightRadius: '10px'}} onClick={torles}>Törlés</button>
                </Row>
            </Container>          
 
    )
}

export default Gombok