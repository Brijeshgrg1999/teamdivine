import React from "react";
import '../App.css'
function Collab() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <label>Full Name  : </label>
        <input type='text' placeholder=" name  "/>

        <label> Your Email : </label>
        <input type='email' placeholder=" email "/>
        
        <labe> Your Message : </labe>
        <textarea
        rows="5"
        cols="40"
        placeholder="Enter your message here..."
      />
      <button  onClick={()=>handleSubmit}> submit </button>
    </form>
  );
}

export default Collab;