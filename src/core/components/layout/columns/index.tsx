import type { BasicProps } from "../../types";
import type { ComponentConfig } from "@measured/puck";
import { ComponentFields, DefaultProps } from "./config";
import { Component } from "./component";

export interface ColumnsProps extends BasicProps {
    maxWidth?: number;
    align?: "left" | "center" | "right";
    gap: number;
    padding: {
        x: number;
        y: number;
    },
    numColumns: number;
}

// 提供行组件配置
export const Columns: ComponentConfig<Partial<ColumnsProps>> = {
    label: "Columns",
    fields: ComponentFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />;
    }
}