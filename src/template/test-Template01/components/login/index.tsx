import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { LoginFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface LoginProps extends BasicProps {
    title: string;
    primary: string;
    fontSize: string;
    signupUrl: string;
    forgotPasswordUrl: string;
};

export const Login: ComponentConfig<LoginProps> = {
    label: "Login",
    fields: LoginFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}