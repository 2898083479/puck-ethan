"use client";
import { Render } from "@measured/puck";
import { Templates } from "@/template";
import { useParams } from "next/navigation";
export const RenderClient = () => {
    const { template } = useParams();
    const templateConfig = Templates[template as keyof typeof Templates];
    return (
        <>
            <div>
                <h1>Test Page</h1>
                <Render
                    config={templateConfig.config}
                    data={{}}
                />
            </div>
        </>
    )
}