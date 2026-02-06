'use client'

import Link from 'next/link';

import { useAuth } from '../context/auth';

export default function Header() {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Link href="/auth/logout" className="btn btn-secondary">Logout</Link>
    ) : (
        <div>
            <Link href="/auth/login" className="btn btn-primary">Login</Link>
            <Link href="/auth/signup" className="btn btn-secondary ms-2">Sign Up</Link>
        </div>
    )
};
