import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Text } from "lucide-react";

const fontFamilyOptions = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Palatino",
    "Garamond",
]

interface Props {
    name: string;
    value: string;
    onChange: (value: string) => void;
}

export const FontFamilySelector = ({ name, value, onChange }: Props) => {

    return (
        <div>
            <div className="flex items-center gap-2">
                <Text size={15}/>
                <div>{name}</div>
            </div>
            <Select
                value={value}
                onValueChange={onChange}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a font" />
                </SelectTrigger>
                <SelectContent>
                    {fontFamilyOptions.map((font) => (
                        <SelectItem key={font} value={font}>{font}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}