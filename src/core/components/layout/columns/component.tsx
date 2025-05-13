import { cn } from "@/lib/utils";
import { DropZone } from "@measured/puck";
import { merge } from "ts-deepmerge";
import type { ColumnsProps } from ".";
import { DefaultProps } from "./config";

interface Props extends Partial<ColumnsProps> {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const { hidden, maxWidth, align, numColumns, gap, padding } = merge(DefaultProps, props) as ColumnsProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "w-full flex items-center justify-center",
                hidden === "Y" && "opacity-50",
            )}
        >
            <div
                className="w-full flex"
                style={{
                    padding: `${padding.y}px ${padding.x}px`,
                    justifyContent: align,
                }}
            >
                <div
                    className="w-full"
                    style={{
                        maxWidth: `${maxWidth}px`,
                    }}
                >
                    <DropZone
                        zone="columns"
                        className="flex flex-col md:grid w-auto"
                        style={{
                            gap,
                            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )

}
