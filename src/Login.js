// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// const Login = () => {
//     const [data, setData] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate

//     const changeHandler = e => {
//         setData({ ...data, [e.target.name]: e.target.value });
//         setError(''); // Clear error on input change
//         setSuccess(''); // Clear success message on input change
//     };

//     const submitHandler = async e => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:5000/login', data);
//             setSuccess("Login successful!");
//             localStorage.setItem('token', response.data.token); // Store the token in local storage

//             // Redirect to the profile page or another route after successful login
//             setTimeout(() => {
//                 navigate('/components/Home'); // Change '/myprofile' to your desired route
//             }, 2000); // Optional delay before redirecting
//         } catch (error) {
//             setError(error.response ? error.response.data : "Login failed!");
//         }
//     };

//     return (
//         <div className="container">
//             <center>
//                 <form onSubmit={submitHandler} className="form-container">
//                     <h3>Login</h3>
//                     {error && <div className="error-message">{error}</div>}
//                     {success && <div className="success-message">{success}</div>}
//                     <input type='email' name='email' placeholder='Email' value={data.email} onChange={changeHandler} required /><br />
//                     <input type='password' name='password' placeholder='Password' value={data.password} onChange={changeHandler} required /><br />
//                     <input type='submit' value="Login" />
//                 </form>
//             </center>
//         </div>
//     );
// }

// export default Login;
// src/Login.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
        setSuccess(''); // Clear success message on input change
    };

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', data);
            setSuccess("Login successful!");
            localStorage.setItem('token', response.data.token); // Store the token in local storage

            // Redirect to the home page after successful login
            setTimeout(() => {
                navigate('/components/Home'); // Redirect to Home component
            }, 2000); // Optional delay before redirecting
        } catch (error) {
            setError(error.response ? error.response.data : "Login failed!");
        }
    };

    return (
        <div className="container">
            <center>
                <form onSubmit={submitHandler} className="form-container">
                    <h3>Login</h3>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={changeHandler} required /><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={changeHandler} required /><br />
                    <input type='submit' value="Login" />
                </form>
            </center>
        </div>
    );
}

export default Login;