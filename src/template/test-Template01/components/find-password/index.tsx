import type { BasicProps } from "@/core/components/types";
import type { TypoProps } from "@/core";
import { Component } from "./component";
import { FindPasswordFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface FindPasswordProps extends BasicProps {
    primary: string;
    font: TypoProps;
    language: string;
};

export const FindPassword: ComponentConfig<FindPasswordProps> = {
    label: "Find Password",
    fields: FindPasswordFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />
    }
}