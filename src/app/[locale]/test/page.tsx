"use client";

import { useI18n } from "@/locales";
import { NextSeo } from "next-seo";

export default function Test() {
    const t = useI18n();
    return (
        <>
            <NextSeo title={"Title"} />
            <div>{t("test.title")}</div>
        </>
    )
}
