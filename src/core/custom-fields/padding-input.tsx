import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

interface Props {
    name: string;
    value?:
    | {
        x: number;
        y: number;
    }
    | undefined;
    onChange: (value: {
        x: number;
        y: number;
    }) => void;
}

export const PaddingInput = ({
    name, value = { x: 0, y: 0 }, onChange
}: Props) => {
    const { x, y } = value
    return (
        <div className="flex flex-col gap-[12px]"></div>
    )
}