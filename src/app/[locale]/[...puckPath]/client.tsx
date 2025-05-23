"use client";

import { NextSeo } from "next-seo";

export const Client = () => {
    return (
        <>
            <NextSeo
                title="Test Page"
                description="Test Description"
                openGraph={{
                    title: "Test Page",
                    description: "Test Description",
                    images: [
                        {
                            url: "https://example.com/image.jpg",
                        }
                    ]
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <div>
                <h1>Test Page</h1>
            </div>
        </>
    )
}