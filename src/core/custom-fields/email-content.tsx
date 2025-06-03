import { Textarea } from "@/components/ui/textarea";
import { Text } from "lucide-react";

interface Props {
    name: string;
    value: string;
    onChange: (value: string) => void;
}

export const EmailContentInput = ({ name, value, onChange }: Props) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <Text size={15} />
                <div>{name}</div>
            </div>
            <Textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-full resize-none"
            />
        </div>
    )
}