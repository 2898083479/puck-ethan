import type { Fields } from "@measured/puck";
import type { BasicProps } from "./types";

export const getBasicFields = (): Fields<BasicProps> => {
    return {
        hidden: {
            type: "radio",
            label: "Hidden",
            options: [
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
            ],
        }
    }
}