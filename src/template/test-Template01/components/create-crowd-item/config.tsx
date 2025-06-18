import type { CreateCrowdProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";
import type { Fields } from "@measured/puck";

export const CreateCrowdConfig: Fields<CreateCrowdProps> = {
    ...getBasicFields(),
    title: {
        label: "Title",
        type: "text"
    },
    backBtn: {
        label: "Back Button Color",
        type: "text"
    },
    finBtn: {
        label: "Finish and Preview Button Color",
        type: "text"
    },
    typo: {
        label: "Font Typography",
        type: "custom",
        render: ({ value, onChange }) => {
            return (
                <Typography value={value} onChange={onChange} name="Font Typography" />
            )
        }
    }
};

export const DefaultProps: Required<CreateCrowdProps> = {
    hidden: "N",
    title: "立即为协康会发起筹款项目",
    backBtn: "#50BBE9",
    finBtn: "#17B9A3",
    typo: {
        size: "24",
        weight: "bold",
        font: "Inter",
        lineHeight: 1.5,
        spacing: 0,
        align: "left",
        decoration: "underline",
    }
};