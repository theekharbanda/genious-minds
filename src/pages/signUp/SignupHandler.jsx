import React, { useState } from 'react'
const regex = [/^[A-Z][a-z]{2,30}$/, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/];
const SignupHandler = () => {

    const [data, setData] = useState({ fName: "", lName: "", email: "", password: "" });
    const [ferror, setFerror] = useState({ fName: false, fNameError: "", lName: false, lNameError: "", email: false, emailError: "", password: false, passwordError: "" });

    const setBorder = (name, valid, text = " ") => {
        setFerror({ ...ferror, [name]: valid, [`${name}Error`]: text });
    }

    const handler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value.trim() });
        // alert("hiii")
        if (name === "fName") {
            if (value.length >= 2) {
                setBorder(name, false);

            }
            else {
                setBorder(name, true, "Name should contain atleast 2 characters");

            }
        }
        else if (name === "lname") {

        }
        else if (name === "email") {

        }
        else if (name === "password") {

        }
    }
    return { data, handler, ferror }
}

export default SignupHandler