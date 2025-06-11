import type { Fields } from "@measured/puck";
import type { DonationFailedProps } from ".";
import { getBasicFields } from "@/core/components/common";
import { Typography } from "@/core/custom-fields/typography";

export const DonationFailedFields: Fields<DonationFailedProps> = {
    ...getBasicFields(),
    primary: {
        type: "text",
        label: "Primary",
    },
    font: {
        type: "custom",
        label: "Font",
        render: ({ value, onChange }) => {
            return <Typography name="DonationFailedFont" value={value} onChange={onChange} />
        }
    }
};

export const DefaultProps: Required<DonationFailedProps> = {
    hidden: "N",
    primary: "#FF9E58",
    font: {
        font: "Inter",
        weight: "bold",
        size: "28",
        lineHeight: 1.5,
        spacing: 0,
        align: "center",
    },
};