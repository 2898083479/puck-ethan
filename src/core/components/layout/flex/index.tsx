import type { BasicProps } from "../../types";
import type { ComponentConfig } from "@measured/puck";
import type { FillHeightType } from "../../types";
import { Component } from "./component";
import { ComponentFields, DefaultProps } from "./config";

export interface FlexProps extends BasicProps {
  maxWidth: number;
  align: "left" | "center" | "right";
  gap: number;
  background: string;
  fillHeight: FillHeightType;
  flex: string;
  padding: {
    x: string;
    y: string;
  };
}

export const Flex: ComponentConfig<Partial<FlexProps>> = {
  label: "Flex",
  fields: ComponentFields,
  defaultProps: DefaultProps,
  render: ({ puck: { isEditing }, ...props }) => {
    return <Component {...props} isEditing={isEditing} />;
  },
};
