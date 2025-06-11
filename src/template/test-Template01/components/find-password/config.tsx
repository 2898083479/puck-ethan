import type { Fields } from "@measured/puck";
import type { FindPasswordProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";

export const FindPasswordFields: Fields<FindPasswordProps> = {
    ...getBasicFields(),
    primary: {
        type: "text",
        label: "Primary",
    },
    font: {
        type: "custom",
        label: "Font",
        render: ({ value, onChange }) => {
            return <Typography name="FindPasswordFont" value={value} onChange={onChange} />
        }
    },
    language: {
        type: "select",
        label: "Language",
        options: [
            {
                label: "English",
                value: "en"
            },
            {
                label: "Traditional Chinese",
                value: "tc"
            },
            {
                label: "Simplified Chinese",
                value: "sc"
            }
        ]
    }
}

export const DefaultProps: Required<FindPasswordProps> = {
    hidden: "N",
    primary: "#FF9E58",
    font: {
        font: "Noto Sans TC",
        weight: "bold",
        size: "38",
        lineHeight: 1.5,
        spacing: 0,
        align: "center",
    },
    language: "tc"
}