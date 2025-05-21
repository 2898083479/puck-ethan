"use client";

import { I18nProviderClient } from "@/locales/client";
import type { RootLayoutProps } from "./layout";

export const LayoutClient = ({
    children,
    params: { locale },
}: RootLayoutProps) => {
    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};