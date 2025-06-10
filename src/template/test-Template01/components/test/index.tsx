import type { BasicProps } from "@/core/components/types";
import type { ComponentConfig } from "@measured/puck";
import { ComponentFields, DefaultProps } from "./config";
import { TestComponent } from "./component";

export interface TestComponentProps extends BasicProps {
    backgroundUrl: string;
    font: string;
    fontColor: string;
    rounded: string;
    fontSize: string;
    fontWeight: string;
    linkFontSize: string;
    gap: string;
}

export const Test: ComponentConfig<
    Partial<TestComponentProps>
> = {
    label: "Personal Profile",
    fields: ComponentFields,
    defaultProps: DefaultProps,
    render: ({puck: {isEditing}, ...props}) => {
        const {
            Edit,
            Preview,
            Prod
        } = TestComponent;

        return isEditing ? <Edit {...props} /> : <Preview {...props} />;
    }
}