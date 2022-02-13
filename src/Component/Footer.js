
import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyle";
import '../Css/Foter.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "green",
				textAlign: "center",
				marginTop: "-50px"
			}}>

			</h1>
			<Container>
				<Row>
					<div >
						<Heading>About Us</Heading>
						<h6>SDPF, India is a Non-Profit organization which give affiliation to State Association, each association with work under the Rule and Regulation of Federation by providing the validation certificate and the validity of membership is subject to renewal of Membership from time to time according to the performance of Individual and Team Work. The affiliated member is bound to comply with the rules, regulation and decision of SDPF - India
							<br></br>
							<a href="mailto: sdpfindia@gmail.com">sdpfindia@gmail.com</a>
							<br></br>
							mob: -
							<a href="callto:9699797996">7490827193</a>


						</h6>
					</div>




					<div>
						<Heading>Our Address</Heading>
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






					<Column>

                    
						<div class="input-group ">
							<input type="text" class="form-control  b1 " placeholder="Enter email" aria-label="Recipient's username" >
							</input>
							</div>
						
						<br>
						</br>
						<button class="btn btn-success border-rad b r" type="button" >Register Now</button>
						
					</Column>

				</Row>

			</Container>
			<hr></hr>
			<Heading>Social Media</Heading>
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
		</Box>
	);
};
export default Footer;
