"use client";

import { type Config, Puck, FieldLabel } from "@measured/puck";
import "@measured/puck/puck.css";
import { CustomHeader } from "./_custom-header";
import { Input } from "@/components/ui/input";
import { Templates } from "@/template";

const config: Config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ fields }) => {
                return (
                    <div>
                        test
                    </div>
                )
            }
        },
        PhoneNumber: {
            fields: {
                title: {
                    type: "custom",
                    label: "Phone Number",
                    render: ({ value, field, onChange }) => (
                        <FieldLabel label={field.label as string}>
                            <Input
                                value={value}
                                onChange={onChange}
                            />
                        </FieldLabel>
                    )
                }
            },
            render: ({ fields }) => {
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
