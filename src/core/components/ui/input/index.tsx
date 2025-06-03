import type { BasicProps } from "../../types";
import type { ComponentConfig } from "@measured/puck";
import { ComponentFields, DefaultProps } from "./config";
import { Component } from "./component";

export interface InputProps extends BasicProps {
    border_color: string;
    placeholder: string;
    w_h: {
        width: string;
        height: string;
    }
}

export const Input: ComponentConfig<Partial<InputProps>> = {
    label: "Input",
    fields: ComponentFields,
    defaultProps: DefaultProps,
    render: (props) => {
        return (
            <div>
                <Component {...props} />
            </div>
        )
    }
}