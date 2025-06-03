import type { ComponentConfig } from "@measured/puck";
import type { BasicProps } from "../../types";
import { Component } from "./component";
import { DefaultProps } from "./config";
import { ComponentFields } from "./config";

export interface EmailContentProps extends BasicProps {
    // 文本顏色
    text_color: string;
    // 文本大小
    text_size: number;
    // 文本對齊
    text_align: "left" | "center" | "right";
    // 文本行高
    text_line_height: number;
    // 文本字體
    text_font: string;
    // 文本字體粗細
    text_font_weight: "normal" | "bold";
    // 文本字體斜體
    text_font_style: "normal" | "italic";
    // 文本內容
    text_content: string;
}

export const EmailContent: ComponentConfig<Partial<EmailContentProps>> = {
    label: "Email Content",
    fields: ComponentFields,
    defaultProps: DefaultProps,
    render: ({ puck: { isEditing }, ...props }) => {
        return <Component isEditing={isEditing} {...props} />
    }
}