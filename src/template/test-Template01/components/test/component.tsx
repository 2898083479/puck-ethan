import type { TestComponentProps } from "./index";
import { TestComponentUI } from "./ui";

const Edit = (props: Partial<TestComponentProps>) => {
    return <TestComponentUI {...props} isEditing={true} />;
}

const Preview = (props: Partial<TestComponentProps>) => {
    return <TestComponentUI {...props} isEditing={false} />;
}

const Prod = (props: Partial<TestComponentProps>) => {
    if (props.hidden === "Y") return <></>;
    return <TestComponentUI {...props} isEditing={false} />;
}

export const TestComponent = {
    Edit,
    Preview,
    Prod,
}