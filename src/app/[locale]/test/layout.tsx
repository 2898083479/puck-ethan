import Layout from "../layout";
import { ToggleLanguage } from "@/components/core/toggle-language/locale-switch";

export default function TestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <ToggleLanguage />
            {children}
        </div>
    );
}