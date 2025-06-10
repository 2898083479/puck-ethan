import type { ComponentConfig } from "@measured/puck";
import type { BasicProps } from "../../types"
import { ProgressFields, DefaultProps } from "./config";
import { Component } from "./component";

export interface ProgressProps extends BasicProps {
    color: string;
    min: number;
    max: number;
}

export const Progress: ComponentConfig<Partial<ProgressProps>> = {
    label: "Progress",
    fields: ProgressFields,
    defaultProps: DefaultProps,
    render: ({puck: {isEditing}, ...props}) => {
        return (
            <div>
                <Component isEditing={isEditing} {...props} />
            </div>
        )
    }
}