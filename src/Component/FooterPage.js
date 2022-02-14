import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

 import {
	
 	FooterLink,
	 } from "./FooterStyle";

import { SocialIcon } from 'react-social-icons';
import '../Css/Foter.css';
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer1">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Us</h5>
            <div >
						{/* <Heading>About Us</Heading> */}
						<h6>Youth & Sports Development Federation Of India (YSDF India) is a non-profit that aims to promote sports, social activities, and physical education among youth and push them towards great success in the sports field by providing them the best training and sports-related national and international opportunities. <br></br>
						<br></br>Our mission is to produce more gold medalist Indian Olympians because we are a country where 229 million youth lives and we are motivated to provide the best training and opportunities to get them incredible success in the sports field.
							<br></br>
							<a href="mailto: ysdfindiaorg@gmail.com 
">ysdfindiaorg@gmail.com 
</a>
							<br></br>
							mob: -
							<a href="callto:7490827193">7490827193</a>


						</h6>
					</div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Our Address</h5>
            <div >
            <div>
					
						<h6>
							Building: Sector 5,
							Village/Town: Harola,<br></br>
							Block: Noida,<br></br>
							Road/Street/Lane: Noida, City: Gautam Buddha Nagar,<br></br>
							District: Gautam Buddha Nagar,
							Pin 201301<br></br>
							State: Uttar Pradesh

						</h6>
					</div>


					

					
					</div>
          </MDBCol>

<MDBRow md="6">
<div className="footeicons">
				<FooterLink >
					<i className="fab fa-youtube">
						<span style={{ marginLeft: "100px" }}>
							<SocialIcon url="https://www.facebook.com/YSDF-India-105062135417577" />
						</span>
					</i>
				</FooterLink>
				<FooterLink >
					<i className="fab fa-youtube">
						<span style={{ marginLeft: "100px" }}>
							<SocialIcon url="https://www.instagram.com/ysdfindiaorg/" />
						</span>
					</i>
				</FooterLink>
				<FooterLink >
					<i className="fab fa-youtube">
						<span style={{ marginLeft: "100px" }}>
							<SocialIcon url="https://twitter.com/ysdfindiaorg" />
						</span>
					</i>
				</FooterLink>
				<FooterLink >
					<i className="fab fa-youtube">
						<span style={{ marginLeft: "100px" }}>
							<SocialIcon url="https://www.linkedin.com/company/ysdfindiaorg/about/" />
						</span>
					</i>
				</FooterLink>
			</div>
		

  </MDBRow>




        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
         <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a> YSDF </a>
        </MDBContainer> 
      </div>
    </MDBFooter>
  );
}

export default FooterPage;