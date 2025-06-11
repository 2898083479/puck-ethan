import type { Fields } from "@measured/puck";
import type { CrowdItemCardProps } from ".";
import { Typography } from "@/core/custom-fields/typography";
import type { TypoProps } from "@/core";
import { getBasicFields } from "@/core/components/common";

export const CrowdItemCardFields: Fields<Partial<CrowdItemCardProps>> = {
    ...getBasicFields(),
    title: {
        type: "text",
        label: "Text",
    },
    description: {
        type: "text",
        label: "Description",
    },
    image: {
        type: "text",
        label: "Image URL",
    },
    rounded: {
        type: "text",
        label: "Rounded",
    },
    color: {
        type: "radio",
        label: "Color",
        options: [
            {
                label: "NotAnd>1Month",
                value: "#50BBE9"
            },
            {
                label: "Yes",
                value: "#17B9A3"
            },
            {
                label: "NotAnd<1Month",
                value: "#FF9E58"
            }
        ]
    },
    titleFont: {
        type: "custom",
        label: "Title Font",
        render: ({ value, onChange }) => {
            return <Typography name="Title Font" value={value as TypoProps} onChange={onChange} />;
        },
    }
};

export const DefaultProps: Required<CrowdItemCardProps> = {
    title: "Text",
    description: "Description",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
    hidden: "N",
    rounded: "12px",
    color: "#50BBE9",
    titleFont: {
        size: "24",
        weight: "bold",
        font: "Inter",
        lineHeight: 1.5,
        spacing: 0,
        align: "left",
    },
};