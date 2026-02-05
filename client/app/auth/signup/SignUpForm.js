'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

import { useRequest } from '../../src/hooks/use-request';
 
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { doRequest, errors } = useRequest({
        url: '/v1/users',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: () => {
            router.push("/");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        doRequest();
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
        {errors}
        <div className="float-end">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
        </div>
    </form>
};
