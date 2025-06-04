import { getScopedI18n } from "@/locales/server";
import { headers } from "next/headers";
import { LayoutClient } from "./client";
import "../globals.css";

export interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const generateMetadata = async () => {
  const t = await getScopedI18n("test");
  const pathname = headers().get("x-url");
  if (!pathname) return null;
  return {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    title: t(`${pathname}.title` as any),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    description: t(`${pathname}.description` as any),
  };
};

const Layout = (props: RootLayoutProps) => {
  return (
    <html lang={props.params.locale}>
      <body>
        <LayoutClient {...props} />
      </body>
    </html>
  );
};

export default Layout;
