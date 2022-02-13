import React from 'react';
import '../Css/Photo.css'
import Amination from './Amination';
function Photo(props) {
    return (
        <div className='photo1'>
            <div className='image'>
            <Amination image={props.image}></Amination>
                   </div>
            <div className='write' >
               <p>Certificate Verification</p>
                <h1 className='h1'> 
                Verify Every Game You Ever Played in under SDPF, India
                </h1>
                <div className='varification'>
                
                   <div>
                    <h3>Offline Verification</h3>
                    <br></br>
                    <br></br>
                    <h6>For offline Verification, write an official letter to SDPF, India Admin department or Send an official Mail to ur mail address 
                    <a href = "mailto: sdpfindia@gmail.com">sdpfindia@gmail.com</a>
                   </h6>

                   </div>
                   </div>

                  
                   <button type="button" class="btn btn-danger btn-lg">Verify</button>
           

              
            </div>
            
        </div>

    )
};
export default Photo;
