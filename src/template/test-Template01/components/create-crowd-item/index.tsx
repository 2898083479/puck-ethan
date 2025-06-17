import type { BasicProps } from "@/core/components/types";
import { CreateCrowdConfig, DefaultProps } from "./config";
import { Component } from "./component";
import type { ComponentConfig } from "@measured/puck";

export interface CreateCrowdProps extends Partial<BasicProps> {
    fontSize: string;
    backBtn: string;
    finBtn: string;
};

export const CreateCrowd: ComponentConfig<CreateCrowdProps> = {
    label: "Create Crowd",
    fields: CreateCrowdConfig,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return (
            <Component isEditing={isEditing} {...props} />
        )
    }
};