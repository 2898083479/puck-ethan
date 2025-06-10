import type { TestComponentProps } from "./index";
import type { ComponentConfig, Fields } from "@measured/puck";
import { getBasicFields } from "@/core/components/common";

export const ComponentFields: Fields<Partial<TestComponentProps>> = {
    ...getBasicFields(),
    backgroundUrl: {
        type: "text",
        label: "Background Image",
    },
    font: {
        type: "radio",
        label: "Font",
        options: [
            {
                label: "Arial",
                value: "Arial",
            }
        ]
    },
    fontColor: {
        type: "text",
        label: "Font Color",
    },
    fontSize: {
        type: "text",
        label: "Font Size",
    },
    fontWeight: {
        type: "radio",
        label: "Font Weight",
        options: [
            {
                label: "Normal",
                value: "normal",
            },
            {
                label: "Bold",
                value: "bold",
            }
        ]
    },
    linkFontSize: {
        type: "text",
        label: "Link Font Size",
    },
    rounded: {
        type: "text",
        label: "Rounded",
    },
    gap: {
        type: "text",
        label: "Gap",
    },
}


export const DefaultProps: Required<TestComponentProps> = {
    hidden: "N",
    backgroundUrl: "123",
    font: "test-font",
    fontColor: "#FF9E58",
    fontSize: "30px",
    fontWeight: "normal",
    linkFontSize: "16px",
    rounded: "12px",
    gap: "24px",
}