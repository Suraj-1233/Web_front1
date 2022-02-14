
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
			</Row>
			</Container> 
		</Box>
	);
};
export default Footer;
