import type { TypoProps } from "@/core";
import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { SignupFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface SignupProps extends BasicProps {
    typo: TypoProps;
    titleColor: string;
    backBtn: string;
    nextBtn: string;
};

export const Signup: ComponentConfig<SignupProps> = {
    label: "SignUp",
    fields: SignupFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}