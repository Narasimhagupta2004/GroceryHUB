import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Register.css';
const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
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
        
        if (data.password !== data.confirmpassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/register', data);
            setSuccess(response.data); // Set success message
            setData({ username: '', email: '', password: '', confirmpassword: '' }); // Clear form
            
            // Redirect to login page after successful registration
            setTimeout(() => {
                navigate('/login'); // Change '/login' to your actual login route
            }, 2000); // Optional delay before redirecting
        } catch (error) {
            setError(error.response ? error.response.data : "Registration failed!");
        }
    };

    return (
        <div>
        <div className="container">
            <center>
                <form onSubmit={submitHandler} className="form-container">
                    <h3>Registration Form</h3>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}
                    <input type='text' name='username' placeholder='Username' value={data.username} onChange={changeHandler} required /><br />
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={changeHandler} required /><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={changeHandler} required /><br />
                    <input type='password' name='confirmpassword' placeholder='Confirm Password' value={data.confirmpassword} onChange={changeHandler} required /><br />
                    <input type='submit' value="Register" />
                </form>
            </center>
        </div>
        </div>
    );
}

export default Register;