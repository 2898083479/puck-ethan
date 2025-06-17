import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { LoginSuccessFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface LoginSuccessProps extends BasicProps {
    title: string;
    image: string;
    primary: string;
};

export const LoginSuccess: ComponentConfig<LoginSuccessProps> = {
    label: "Login Success",
    fields: LoginSuccessFields,
    defaultProps: DefaultProps,
    render: ({puck: {isEditing}, ...props}) => {
        return <Component isEditing={isEditing} {...props} />;
    }
};