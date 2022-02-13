import React from "react";
import styled, { keyframes } from "styled-components";
import FadeInUp from "@bit/formidablelabs.react-animations.fade-in-up";
import '../Css/Amination.css'



function Amination(props) { 

    const FadeInUpAnimation = keyframes`${FadeInUp}`;
    const FadeInUpDiv = styled.div`
      animation: infinite 7s ${FadeInUpAnimation}
     
    `;

  return(
    <FadeInUpDiv className="img1">

      <img src={props.image}/>
    </FadeInUpDiv>
  );
  
}

export default Amination;


