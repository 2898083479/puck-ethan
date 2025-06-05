"use client";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Error from "next/error";

export default function NotFound() {
    return <Error statusCode={404} />;
}