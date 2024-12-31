import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterData() {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const apiUrl = "https://672863f4270bd0b975553389.mockapi.io/cruddata/RegisterForm";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const result = await response.json();
                    console.log("Fetched Data:", result);
                    setData(result);
                } else {
                    console.error("Failed to fetch data.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);
    const handleBackToRegister = () => {
        navigate('/RegisterForm'); 
      };

    return (
        <div>
            <h1 className='indata'>Registered Users</h1>
            {data.length === 0 ? (
                <p>No data found.</p>
            ) : (
                <div>
                    {data.map((item) => (
                        <div key={item.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
                            <p><strong>ID:</strong> {item.id}</p>
                            <p><strong>Firstname:</strong> {item.firstname}</p>
                            <p><strong>Lastname:</strong> {item.lastname}</p>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p><strong>Mobile:</strong> {item.mobile}</p>
                            <p><strong>Address:</strong> {item.address}</p>
                            <p><strong>State:</strong> {item.state}</p>
                            <p><strong>Country:</strong> {item.country}</p>
                        </div>
                    ))}
                </div>
            )}
                    <button className='button' onClick={handleBackToRegister}>Back to Register</button>

        </div>
    );
}

export default RegisterData;
