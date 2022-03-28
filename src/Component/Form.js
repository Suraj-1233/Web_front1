import axios from 'axios';
import React,{useState} from 'react';


function Form() {

   const [user,setUser] =useState({
     name: "",
     
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
        const { name,email,password,link}= user
        
        axios.post("http://localhost:2000/",user)
        .then(res => console.log(res))
       
  }





  return (
    <div className=''>
        <nav class="navbar navbar-light bg-light justify-content-between">
  
   
    <div>
    <input class="form-control mr-sm-2" type="text" placeholder="NAME"  name="name" value={user.name} onChange={change}></input>
    </div>
   
     
    <input class="form-control mr-sm-2" type="text" placeholder="Aadar Name"  name="password"  value={user.password} onChange={change}></input>
   
    

    
    <button class="btn-alert  my-2 my-sm-0 " type="submit" onClick={outdata}>Verify Your Certificate</button>
    
</nav>
    </div>
  )
}

export default Form;