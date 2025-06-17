import type { CreateCrowdProps } from ".";
import { getBasicFields } from "@/core/components/common";
import type { Fields } from "@measured/puck";

export const CreateCrowdConfig: Fields<CreateCrowdProps> = {
    ...getBasicFields(),
    fontSize: {
        label: "Font Size",
        type: "text"
    },
    backBtn: {
        label: "Back Button Color",
        type: "text"
    },
    finBtn: {
        label: "Finish and Preview Button Color",
        type: "text"
    }
};

export const DefaultProps: Required<CreateCrowdProps> = {
    hidden: "N",
    fontSize: "30",
    backBtn: "#50BBE9",
    finBtn: "#17B9A3"
};