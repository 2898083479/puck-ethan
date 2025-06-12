import type { ButtonProps } from ".";
import type { Fields } from "@measured/puck";
import { getBasicFields } from "../../common";

export const ComponentFields: Fields<Partial<ButtonProps>> = {
  ...getBasicFields(),
  // other fileds
  label: {
    label: "Label",
    type: "text",
  },
  url: {
    label: "URL",
    type: "text",
  },
  primary: {
    label: "Primary",
    type: "text",
  },
  background: {
    label: "Background",
    type: "text",
  },
  width: {
    label: "Width",
    type: "text",
  },
  height: {
    label: "Height",
    type: "text",
  },
  fontSize: {
    label: "Font Size",
    type: "text",
  },
};

export const DefaultProps: Required<ButtonProps> = {
  hidden: "N",
  // other props
  label: "Button",
  url: "https://www.google.com/",
  primary: "#1D1D1D",
  background: "#FFFFFF",
  width: "720",
  height: "63",
  fontSize: "16",
};
