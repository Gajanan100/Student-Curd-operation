
import React, { useState } from 'react'

const AddStudent = (props) => {
    const initstudent={id:null,name:'',collage_name:'',Specility:'',Source:''}
    const [student,setstudent]=useState(initstudent)
    
    const handelchange = (e)=>
    {
           const {name,value}=e.target;
           setstudent({...student,[name]:value});
    }
     const handleSubmit= (e)=>
    {
        e.preventDefault();
        if(student.name && student.collage_name )
        {
          handelchange(e,props.AddStudentss(student));
        }
    }
 
  return (
    <form className="row g-3">
        <input type="text" className="form-control" 
        placeholder="Enter Name" value={student.name}
        name ="name" onChange={handelchange}/>

        <input type="text" className="form-control" 
        placeholder="Enter Collage Name " value={student.collage_name}
        name ="collage_name" onChange={handelchange}/>

        <input type="text" className="form-control" 
        placeholder="Enter a Specility" value={student.Specility}
        name ="Specility" onChange={handelchange}/>

       <input type="text" className="form-control" 
        placeholder="Enter your source" value={student.Source}
        name ="Source" onChange={handelchange}/>
        
        <button onClick={handleSubmit}>Add student</button>
    </form>
  )
}

export default AddStudent