import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Formdata() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://672863f4270bd0b975553389.mockapi.io/cruddata/LoginForm'
        );
        if (response.ok) {
          const result = await response.json();
          setData(result); 
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


//   const navigate =useNavigate();
  const handleBackToLogin = () => {
    navigate('/LoginForm'); 
  };
  

  return (
    <div>
      <h1 className='indata'>Login Data</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>Username:</strong> {item.username} <br />
              <strong>Password:</strong> {item.password}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
        <button className='button' onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
}

export default Formdata;

