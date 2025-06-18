import type { ThankCreateCrowdProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";
import type { Fields } from "@measured/puck";

export const ThankCreateCrowdFields: Fields<ThankCreateCrowdProps> = {
    ...getBasicFields,
    primary: {
        label: "Primary Color",
        type: "text"
    },
    typo: {
        label: "Font Typography",
        type: "custom",
        render: ({ value, onChange }) => {
            return (
                <Typography name="Font Typography" value={value} onChange={onChange} />
            )
        }
    },
    url: {
        label: "Personel Center URL",
        type: "text"
    }
};

export const DefaultProps: Required<ThankCreateCrowdProps> = {
    hidden: "N",
    primary: "#FF9E58",
    typo: {
        size: "24",
        weight: "bold",
        font: "Inter",
        lineHeight: 1,
        spacing: 0,
        align: "left",
        decoration: "underline",
    },
    url: "/personel/index"
}