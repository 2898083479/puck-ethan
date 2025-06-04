"use client";
import { Render } from "@measured/puck";
import { Templates } from "@/template";
export const RenderClient = () => {
  return (
    <>
      <div>
        <h1>Test Page</h1>
        <Render config={Templates.testTemplate01.config} data={{}} />
      </div>
    </>
  );
};
