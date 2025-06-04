import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  value?:
    | {
        x: number;
        y: number;
      }
    | undefined;
  onChange: (value: { x: number; y: number }) => void;
}

export const PaddingInput = ({
  name,
  value = { x: 0, y: 0 },
  onChange,
}: Props) => {
  const { x, y } = value;
  return (
    <div className="flex flex-col gap-[12px]">
      <Input
        name={`${name}.x`}
        value={x}
        onChange={(e) => onChange({ ...value, x: Number(e.target.value) })}
      />
      <Input
        name={`${name}.y`}
        value={y}
        onChange={(e) => onChange({ ...value, y: Number(e.target.value) })}
      />
    </div>
  );
};
