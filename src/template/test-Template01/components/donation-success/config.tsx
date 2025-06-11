import type { Fields } from "@measured/puck";
import type { DonationSuccessProps } from "./index";
import { getBasicFields } from "@/core/components/common";
import type { TypoProps } from "@/core";
import { Typography } from "@/core/custom-fields/typography";

export const DonationSuccessFields: Fields<DonationSuccessProps> = {
    ...getBasicFields(),
    primary: {
        type: "text",
        label: "Primary",
    },
    font: {
        type: "custom",
        label: "Font",
        render: ({ value, onChange }) => {
            return <Typography name="Font" value={value as TypoProps} onChange={onChange} />;
        }
    }
};

export const DefaultProps: Required<DonationSuccessProps> = {
    primary: "#FF9E58",
    font: {
        font: "Inter",
        weight: "bold",
        size: "43",
        lineHeight: 1.5,
        spacing: 0,
        align: "center",
    },
    hidden: "N",
}