'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAuth } from '../context/auth';

export default function Header() {
    const { currentUser } = useAuth();
    const currentPathname = usePathname();

    return currentUser ? (
        <Link href="/auth/logout" className="btn btn-secondary">Logout</Link>
    ) : (
        <div>
            {currentPathname === "/auth/login" ? (
                <Link href="/auth/signup" className="btn btn-primary">Sign Up</Link>
            ) : currentPathname === "/auth/signup" ? (
                <Link href="/auth/login" className="btn btn-primary">Login</Link>
            ) : (
                <>
                    <Link href="/auth/login" className="btn btn-primary">Login</Link>
                    <Link href="/auth/signup" className="btn btn-primary ms-2">Sign Up</Link>
                </>
            )}
        </div>
    )
};
