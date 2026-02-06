import { headers } from "next/headers";

export default async function Page() {
    try {
        const incomingHeaders = await headers();
        const response = await fetch("http://auth-service:3000/v1/users/current", {
            headers: incomingHeaders
        });
        const data = await response.json();

        if (data.currentUser) {
            return (
                <h1 className="text-center mt-5">
                    You are signed in as {data.currentUser.email}
                </h1>
            );
        }

        return <h1 className="text-center mt-5">You are not signed in</h1>;
    } catch (err) {
        console.error(err);

        return <h1 className="text-center mt-5">You are not signed in</h1>;
    }
}
