import type { BasicProps } from "../../types";
import type { ComponentConfig } from "@measured/puck";
import { ComponentFields } from "./config";
import { Component } from "./component";
import { DefaultProps } from "./config";

export interface ButtonProps extends BasicProps {
  label: string;
  url: string;
  fontSize: string;
  primary: string;
  background: string;
  width: string;
  height: string;
}

export const Button: ComponentConfig<Partial<ButtonProps>> = {
  label: "Button",
  fields: ComponentFields,
  defaultProps: DefaultProps,
  render: ({ puck: { isEditing }, ...props }) => {
    return <Component {...props} isEditing={isEditing} />;
  },
};
