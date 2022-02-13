import React from 'react';
import '../Css/Photo.css'
import Amination from './Amination';
function Photo2(props) {
    return (
        <div className='photo1'>
            
            <div className='write' >
               <p>From the desk of</p>
                <h1 className='h1'> 
                Mr. Abhijeet Singh
                </h1>
                <div className='varification'>
               
                   <div>
                    <h3>Offline Verification</h3>
                    <br></br>
                    <br></br>
                    <h6>For offline Verification, write an official letter to SDPF, India Admin department or Send an official Mail to ur mail address 
                        
                    </h6>

                   </div>
                   </div>

                   
                   <button type="button" class="btn btn-danger">Danger</button>
           

              
            </div>

            <div className='image'>
            <Amination image={props.image}></Amination>
            </div>
            
        </div>

    )
};
export default Photo2;
