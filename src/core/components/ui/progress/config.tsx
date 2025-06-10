import type { Fields } from "@measured/puck";
import type { ProgressProps } from ".";
import { getBasicFields } from "../../common";

export const ProgressFields: Fields<Partial<ProgressProps>> = {
    ...getBasicFields(),
    color: {
        type: "text",
        label: "Progress Color",
    },
    min: {
        type: "number",
        label: "Min Value",
    },
    max: {
        type: "number",
        label: "Max Value",
    }
};

export const DefaultProps: Required<ProgressProps> = {
    hidden: "N",
    color: "#0C7FDA",
    min: 60,
    max: 100
};