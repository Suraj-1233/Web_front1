import axios from 'axios';
import React,{useState} from 'react';



function Signin() {

   const [user,setUser] =useState({
     name: "",
     email: "",
     password:"",
   

   })
  




      
       const change = e =>{
        
  const{ name, value} =e.target;
    setUser({
      ...user,
      [name]: value
    })


       }

       const outdata = () =>{
        const { name,email,password}= user
        
        axios.post("http://localhost:2000/",user)
        .then(res => console.log(res))
       
  }





  return (
    <div className=''>
        <nav class="navbar navbar-light bg-light justify-content-between">
  
   
    <div>
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="name" value={user.name} onChange={change}></input>
    </div>
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="email" value={user.email}  onChange={change}></input>
     
    <input class="form-control mr-sm-2" type="text" placeholder="Search"  name="password"  value={user.password} onChange={change}></input>
    <input   class="form-control mr-sm-2" action='\' name='link' placeholder="image link" type="text" onChange={change} value={user.link} ></input>  
    

    
    <button class="btn  my-2 my-sm-0" type="submit" onClick={outdata}>Sign in</button>
    
</nav>
    </div>
  )
}

export default Signin;