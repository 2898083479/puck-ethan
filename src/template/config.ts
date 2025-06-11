import { Columns, type ColumnsProps } from "@/core/components/layout/columns";
import { Flex, type FlexProps } from "@/core/components/layout/flex";
import { Space, type SpaceProps } from "@/core/components/layout/space";
import { Button, type ButtonProps } from "@/core/components/ui/button";
import { Input, type InputProps } from "@/core/components/ui/input";
import { Progress, type ProgressProps } from "@/core/components/ui/progress";

export type UIProps = {
  Button: ButtonProps;
  Input: InputProps;
  Progress: ProgressProps;
};

export type LayoutProps = {
  Columns: ColumnsProps;
  Flex: FlexProps;
  Space: SpaceProps;
};

export const LayoutComponents = ["Flex", "Columns", "Space"] as (
  | keyof UIProps
  | keyof LayoutProps
)[];

export const UIComponents = [
  "Button",
  "Input",
  "Textarea",
  "Select",
  "Checkbox",
  "Radio",
  "Switch",
  "Progress",
] as (keyof UIProps | keyof LayoutProps)[];

export const CommonComponents = {
  Button,
  Input,
  Space,
  Flex,
  Columns,
  Progress,
} as const;
