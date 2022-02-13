
import React ,{useEffect, useState} from 'react';

function Apicall() {
    const [posts ,setPosts]=useState([])
     
    useEffect(()=>{
  const url='http://localhost:4000/about';
      fetch(url).then(resp=>resp.json())
        
      .then (resp=>{ 

        setPosts(resp)
        console.log(resp)
      })
    },[])
   


  return(
       <>
         <h2>list of our data</h2>
         
            {
              posts.map(posts=><div><p>{  `${posts.id}. ${posts.title}`}</p></div>)
            }
            <h2>hwllo</h2>

  </>
  )}

export default Apicall;
