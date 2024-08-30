
import React, { useState } from 'react'
import StudentDetails from '../StudentData/StudentDetails';
import studentList from '../StudentData/StudentData';
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';

export default function Student ()  {
    const[students,setStudent]=useState(studentList)
    const AddStudentss=student =>
    {
        student.id=students.length+1;
        setStudent([...students,student]);
    }
    const deleteStudent =(id)=>{
        setStudent(students.filter(student=>student.id!==id));   
    }
    const [editing,setEditing]=useState(false)
    const initialStudent={id:null, name:'', collage_name:'', Specility:"",Source:""}
    const [currentStudent,setCurrentStudent]=
    useState(initialStudent);
    const EditStudentss = (id,student) =>
    {
        setEditing(true)
        setCurrentStudent(student)
            
    }
    const updateStudent=(newStudent) =>{
          setStudent(students.map(student=>(student.id === currentStudent.id?newStudent : student)))
    }

  return (
    <div className="container">
    <div className="row mt-5">
        {(editing ?
         <div className="col mt-4">
            <h2>Edit Student</h2>
            <EditStudent currentStudent={currentStudent}updateStudent={updateStudent}/>
            </div>
            :
        
        <div className="col-md-4">
            <h2>Add Student</h2>
            <AddStudent AddStudentss={AddStudentss} />
        </div>
     )}
        <div className="col-md-8">
            <h2>List of Student</h2>
           <StudentDetails students={students} deleteStudent={deleteStudent}
           EditStudentss={EditStudentss}/>
        </div>
    </div>
</div>
)
}


