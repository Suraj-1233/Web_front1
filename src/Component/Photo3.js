import React from 'react';
import '../Css/Photo.css'
function Photo3() {
    return (
        <div className='photo1'>
            <div className='image'>
            <img src={require('../img/v.png')}></img>
            </div>
            <div className='write' >
               <p>Certificate Verification</p>
                <h1 className='h1'> 
                Verify Every Game You Ever Played in under SDPF, India
                </h1>
                <div className='varification'>
                <img src={require('../img/Bihar.jpg')}></img>
                   <div>
                    <h3>Offline Verification</h3>
                    <br></br>
                    <br></br>
                    <h6>For offline Verification, write an official letter to SDPF, India Admin department or Send an official Mail to ur mail address sdpfindia@gmail.com.</h6>

                   </div>
                   </div>

                   <div className='varification'>
                <img src={require('../img/Bihar.jpg')}></img>
                   <div>
                    <h3>Offline Verification</h3>
                    <br></br>
                    <br></br>
                    <h6>For offline Verification, write an official letter to SDPF, India Admin department or Send an official Mail to ur mail address sdpfindia@gmail.com.</h6>

                   </div>
                   </div>
                   <button type="button" class="btn btn-danger">Danger</button>
           

              
            </div>
            
        </div>

    )
};
export default Photo3;
