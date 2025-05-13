import type { ComponentConfig } from "@measured/puck";

export interface SpaceProps {
    size: number;
}

export const Space: ComponentConfig<SpaceProps> = {
    label: "Space",
    fields: {
        size: {
            type: "number",
            label: "Size",
            min: 0,
        },
    },
    defaultProps: {
        size: 24,
    },
    render: ({ size }) => {
        return <div style={{ minHeight: size, width: "100%" }} />;
    }
}