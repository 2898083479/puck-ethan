import type { Fields } from "@measured/puck";
import type { LoginProps } from ".";
import { getBasicFields } from "@/core/components/common";

export const LoginFields: Fields<LoginProps> = {
    ...getBasicFields(),
    title: {
        type: "text",
        label: "Title"
    },
    primary: {
        type: "text",
        label: "Primary Color"
    },
    fontSize: {
        type: "text",
        label: "Font Size"
    },
    signupUrl: {
        type: "text",
        label: "Signup URL"
    },
    forgotPasswordUrl: {
        type: "text",
        label: "Forgot Password URL"
    }
};

export const DefaultProps: Required<LoginProps> = {
    hidden: "N",
    title: "登錄",
    primary: "#FF9E58",
    fontSize: "38",
    signupUrl: "/signup",
    forgotPasswordUrl: "/forgot-password"
};