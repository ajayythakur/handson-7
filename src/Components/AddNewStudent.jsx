import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stdAdd } from "../Features/studentSlice";


const AddNewStudent = () => {
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // const captcha= function generateString(length) {
    //     let result = ' ';
    //     const charactersLength = characters.length;
    //     for ( let i = 0; i < length; i++ ) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }

    //     return result;
    // };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    var tmpObj = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const ChangeHandler = (e) => {
        tmpObj = { ...tmpObj, [e.target.name]: e.target.value };
    }

    const submitHandler = (e) => {
        dispatch(stdAdd(tmpObj))
        alert(`New Student ${(tmpObj).name} is Added`);
        navigate('/Students');
        console.log("Student Added")
    }

    const cancelEvent = () => {
        navigate('/Students');
    }

    return (
        <div className="studentContainer">
            <h1>Add New Student</h1><br />
            <div className="form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="inputbox" placeholder="Enter Student Name" name="name" onChange={ChangeHandler}></input><br />
                    <label htmlFor="age">Age</label>
                    <input type="number" className="inputbox ib2" placeholder="Enter Student Age" name="age" onChange={ChangeHandler}></input><br />

                    <label htmlFor="course">Course</label>
                    <input type="text" className="inputbox ib3" placeholder="Enter Student's Course" name="course" onChange={ChangeHandler}></input><br />
                    <label htmlFor="Batch">Batch</label>
                    <input type="text" className="inputbox ib4" placeholder="Enter Student's Batch" name="batch" onChange={ChangeHandler}></input>
                    <br /><br /><br />
                    <button onClick={cancelEvent} className="btns cancel">Cancel</button>
                    <button onClick={submitHandler} className="btns submit">Submit</button>

                </form>
            </div>

        </div>
    );
};

export default AddNewStudent;
