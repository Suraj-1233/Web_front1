import React, { useState, useEffect } from "react";
import '../Css/Slider.css';
import { CarouselWrapper } from "react-pretty-carousel";
import Need from "./Need";
import pic0 from '../img/patern/Dev Kumar, Advisor & Volunteer, YSDF India.png';
import pic1 from '../img/patern/Harshit Rajput, Advisor & Volunteer, YSDF India.png';
import pic2 from '../img/patern/Mr. Aman Kumar, National Media Advisor, YSDF India.png';
import pic3 from '../img/patern/Mr. Sumit Kumar, General Secretary, YSDF India.png';
import pic4 from '../img/patern/Mrs. Sanjo Kumari, Managing Director, YSDF India..png';
import { Image } from "react-image-and-background-image-fade"; //m
import 'bootstrap/dist/css/bootstrap.css';
import "../Css/Need.css"


export default function Slider(props) {
  const [items, setItems] = useState(5);

  useEffect(() => {
    if (window.innerWidth < 576 ) setItems(1);
     if (window.innerWidth > 576 && window.innerWidth < 767) setItems(2);
     if (window.innerWidth > 767 && window.innerWidth < 1042) setItems(3);
     if (window.innerWidth > 1042 && window.innerWidth < 1281) setItems(4);
    
     

    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) setItems(1);
     if (window.innerWidth > 576 && window.innerWidth < 700) setItems(2);
     if (window.innerWidth > 767 && window.innerWidth < 1042) setItems(3);
     if (window.innerWidth > 1042 && window.innerWidth < 1281) setItems(4);
     

    });
  }, []);

  return (
<div className="App">
     
       <CarouselWrapper items={items} mode="gallery" className="App1"> 
      
<div className="Mcard">
  <div>
          <Need poster={props.p0}  t1={props.t0} ></Need>

          {/* <Need t1={props.t0}></Need> */}
        
  </div>
</div>
<div className="Mcard">
  <div>
  <Need poster={props.p1} t1={props.t1} ></Need>
         
  </div>
</div>
<div className="Mcard">
  <div>
  <Need poster={props.p2}  t1={props.t2}></Need>
         
  </div>
</div>

<div className="Mcard">
  <div>
  <Need poster={props.p3}  t1={props.t3}></Need>
         
  </div>
</div>
<div className="Mcard">
  <div>
  <Need poster={props.p4}  t1={props.t4}></Need>
         
  </div>
</div>
       </CarouselWrapper> 
    </div>
  
  );
  }
