import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { SendEmailFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface SendEmailProps extends BasicProps {
    fontSize: string;
    primary: string;
};

export const SendEmail: ComponentConfig<SendEmailProps> = {
    label: "Send Email",
    fields: SendEmailFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}