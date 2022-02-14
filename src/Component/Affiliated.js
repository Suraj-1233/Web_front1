import React from 'react';
import '../Css/Affiliated.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function Affiliated(props) {
  return (

    <div className='affiliated'>

      

      
  

      <Carousel>
        
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={props.p1}
            alt="Image Two"
          />
          </Carousel.Item>
        
       
       
       
        
       
      
       
        
        

      </Carousel>
    </div>
      
    

  )
};

export default Affiliated;

