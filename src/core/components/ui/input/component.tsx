import type { InputProps } from ".";
import { DefaultProps } from "./config";
import { merge } from "ts-deepmerge";
import { Input } from "@/components/ui/input";

interface Props extends Partial<InputProps> {
    className?: string;
}

export const Component = ({ ...props }: Props) => {
    const {
        border_color,
        placeholder,
        w_h
    } = merge(DefaultProps, props) as InputProps;

    return (
        <Input
            placeholder={placeholder}
            style={{
                borderColor: border_color,
                width: `${w_h.width}px`,
                height: `${w_h.height}px`,
            }}
        />
    )
}