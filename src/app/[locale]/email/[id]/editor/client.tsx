"use client";

import { type Config, Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { CustomHeader } from "./_custom-header";
import { Templates } from "@/template";

const config: Config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: () => {
        return <div>test</div>;
      },
    },
  },
};

export default function Client() {
  return (
    <Puck
      config={Templates.testTemplate01.config}
      data={{}}
      overrides={{
        header: () => <CustomHeader />,
      }}
    />
  );
}
