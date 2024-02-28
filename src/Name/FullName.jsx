import React, { useEffect, useState } from "react";
import Styles from "./FullName.module.css"

export default function FullName (){

    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleSubmit = () => {
        setSubmitted(true);
      };

    

    return (
        <div>
            <form>
                <h1 className={Styles.h1}>Full Name Display</h1>
                <div className={Styles.inpt}>
                Firstname:{" "}<input  type="text" value={firstName} onChange={handleFirstNameChange} required />
                </div>
                <div className={Styles.inpt}>
                Lastname:{" "}<input  type="text" value={lastName} onChange={handleLastNameChange} required/>
                </div>
                <button className={Styles.btn} onClick={handleSubmit}>Submit</button>
                {submitted && (
                <div className={Styles.opt}>Fullname: {firstName} {lastName}</div>)}
            </form>
            
        </div>
    )
    }