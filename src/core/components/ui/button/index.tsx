import type { BasicProps } from "../../types";
import { ComponentConfig } from "@measured/puck";
import { ComponentFields } from "./config";
import { Component } from "./component";
import { DefaultProps } from "./config";

export interface ButtonProps extends BasicProps {}

export const Button: ComponentConfig<Partial<ButtonProps>> = {
  label: "Button",
  fields: ComponentFields,
  defaultProps: DefaultProps,
  render: ({ puck: { isEditing }, ...props }) => {
    return <Component {...props} isEditing={isEditing} />;
  },
};
