import React, { useState } from 'react'

function UseTask() {
    const [role,setTitle] = useState('')
    const [stage,setStage] = useState('')
    const [completed,setCompleted] = useState('')

  return (
    <form className='fullForm'>

        <h1 style={{textAlign:'center'}}  className='form'>React Form</h1>

        <div className='select'>
        <label For="Role">Role:</label>
        <select id="role" className='box'>
          <option value="" selected disabled>Select a Role</option>
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
        <select id="stage"  className='box' >
          <option value=""selected disabled>Select a Stage</option>
          <option value="Training">Training</option>
          <option value="Project">Project</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className='select'>
        <label For="Completed">Completed:</label>
        <select id="completed"  className='box'>
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
