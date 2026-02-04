'use client'

import { useState } from 'react'
import axios from 'axios'
 
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/v1/users', { email, password })
            .then(response => {
                setEmail("");
                setPassword("");
            })
            .catch(error => {
                setErrors(error.response.data.errors);
            });
    };

    return <form className="mt-5 w-25 mx-auto">
        <h1>Sign Up</h1>
        <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {errors.length > 0 && (
            <div className="alert alert-danger">
                <ul className="mb-0">
                    {errors.map((err, index) => <li key={index}>{err.message}</li>)}
                </ul>
            </div>
        )}
        <div className="float-end">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
        </div>
    </form>
};
