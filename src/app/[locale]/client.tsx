"use client";

import { I18nProviderClient } from "@/locales/client";
import type { RootLayoutProps } from "./layout";
import { RenderClient } from "./[...puckPath]/client";

export const LayoutClient = ({
    children,
    params: { locale },
}: RootLayoutProps) => {
    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};

export const PageClient = () => {
    return (
        <div>
            <RenderClient />
        </div>
    )
}