import type { ButtonProps } from ".";
import type { Fields } from "@measured/puck";
import { getBasicFields } from "../../common";

export const ComponentFields: Fields<Partial<ButtonProps>> = {
    ...getBasicFields(),
    // other fileds

}

export const DefaultProps: Required<ButtonProps> = {
    hidden: "N",
    // other props
}