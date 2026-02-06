import 'bootstrap/dist/css/bootstrap.min.css';

import { headers } from "next/headers";

import { AuthProvider } from './src/context/auth';
import Header from './src/components/Header';

async function getCurrentUser() {
    try {
        const incomingHeaders = await headers();
        const response = await fetch("http://auth-service:3000/v1/users/current", {
            headers: incomingHeaders
        });

        return await response.json();
    } catch (err) {
        return { currentUser: null };
    }
}

export default async function Layout({ children }) {
    const { currentUser } = await getCurrentUser();

    return (
        <html>
            <body>
                <AuthProvider currentUser={currentUser}>
                    <Header />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
