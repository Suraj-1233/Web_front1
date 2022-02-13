import React from "react";
// import styles from "../navbar/navbar.module.css";

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

export default function Nevbar1() {
return (
	<div style={{ display: 'block', width: 700, padding: 30 }}>
	
	<Navbar bg="dark" variant="dark">
		<Navbar.Brand href="#home">
		Test Company
		</Navbar.Brand>
        <Navbar.Brand href="#home">
		Test Company
		</Navbar.Brand>
        <Navbar.Brand href="#home">
		Test Company
		</Navbar.Brand>
	</Navbar>
	</div>
)
};

