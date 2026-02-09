'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

import Form from './Form';
import { useAuth } from '../context/auth';
import { useRequest } from '../hooks/use-request';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useAuth();
    const router = useRouter();
    const { doRequest, errors } = useRequest({
        url: '/v1/login',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: (currentUser) => {
            setCurrentUser(currentUser);
            router.push("/");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        doRequest();
    };

    return <Form
        title="Login"
        errors={errors}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
    />
};
