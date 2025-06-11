import type { BasicProps } from "@/core/components/types";
import { DefaultProps, CrowdItemCardFields } from "./config";
import type { ComponentConfig, Fields } from "@measured/puck";
import { Component } from "./component";
import type { TypoProps } from "@/core";

export interface CrowdItemCardProps extends BasicProps {
    title: string;
    description: string;
    image: string;
    link: string;
    rounded: string;
    color: string;
    titleFont: TypoProps;
}

export const CrowdItemCard: ComponentConfig<CrowdItemCardProps> = {
    label: "Crowd Item Card",
    fields: CrowdItemCardFields as Fields<CrowdItemCardProps>,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    },
}