import type { Fields } from "@measured/puck";
import type { EmailContentProps } from ".";
import { getBasicFields } from "../../common";
import { EmailContentInput } from "@/core/custom-fields/email-content";

export const EmailContentFields: Fields<Partial<EmailContentProps>> = {
  text_color: {
    type: "text",
    label: "Text Color",
  },
  text_size: {
    type: "number",
    label: "Text Size",
  },
  text_align: {
    type: "radio",
    label: "Text Align",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  text_line_height: {
    type: "number",
    label: "Text Line Height",
  },
  text_font: {
    type: "select",
    label: "Text Font Family",
    options: [
      { label: "Arial", value: "Arial" },
      { label: "Helvetica", value: "Helvetica" },
      { label: "Times New Roman", value: "Times New Roman" },
      { label: "Courier New", value: "Courier New" },
    ],
  },
  text_font_weight: {
    type: "radio",
    label: "Text Font Weight",
    options: [{ label: "Normal", value: "normal" }],
  },
  text_font_style: {
    type: "radio",
    label: "Text Font Style",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Italic", value: "italic" },
    ],
  },
  text_content: {
    type: "custom",
    render: ({ value, onChange }) => {
      return (
        <EmailContentInput
          name="Email Content"
          value={value || ""}
          onChange={onChange}
        />
      );
    },
  },
};

export const ComponentFields: Fields<Partial<EmailContentProps>> = {
  ...getBasicFields(),
  ...EmailContentFields,
};

export const DefaultProps: Required<EmailContentProps> = {
  hidden: "N",
  text_color: "#000000",
  text_size: 16,
  text_align: "left",
  text_line_height: 1.5,
  text_font: "Arial",
  text_font_weight: "normal",
  text_font_style: "normal",
  text_content: "Hello, world!",
};
