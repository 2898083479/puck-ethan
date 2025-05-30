"use client"

import { useRouter } from "next/navigation";

const Test1 = () => {
    const router = useRouter();
    return (
        <div>
            Test1
            <button
                type="button"
                onClick={() => router.push("/email/1/editor")}
            >
                Go to Email 1
            </button>
        </div>
    )
}

export default Test1;