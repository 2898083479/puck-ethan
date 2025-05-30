"use client"

import { LeftActions } from "./left-actions";
import { MiddleContent } from "./middle-content";
import { RightActions } from "./right-actions";

export const CustomHeader = () => {
    return (
        <header
            className="bg-white border-b border-gray-300 text-black relative max-w-screen"
            style={{ gridArea: "header" }}
        >
            <div className="flex gap-4 p-2 items-center h-16">
                <LeftActions />
                <MiddleContent />
                <RightActions />
            </div>
        </header>
    )
}