import type { LoginSuccessProps } from ".";
import { getBasicFields } from "@/core/components/common";
import type { Fields } from "@measured/puck";

export const LoginSuccessFields: Fields<LoginSuccessProps> = {
    ...getBasicFields(),
    title: {
        type: "text",
        label: "Title"
    },
    image: {
        type: "text",
        label: "Image"
    },
    primary: {
        type: "text",
        label: "Primary"
    }
};

export const DefaultProps: Required<LoginSuccessProps> = {
    hidden: "N",
    title: "登錄成功",
    image: "/images/donation-failed.png",
    primary: "#000000"
}