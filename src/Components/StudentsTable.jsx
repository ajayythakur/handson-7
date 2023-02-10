import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const StudentsTable = () => {
const studentArr=useSelector((state)=>state.student)
console.log(studentArr);
    return (
        <div>
            <table width='100%'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Edit Info</th>
                    </tr>

                </thead>
                <tbody>
                    {studentArr && studentArr.map((item, index) => {
                        // {console.log(studentArr)}
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td>
                                    <Link to='/editstudent' state={{ data: index }}>Edit</Link>
                                </td>
                            </tr>
                        )
})}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable