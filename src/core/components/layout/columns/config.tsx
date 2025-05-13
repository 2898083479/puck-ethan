import type { Fields } from "@measured/puck";
import { getBasicFields } from "../../common";
import type { ColumnsProps } from ".";

export const ComponentFields: Fields<Partial<ColumnsProps>> = {
    ...getBasicFields(),
    maxWidth: {
        type: "number",
        label: "Max Width",
        min: 0,
    },
    align: {
        type: "radio",
        label: "Align",
        options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
        ],
    },
    numColumns: {
        type: "number",
        label: "Number of Columns",
        min: 1,
        max: 12,
    },
    gap: {
        type: "number",
        label: "Gap",
        min: 0
    },
    padding: {
        type: "custom",
        label: "Padding",
        render: ({ value, onChange }) => {
            return (
                <div></div>
            )
        }
    }
} as const;

export const DefaultProps: Required<ColumnsProps> = {
    hidden: "N",
    maxWidth: 1200,
    align: "center",
    numColumns: 2,
    gap: 12,
    padding: {
        x: 0,
        y: 0,
    },
}