
import React from 'react'

const StudentDetails = (props) => {
  return (
    <div>
    <table className="table">
               <thead>
                   <th>NO</th>
                   <th>Name</th>
                   <th>Collage Name</th>
                   <th>Specility</th>
                   <th>Source</th>

               </thead>
               <tbody>
                       {
                           props.students.length> 0 ?
                           (props.students.map(stud =>{
                               const{id,name,collage_name,Specility,Source}=stud;
                               return(
                                       <tr>
                                       <th>{id}</th>
                                       <th>{name}</th>
                                       <th>{collage_name}</th>
                                       <th>{Specility}</th>
                                       <th>{Source}</th>
                                       <td>
                             <button className="btn btn-danger"
                         onClick={()=>props.deleteStudent(id)} >Delete</button>
                        <button className="btn btn-info"
                         onClick={()=>props.EditStudentss(id,stud)} >Edit</button>
                       
                         </td>
                                       </tr>
                               )
                           }))
                           :<p>False</p>
                       }
                   
               </tbody>
           </table>
</div>

  )
}

export default StudentDetails