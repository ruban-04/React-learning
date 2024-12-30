// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// function RegisterForm() {

//     const navigate = useNavigate();
//     const Loginform = () =>{
//         navigate("/LoginForm")
//     }
//   return (
//     <form className='form2'>
//     <h1 className='head2'>Register Here</h1>
//     <div style={{display:'flex'}}>
//       <label className='label1'>
//       Firstname
//         <input className='box2'  type="text" name="name" placeholder="Firstname"/>
//         </label>
//       <label  className='label1'>
//         Lastname
//         <input  className='box2' type="text" name="lastname" placeholder="Lastname"/>
//       </label>
//       </div>
//       <label  className='label2'>
//       Email
//         <input  className='box3' type="text" name="Email" placeholder="Email"/>
//       </label>
//       <br/>
//        <label  className='label2'>
//        Mobile Number
//         <input  className='box3' type="number" name="phno" placeholder="Mobile Number"/>
//       </label>
//       <label className='label2'>
//       Password
//         <input className='box3'  type="password" name="password" placeholder="Password"/>
//         </label>
//       <label  className='label2'>
//       Confirm Password
//         <input  className='box3' type="password" name="cpassword" placeholder="Confirm Password"/>
//       </label>
//       <label  className='label2'>
//      Address
//         <input  className='box3' type="text" name="Address" placeholder="Address"/>
//       </label>
//       <label className='label2' For="Title">State </label>
//         <select className='box4'>
//           <option value="" selected disabled>Select State</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Andhra Pradhesh">Andhra Pradhesh</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Uthra Pradhesh">Uthra Pradhesh</option>
//           <option value="Assam">Assam</option>
//           <option value="New Delhi">New Delhi</option>
//         </select>

//         <label className='label2'  For="Title">Country</label>
//         <select className='box4'>
//           <option value="" selected disabled>Select Country</option>
//           <option value="HTML5">India</option>
//           <option value="CSS">Sri Lanka</option>
//           <option value="BootStrap">London</option>
//           <option value="Javascript">France</option>
//           <option value="React">Latvia</option>
//           <option value="Java">Canada</option>
//           <option value="Python">America</option>
//         </select>



//       <div className='submit'>
//       <button className='button2' type="submit">Rigister</button>
//       </div>
//       <p className='para1'>Already have an Account?<a className='link' href=''  onClick={Loginform}>Login</a></p>
//     </form>
//   )
// }

// export default RegisterForm

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        address: "",
        state: "",
        country: "",
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const apiUrl = "https://672863f4270bd0b975553389.mockapi.io/cruddata/RegisterForm";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Registration Successful:", data);
                setErrorMessage(null);
                navigate("/LoginForm");
            } else {
                setErrorMessage("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const Loginform = () => {
        navigate("/LoginForm");
    };

    return (
        <form className="form2" onSubmit={handleSubmit}>
            <h1 className="head2">Register Here</h1>
            <div style={{ display: "flex" }}>
                <label className="label1">
                    Firstname
                    <input
                        className="box2"
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="label1">
                    Lastname
                    <input
                        className="box2"
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <label className="label2">
                Email
                <input
                    className="box3"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="label2">
                Mobile Number
                <input
                    className="box3"
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="label2">
                Password
                <input
                    className="box3"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="label2">
                Confirm Password
                <input
                    className="box3"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="label2">
                Address
                <input
                    className="box3"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </label>
            <label className="label2" htmlFor="state">
                State
                <select
                    className="box4"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select State
                    </option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="New Delhi">New Delhi</option>
                </select>
            </label>
            <label className="label2" htmlFor="country">
                Country
                <select
                    className="box4"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select Country
                    </option>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="London">London</option>
                    <option value="France">France</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Canada">Canada</option>
                    <option value="America">America</option>
                </select>
            </label>
            <div className="submit">
                <button className="button2" type="submit">
                    Register
                </button>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <p className="para1">
                Already have an Account?{" "}
                <a className="link" href="#" onClick={Loginform}>
                    Login
                </a>
            </p>
        </form>
    );
}

export default RegisterForm;

