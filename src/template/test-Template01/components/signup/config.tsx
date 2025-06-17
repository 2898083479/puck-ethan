import type { Fields } from "@measured/puck";
import type { SignupProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";

export const SignupFields: Fields<SignupProps> = {
    ...getBasicFields(),
    typo: {
        type: "custom",
        label: "Typography",
        render: ({ value, onChange }) => {
            return <Typography value={value} onChange={onChange} name="typo" />
        }
    },
    titleColor: {
        type: "text",
        label: "Title Color"
    },
    backBtn: {
        type: "text",
        label: "Back Button"
    },
    nextBtn: {
        type: "text",
        label: "Next Button"
    }
};

export const DefaultProps: Required<SignupProps> = {
    hidden: "N",
    typo: {
        font: "Inter",
        weight: "400",
        size: "16px",
        lineHeight: 1.5,
        spacing: 0,
        align: "left",
        decoration: "none"
    },
    titleColor: "#FFDE59",
    backBtn: "#50BBE9",
    nextBtn: "#17B9A3"
};