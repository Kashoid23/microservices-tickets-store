'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../context/auth';
import { useRequest } from '../hooks/use-request';

export default function Logout() {
    const { setCurrentUser } = useAuth();
    const router = useRouter();
    const { doRequest } = useRequest({
        url: '/v1/logout',
        method: 'delete',
        onSuccess: () => {
            setCurrentUser(null);
            router.push("/");
        }
    });

    useEffect(() => {
        doRequest();
    }, []);

    return <h1 className="text-center mt-5">You have been logged out</h1>
};
