'use client'

import { useRouter } from 'next/navigation';

import { useRequest } from '../hooks/use-request';
import { useEffect } from 'react';

export default function Logout() {
    const router = useRouter();
    const { doRequest } = useRequest({
        url: '/v1/logout',
        method: 'delete',
        onSuccess: () => {
            router.push("/");
        }
    });

    useEffect(() => {
        doRequest();
    }, []);

    return <h1 className="text-center mt-5">You have been logged out</h1>
};
