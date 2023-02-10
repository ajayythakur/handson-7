import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { stdEdit } from '../Features/studentSlice';

const EditStudent = () => {
    const location2=useLocation();
    const location = (location2.state.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const studentArr=useSelector((state)=>state.student)
    

    var tmpObj = { name: studentArr[location].name, age: studentArr[location].age, course: studentArr[location].course, batch: studentArr[location].batch };

    const ChangeHandler = (e) => {
        tmpObj = { ...tmpObj, [e.target.name]: e.target.value };

    }

    const submitHandler = () => {

        // context((obj) => {
            // obj[location] = tmpObj;
            dispatch(stdEdit({tmpObj,location}));
            alert(`Student ${(tmpObj).name}'s details is updated !`);
            // return obj;
        // })
        navigate('/Students')
    }

    const cancelEvent = () => {
        navigate('/Students');
    }
    return (
        <div className="studentContainer">
            <h1>Edit Student Details</h1><br />
            <div className="form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="inputbox" placeholder="Enter new name" name="name" onChange={ChangeHandler}></input><br />
                    <label htmlFor="age">Age</label>
                    <input type="number" className="inputbox ib2" placeholder="Enter new age" name="age" onChange={ChangeHandler}></input><br />

                    <label htmlFor="course">Course</label>
                    <input type="text" className="inputbox ib3" placeholder="Enter new course" name="course" onChange={ChangeHandler}></input><br />
                    <label htmlFor="Batch">Batch</label>
                    <input type="text" className="inputbox ib4" placeholder="Enter new batch" name="batch" onChange={ChangeHandler}></input>
                    <br /><br /><br />
                    <button onClick={cancelEvent} className="btns cancel">Cancel</button>
                    <button onClick={submitHandler} className="btns submit">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default EditStudent