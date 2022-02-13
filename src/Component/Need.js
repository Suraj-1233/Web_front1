import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap';
import '../Css/Need.css';
import Bg from './Bg';



function Need(props) {
  return( <div className='Need1'>
        
        <Bg poster={props.poster}></Bg> 
                <h1>{props.t1}</h1>
      
        
  
  


  </div>
  )}

export default Need;
