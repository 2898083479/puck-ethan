import { merge } from "ts-deepmerge";
import type { EmailContentProps } from ".";
import { Textarea } from "@/components/ui/textarea";
import { DefaultProps } from "./config";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends Partial<EmailContentProps> {
  isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
  const [textContent, setTextContent] = useState(props.text_content);

  const {
    text_color,
    text_size,
    text_align,
    text_line_height,
    text_font,
    text_font_weight,
    text_font_style,
    text_content,
  } = merge(DefaultProps, props) as EmailContentProps;

  return (
    <div>
      <Textarea
        value={text_content}
        onChange={(e) => setTextContent(e.target.value)}
        className={cn("w-full h-full", isEditing && "border-2 border-gray-300")}
        disabled={!isEditing}
        style={{
          color: text_color,
          fontSize: text_size,
          textAlign: text_align,
          lineHeight: text_line_height,
          fontFamily: text_font,
          fontWeight: text_font_weight,
          fontStyle: text_font_style,
        }}
        maxLength={1000000}
      />
    </div>
  );
};
