import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  value?:
  | {
    x: string;
    y: string;
  }
  | undefined;
  onChange: (value: { x: string; y: string }) => void;
}

export const PaddingInput = ({
  name,
  value = { x: "0", y: "0" },
  onChange,
}: Props) => {
  const { x, y } = value;
  return (
    <div className="flex flex-col gap-[12px]">
      <div>
        X:
        <Input
          name={`${name}.x`}
          value={x}
          onChange={(e) => onChange({ ...value, x: e.target.value })}
          endContent={<span>px</span>}
        />
      </div>
      <div>
        Y:
        <Input
          name={`${name}.y`}
          value={y}
          onChange={(e) => onChange({ ...value, y: e.target.value })}
          endContent={<span>px</span>}
        />
      </div>
    </div>
  );
};
