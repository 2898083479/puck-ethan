"use client"

import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const Client = () => {
    const router = useRouter();
    const { id } = useParams();
    return (
        <div>
            Client
            <div
                className="cursor-pointer"
                onClick={() => {
                    router.push(`/email/${id}/editor`);
                }}
            >
                Edit Email Template
            </div>
        </div>
    )
}

export default Client;