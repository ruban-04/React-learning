// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function RegisterForm() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmPassword: "",
//         address: "",
//         state: "",
//         country: "",
//     });
//     const [errorMessage, setErrorMessage] = useState(null);

//     const apiUrl = "https://672863f4270bd0b975553389.mockapi.io/cruddata/RegisterForm";

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             setErrorMessage("Passwords do not match.");
//             return;
//         }
//         try {
//             const response = await fetch(apiUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("Registration Successful:", data);
//                 setErrorMessage(null);
//                 navigate("/LoginForm");
//             } else {
//                 setErrorMessage("Registration failed. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setErrorMessage("An error occurred. Please try again later.");
//         }
//     };

//     const Loginform = () => {
//         navigate("/LoginForm");
//     };

//     return (
//         <form className="form2" onSubmit={handleSubmit}>
//             <h1 className="head2">Register Here</h1>
//             <div style={{ display: "flex" }}>
//                 <label className="label1">
//                     Firstname
//                     <input className="box2"  type="text"name="firstname"  placeholder="Firstname"value={formData.firstname} onChange={handleChange}/> 
//                      </label>
//                      <label className="label1"> 

//                      Lastname
//                     <input  className="box2" type="text"  name="lastname" placeholder="Lastname"value={formData.lastname} onChange={handleChange}     />
//                     </label>
//                      </div>
//                      <label className="label2">     
                      
//                      Email
//                 <input className="box3"type="email" name="email" placeholder="Email" value={formData.email}  onChange={handleChange}  />
//                 </label>
//                 <label className="label2"> 
                   
//                 Mobile Number
//                 <input className="box3" type="number" name="mobile" placeholder="Mobile Number" value={formData.mobile}onChange={handleChange} />
//                 </label>
//                 <label className="label2"> 
                   
//                 Password
//                 <input className="box3" name="password"    type="password" placeholder="Password" value={formData.password}onChange={handleChange} />
                     
//             </label>
//             <label className="label2"> 
                    
//             Confirm Password
//                 <input className="box3" type="password"  name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword}  onChange={handleChange}     />
//             </label>
//             <label className="label2">  

//                   Address
//                 <input className="box3"   type="text"name="address"   placeholder="Address"   value={formData.address} onChange={handleChange} />
//                 </label>

//                 <label className="label2" htmlFor="state">     
//                 State
//                 <select
//                     className="box4"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select State
//                     </option>
//                     <option value="Tamil Nadu">Tamil Nadu</option>
//                     <option value="Andhra Pradesh">Andhra Pradesh</option>
//                     <option value="Karnataka">Karnataka</option>
//                     <option value="Kerala">Kerala</option>
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Assam">Assam</option>
//                     <option value="New Delhi">New Delhi</option>
//                 </select>
//             </label>
//             <label className="label2" htmlFor="country">
//                 Country
//                 <select
//                     className="box4"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select Country
//                     </option>
//                     <option value="India">India</option>
//                     <option value="Sri Lanka">Sri Lanka</option>
//                     <option value="London">London</option>
//                     <option value="France">France</option>
//                     <option value="Latvia">Latvia</option>
//                     <option value="Canada">Canada</option>
//                     <option value="America">America</option>
//                 </select>
//             </label>
//             <div className="submit">
//                 <button className="button2" type="submit">
//                     Register
//                 </button>
//             </div>
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//             <p className="para1">
//                 Already have an Account?{" "}
//                 <a className="link" href="#" onClick={Loginform}>
//                     Login
//                 </a>
//             </p>
//         </form>
//     );
// }

// export default RegisterForm;
 
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
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    const apiUrl = "https://672863f4270bd0b975553389.mockapi.io/cruddata/RegisterForm";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const validationErrors = {};
        if (!formData.firstname.trim()) validationErrors.firstname = "Firstname is required*";
        if (!formData.lastname.trim()) validationErrors.lastname = "Lastname is required*";
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required*";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email format*";
        }
        if (!formData.mobile.trim()) {
            validationErrors.mobile = "Mobile number is required*";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            validationErrors.mobile = "Mobile number must be 10 digits*";
        }
        if (!formData.password.trim()) validationErrors.password = "Password is required*";
        if (!formData.confirmPassword.trim()) {
            validationErrors.confirmPassword = "Confirm Password is required*";
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match*";
        }
        if (!formData.address.trim()) validationErrors.address = "Address is required*";
        if (!formData.state.trim()) validationErrors.state = "State is required*";
        if (!formData.country.trim()) validationErrors.country = "Country is required*";

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
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
                navigate('/RegisterData')
                // navigate("/LoginForm");
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
                    />
                    {errors.firstname && <p style={{ color: "red",fontSize:13,paddingLeft:7,marginTop:0, }}>{errors.firstname}</p>}
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
                    />
                    {errors.lastname && <p style={{ color: "red",fontSize:13,paddingLeft:7,marginTop:0, }}>{errors.lastname}</p>}
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
                />
                {errors.email && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.email}</p>}
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
                />
                {errors.mobile && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.mobile}</p>}
            </label>
            <label className="label2">
                Password
                <input
                    className="box3"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.password}</p>}
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
                />
                {errors.confirmPassword && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.confirmPassword}</p>}
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
                {errors.address && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.address}</p>}
            </label>
            <label className="label2" htmlFor="state">
                State
                <select
                    className="box4"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
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
                {errors.state && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.state}</p>}
            </label>
            <label className="label2" htmlFor="country">
                Country
                <select
                    className="box4"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
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
                {errors.country && <p style={{ color: "red",fontSize:13,paddingLeft:20,marginTop:0, }}>{errors.country}</p>}
            </label>
            <div className="submit">
                <button className="button2" type="submit">
                    Register
                </button>
            </div>
           
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
