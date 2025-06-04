"use client";

import { useI18n } from "@/locales";

export default function Test() {
  const t = useI18n();
  return (
    <>
      <div>{t("test.title")}</div>
    </>
  );
}
