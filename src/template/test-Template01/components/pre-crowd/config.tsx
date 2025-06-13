import type { Fields } from "@measured/puck";
import type { PreCrowdProps } from ".";
import { getBasicFields } from "@/core/components/common";

export const PreCrowdFields: Fields<PreCrowdProps> = {
    ...getBasicFields(),
    title: {
        type: "text",
        label: "Title",
    },
    titleColor: {
        type: "text",
        label: "Title Color",
    },
    fontSize: {
        type: "text",
        label: "Font Size",
    },
    primary: {
        type: "text",
        label: "Primary",
    },
    btnColor: {
        type: "text",
        label: "Button Color",
    },
    title2: {
        type: "text",
        label: "Title 2",
    },
    list: {
        type: "array",
        label: "List",
        arrayFields: {
            content: {
                type: "text",
                label: "Item",
            },
        },
    }
};

export const DefaultProps: Required<PreCrowdProps> = {
    hidden: "N",
    title: "籌款須知",
    titleColor: "#FFFFFF",
    fontSize: "16px",
    primary: "#FFA100",
    btnColor: "#17B9A3",
    title2: "發起人/機構必須細閱及同意以下規則，方可發起籌款活動",
    list: [
        {
            content: "發起人/機構必須細閱及同意以下規則，方可發起籌款活動",
        },
    ],
}