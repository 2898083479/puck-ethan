import type { InformationProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";
import type { Fields } from "@measured/puck";

export const InformationFields: Fields<InformationProps> = {
    ...getBasicFields(),
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

export const DefaultProps: Required<Partial<InformationProps>> = {
    hidden: "N",
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