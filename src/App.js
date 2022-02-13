import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from './Component/Form';
import { fadeIn } from 'react-animations';
import Affiliated from './Component/Affiliated';
import Need from './Component/Need';
import Photo from './Component/Photo';
import Photo2 from './Component/Photo2';
import Photo3 from './Component/Photo3';
import Animation from './Component/Amination';
import Amination from './Component/Amination';
import Bg from './Component/Bg'
import Back from './Component/Back';
import pic from './img/Bihar.jpg'
import pic0 from './img/patern/Dev Kumar, Advisor & Volunteer, YSDF India.png';
import pic1 from './img/patern/Harshit Rajput, Advisor & Volunteer, YSDF India.png';
import pic2 from './img/patern/Mr. Aman Kumar, National Media Advisor, YSDF India.png';
import pic3 from './img/patern/Mr. Sumit Kumar, General Secretary, YSDF India.png';
import pic4 from './img/patern/Mrs. Sanjo Kumari, Managing Director, YSDF India..png';
import logo0 from './img/patanar logo/Adobe_Post_20220130_0132530.3521280458976138.png';
import logo1 from './img/patanar logo/Adobe_Post_20220130_0134380.8188250937427551.png';
import logo2 from './img/patanar logo/Adobe_Post_20220130_0134470.6992027670863422.png';
import logo3 from './img/patanar logo/Adobe_Post_20220130_0135000.27335654064139503.png';
import logo4 from './img/patanar logo/Adobe_Post_20220130_0132530.3521280458976138.png';
import logo5 from './img/patanar logo/Adobe_Post_20220130_0135120.2657872827521598.png';
import logo6 from './img/patanar logo/Adobe_Post_20220130_0135250.18935245691440283 (1).png';
import logo7 from './img/patanar logo/Adobe_Post_20220130_0135250.18935245691440283.png';
import Slider from './Component/Slider';
import Card1 from './Component/Card1';
import event1 from './img/event/YSDF India 2022.png'
import Footer from './Component/Footer';
import run from './img/run.png';
import Header from './Component/Header';
import photo_image from './img/reszie1.jpg';
import option1 from './img/option/Competitive Events.png';
import option2 from './img/option/Lifetime Validation.png';
import option3 from './img/option/Online_Offline Verification.png';
import option4 from './img/option/Venue all over the World.png';
import option5 from './img/option/fit2.jpg';
import Apicall from './Component/Apicall';
function App() {
  return (
    <div className="App">  
 {/* <Apicall></Apicall> */}


       <Header></Header>
       <div className='card3'>
         
         <Card1 p0={option1} text1={'Competitive Events'} ></Card1>
        <Card1 p0={option2} text1={'Lifetime Validation'}></Card1>
        <Card1 p0={option3} text1={'Online/Offline Verification'}></Card1>
        <Card1 p0={option4} text1={'Venue all over the World'} ></Card1> 
       

      </div>  
       <Affiliated p1={event1}></Affiliated>
      <p> Checkout Our Facility</p>
      <h1>The Only Things You’ll Need </h1>

      {/* <Form></Form> */}


      <Photo image={photo_image}></Photo>
      <Back></Back>

      <Slider p0={logo0} p1={logo1} p2={logo2} p3={logo3} p4={logo4} ></Slider>
      <p> Members SDPF, India</p>
      <h1>Officials & Affiliated </h1>
 
      <Slider p0={pic0} t0={"Dev Kumar"} p1={pic1} t1={"Harshit Rajput"} p2={pic2} t2={"Mr. Aman Kumar"} p3={pic3} t3={"Mr. Sumit Kumar"} p4={pic4} t4={"Mrs. Sanjo Kumari"} ></Slider>


     <Footer></Footer>  
    
    </div>
  )
};

export default App;
