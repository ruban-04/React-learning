import React, { useState } from 'react'

function UseTask() {
    const [role,setTitle] = useState('')
    const [stage,setStage] = useState('')
    const [completed,setCompleted] = useState('')


    const handlerolechange = (e) =>{
      setTitle(e.target.value);
  };
  const handlestagechange = (e) =>{
      setStage(e.target.value);
  };
  const handlecompletedchange = (e) =>{
      setCompleted(e.target.value);
  };
  const handleReset = () =>{
      setTitle('');
      setStage('');
      setCompleted('');
  }


  const submit = (event) =>{
      event.preventDefault();
      if(!role||!stage||!completed){
          alert('All fields are Reqiured');
          return;
      }

      alert('Form Submitted Successfully!')
      console.log('Form Submitted:',{role,stage,completed});
      handleReset();

  }

      
// function submit(){
  
//   alert("Submit successfully");
  
// }

  return (
    <form className='fullForm' onSubmit={submit}>

        <h1 style={{textAlign:'center'}}  className='form'>React Form</h1>

        <div className='select'>
        <label For="Role">Role:</label>
        <select id="role" className='box' value={role} onChange={handlerolechange}>
          <option value="" selected mdisabled>Select a Role</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Full-Stack">Full-Stack</option>
          <option value="Data-Scientist">Data-Scientist</option>
          <option value="Web-Developer">Web-Developer</option>
          <option value="Web-Designer">Web-Designer</option>
             
        </select>
      </div>

      <div className='select'>
        <label For="Stage">Stage:</label>
        <select id="stage"  className='box' value={stage} onChange={handlestagechange}>
          <option value=""selected disabled>Select a Stage</option>
          <option value="Training">Training</option>
          <option value="Project">Project</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className='select'>
        <label For="Completed">Completed:</label>
        <select id="completed"  className='box' value={completed} onChange={handlecompletedchange}>
          <option value="" selected disabled>Completed</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
       <div className='submit'>
      <button type="submit" className='btn1'>Submit</button>
      </div>
    </form>
  )
}

export default UseTask 
