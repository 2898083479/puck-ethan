import { Input } from "@/components/ui/input";
import { Text } from "lucide-react";

interface Props {
  name: string;
  value?: {
    width: string;
    height: string;
  };
  onChange: (value: { width: string; height: string }) => void;
}

export const WHInput = ({
  name,
  value = { width: "100", height: "40" },
  onChange,
}: Props) => {
  const { width, height } = value;

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-row gap-3 items-center">
        <div className="text-[#c9c9c9] flex flex-row gap-2 items-center">
          <Text size={15} />
          <div className="text-sm font-semibold text-muted-foreground">
            {name}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        width:{" "}
        <Input
          name={`${name}.width`}
          value={width}
          onChange={(e) => onChange({ ...value, width: e.target.value })}
        />
        height:{" "}
        <Input
          name={`${name}.height`}
          value={height}
          onChange={(e) => onChange({ ...value, height: e.target.value })}
        />
      </div>
    </div>
  );
};
