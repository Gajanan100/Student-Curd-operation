import React, { useState } from 'react';

const EditStudent = (props) => {
    const initialStudent = props.currentstudent && props.currentstudent.name
        ? props.currentstudent
        : { name: '', collage_name: '', Specility: '', Source: '' };

    const [student, setStudent] = useState(initialStudent);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.name && student.collage_name && student.Specility && student.Source) {
            props.updateStudent(student);
        }
    };

    return (
        <form className="row mt-5 gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={student.name}
                onChange={handleChange}
            />
                        <input
                type="text"
                className="form-control"
                placeholder="Enter collage Name"
                name="collage_name"
                value={student.collage_name}
                onChange={handleChange}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Enter a Specility"
                name="Specility"
                value={student.Specility}
                onChange={handleChange}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Enter a Source"
                name="Source"
                value={student.Source}
                onChange={handleChange}
            />

            <button className="btn btn-info" onClick={handleSubmit}>
                Update student
            </button>
        </form>
    );
};

export default EditStudent;
