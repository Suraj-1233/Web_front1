import React from 'react';
import { Card } from 'react-bootstrap';

import '../Css/Card.css';


function Card1(props) {
 
    return (
      <Card className='card1'>
      <Card.Img  src={props.p0} />
      <Card.Body>
        <Card.Title>{props.text1}</Card.Title>
       
      </Card.Body>
    </Card>
    )}
export default Card1;
