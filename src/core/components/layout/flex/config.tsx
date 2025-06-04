import { getBasicFields } from "../../common";
import { ImageField } from "@/core/custom-fields/image";
import { PaddingInput } from "@/core/custom-fields/padding-input";
import type { Fields } from "@measured/puck";
import type { FlexProps } from ".";
import type { FillHeightType } from "../../types";

export const ComponentFields: Fields<Partial<FlexProps>> = {
  ...getBasicFields(),
  maxWidth: {
    label: "Max Width",
    type: "number",
    min: 0,
  },
  align: {
    label: "Align",
    type: "radio",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  gap: {
    label: "Gap",
    type: "number",
    min: 0,
  },
  background: {
    label: "Background",
    type: "custom",
    render: ({ id, value, onChange }) => {
      return (
        <ImageField
          id={id}
          name="background"
          value={value}
          onChange={onChange}
        />
      );
    },
  },
  fillHeight: {
    label: "Fill Height",
    type: "radio",
    options: [
      { label: "Y", value: "Yes" },
      { label: "N", value: "No" },
    ],
  },
  padding: {
    label: "Padding",
    type: "custom",
    render: ({ value, onChange }) => {
      return <PaddingInput name="padding" value={value} onChange={onChange} />;
    },
  },
} as const;

export const DefaultProps: Required<FlexProps> = {
  hidden: "N",
  maxWidth: 1200,
  align: "center",
  gap: 0,
  background: "",
  fillHeight: "N",
  padding: { x: 0, y: 0 },
};
