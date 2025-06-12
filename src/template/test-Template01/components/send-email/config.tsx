import type { Fields } from "@measured/puck";
import type{ SendEmailProps } from ".";
import { getBasicFields } from "@/core/components/common";

export const SendEmailFields: Fields<SendEmailProps> = {
    ...getBasicFields(),
    fontSize: {
        type: "text",
        label: "Font Size"
    },
    primary: {
        type: "text",
        label: "Primary Color"
    }
};

export const DefaultProps: Required<SendEmailProps> = {
    hidden: "N",
    fontSize: "38",
    primary: "#1D1D1D"
};