import type { Data, PuckContext, RootData } from "@measured/puck";

export interface PuckProps {
  puck: PuckContext;
}

export interface EmailProps {
  id: string;
  puckTemplateId: string | undefined;
  root: RootData<RootProps>;
  pages: {
    [key: string]: PageProps;
  };
}

export interface RootProps {
  title: string;
  icon: string;
  logo: string;
  public_access: string;
}

export interface PageProps {
  pageId: string;
  name: string;
  pathname: string;
  data: Data;
  createdAt: string;
  published?: boolean;
}

export interface TypoProps {
  font?: string;
  weight?: string;
  size?: string;
  lineHeight?: number;
  spacing?: number;
  align?: string;
  decoration?: string;
}