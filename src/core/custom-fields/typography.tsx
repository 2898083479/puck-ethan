import type { TypoProps } from "../index";
import { Input } from "@/components/ui/input";
import { Text } from "lucide-react";

export interface Props {
    name: string;
    value: TypoProps;
    onChange: (value: TypoProps) => void;
}

export const Typography = ({ name, value, onChange }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Text size={15} />
                <div>{name}</div>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <div>Font:</div>
                    <Input value={value.font} onChange={(e) => onChange({ ...value, font: e.target.value })} />
                </div>
                <div>
                    <div>Weight:</div>
                    <Input value={value.weight} onChange={(e) => onChange({ ...value, weight: e.target.value })} />
                </div>
                <div>
                    <div>Size:</div>
                    <Input value={value.size} onChange={(e) => onChange({ ...value, size: Number(e.target.value) })} />
                </div>
                <div>
                    <div>Line Height:</div>
                    <Input value={value.lineHeight} onChange={(e) => onChange({ ...value, lineHeight: Number(e.target.value) })} />
                </div>
                <div>
                    <div>Spacing:</div>
                    <Input value={value.spacing} onChange={(e) => onChange({ ...value, spacing: Number(e.target.value) })} />
                </div>
                <div>
                    <div>Align:</div>
                    <Input value={value.align} onChange={(e) => onChange({ ...value, align: e.target.value })} />
                </div>
            </div>
        </div>
    )
}