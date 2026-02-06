'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

import Form from './Form';
import { useRequest } from '../hooks/use-request';

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

    return <Form
        title="Sign Up"
        errors={errors}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
    />
};
