import type { BasicProps } from "@/core/components/types";
import type { TypoProps } from "@/core";
import { DonationSuccessFields, DefaultProps } from "./config";
import { Component } from "./component";
import type { ComponentConfig } from "@measured/puck";

export interface DonationSuccessProps extends BasicProps {
    primary: string;
    font: TypoProps;
};

export const DonationSuccess: ComponentConfig<DonationSuccessProps> = {
    label: "Donation Success",
    fields: DonationSuccessFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
};