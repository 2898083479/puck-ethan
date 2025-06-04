import type { BasicProps } from "../../types";
import type { ComponentConfig } from "@measured/puck";
import type { FillHeightType } from "../../types";
import { Component } from "./component";

export interface FlexProps extends BasicProps {
  maxWidth: number;
  align: "left" | "center" | "right";
  gap: number;
  background: string;
  fillHeight: FillHeightType;
  padding: {
    x: number;
    y: number;
  };
}

export const Flex: ComponentConfig<Partial<FlexProps>> = {
  label: "Flex",
  fields: {},
  defaultProps: {},
  render: ({ puck: { isEditing }, ...props }) => {
    return <Component {...props} isEditing={isEditing} />;
  },
};
