import type { BasicProps } from "@/core/components/types";
import type { TypoProps } from "@/core";
import { Component } from "./component";
import { ThankCreateCrowdFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface ThankCreateCrowdProps extends Partial<BasicProps> {
    typo: TypoProps;
    primary: string;
    url: string;
};

export const ThankCreateCrowd: ComponentConfig<ThankCreateCrowdProps> = {
    label: "Thank Create Crowd",
    fields: ThankCreateCrowdFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return (
            <Component isEditing={isEditing} {...props} />
        )
    }
}