import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { PreCrowdFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface PreCrowdProps extends Partial<BasicProps> {
    title: string;
    title2: string;
    list: {
        content: string;
    }[];
    titleColor: string;
    fontSize: string;
    primary: string;
    btnColor: string;
};

export const PreCrowd: ComponentConfig<PreCrowdProps> = {
    label: "Pre Crowd",
    fields: PreCrowdFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}