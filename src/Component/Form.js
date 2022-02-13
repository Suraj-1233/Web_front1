import React from 'react';
import '../Css/Form.css'

function Form() {

  return (

    <div className='Formcss'>
          <h1>Enquiry</h1>
      <div className="mb-3" >
        <label for="exampleFormControlInput1" className="form-label">Name  </label>
        <br></br>
       
       <input type="name" class="form-control" placeholder="Enter your name"></input>
      </div>
      
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address </label>
        <br></br>
        <input type="email" class="form-control" placeholder="Enter your Email"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" > Mobile </label>
        <br></br>
        <input type="number" class="form-control" placeholder="Enter your Mobile Number"> </input>
      </div>
      <div classNames="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
        <br></br>
        <textarea class="form-control"  rows="3" placeholder='what you want say'></textarea>
      </div>
      <br></br>
      <button className="btn btn-success btn-lg">summit</button>
    </div>
  )
}

export default Form;
