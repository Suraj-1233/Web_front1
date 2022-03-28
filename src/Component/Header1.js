import axios from 'axios';
import React,{useState} from 'react';
import '../Css/Header.css';
import img from '../img/event/logo.png';

function Header1() {

   const [user,setUser] =useState({
     name: "",
     email: "",
     password:"",
    link: ""

   })
  




      
       const change = e =>{
        
  const{ name, value} =e.target;
    setUser({
      ...user,
      [name]: value
    })


       }

       const outdata = () =>{
        const { name,email,password,link}= user
        
        axios.post("http://localhost:2000/",user)
        .then(res => console.log(res))
       
  }





  return (
    <div className=''>
        <nav class="navbar navbar-light bg-light justify-content-between">
  {/* <img src={img} width="200"  alt='ha bhai'></img> */}
    <h1>enter palyer data</h1>
   
    <div>
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="name" value={user.name} onChange={change}></input>
    </div>
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="email" value={user.email}  onChange={change}></input>
     
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="password"  value={user.password} onChange={change}></input>
    <input   class="form-control mr-sm-2" action='\' name='link' placeholder="image link" type="text" onChange={change} value={user.link} ></input>  
    

    
    <button class="btn  my-2 my-sm-0" type="submit" onClick={outdata}>Verify Your Certificate</button>
    
</nav>
    </div>
  )
}

export default Header1;