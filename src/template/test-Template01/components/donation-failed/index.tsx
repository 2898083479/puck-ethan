import type { TypoProps } from "@/core";
import type { BasicProps } from "@/core/components/types";
import { Component } from "./component";
import { DonationFailedFields, DefaultProps } from "./config";
import type { ComponentConfig } from "@measured/puck";

export interface DonationFailedProps extends BasicProps {
    primary: string;
    font: TypoProps;
};

export const DonationFailed: ComponentConfig<DonationFailedProps> = {
    label: "Donation Failed",
    fields: DonationFailedFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}

