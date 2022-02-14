import React from 'react';
import '../Css/Photo.css'
import Amination from './Amination';
import img from  '../img/reszie1.jpg'
function Photo(props) {
    return (
        <div className='photo1'>
            {/* <div className='image'>
            <Amination image={props.image}></Amination>
                   </div>  */}
         <div>
         <img src={img}/>
         </div>

            <div className='write' >
               <h1>Certificate Verification</h1>
                <h2 className='h1'> 
                Verify Every Game You Ever Played in under YSDF, India
                </h2>
                <div className='varification'>
                
                   <div>
                    <h3>Offline Verification</h3>
                    <br></br>
                    <br></br>
                    <h6>For offline Verification, write an official letter to YSDF, India Admin department or Send an official Mail to ur mail address 
                    <a href = "mailto: ysdfindiaorg@gmail.com .com">ysdfindiaorg@gmail.com </a>
                   </h6>

                   </div>
                   </div>

                  
                   <button type="button" class="btn btn-danger btn-lg">Verify</button>
           

              
            </div>
            
        </div>

    )
};
export default Photo;
