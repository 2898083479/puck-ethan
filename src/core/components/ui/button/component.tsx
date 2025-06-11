"use client";

import { merge } from "ts-deepmerge";
import type { ButtonProps } from ".";
import { DefaultProps } from "./config";

interface Props extends Partial<ButtonProps> {
  isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
  //拿出全部的属性
  const { hidden } = merge(DefaultProps, props) as ButtonProps;

  if (hidden === "Y" && !isEditing) return <></>;

  return <div>Button</div>;
};
