import type { Fields } from "@measured/puck";
import type { InputProps } from ".";
import { getBasicFields } from "../../common";
import { WHInput } from "@/core/custom-fields/w-h-input";

export const ComponentFields: Fields<Partial<InputProps>> = {
  ...getBasicFields(),
  border_color: {
    type: "text",
    label: "Border Color",
  },
  placeholder: {
    type: "text",
    label: "Placeholder",
  },
  w_h: {
    type: "custom",
    render: ({ value, onChange }) => {
      return (
        <div>
          <WHInput name="W_h" value={value} onChange={onChange} />
        </div>
      );
    },
  },
};

export const DefaultProps: Required<InputProps> = {
  border_color: "#000000",
  placeholder: "Enter your text",
  w_h: {
    width: "400",
    height: "40",
  },
  hidden: "N",
};
