import type { Config } from "@measured/puck";
import {
  CommonComponents,
  LayoutComponents,
  type LayoutProps,
  UIComponents,
  type UIProps,
} from "../config";
import type { TestTemplate01Props } from "./types";
import { EmailContent } from "@/core/components/ui/email-content";
import { Test } from "./components/test";
import { CrowdItemCard } from "./components/crowd-item-card";
import { DonationSuccess } from "./components/donation-success";
import { DonationFailed } from "./components/donation-failed";
import { FindPassword } from "./components/find-password";

export type BlockProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any;
};

export type ComponentProps = UIProps & LayoutProps & BlockProps;

export type Category = "Blocks" | "Layout" | "UI";

export type PuckConfig = Config<ComponentProps, TestTemplate01Props, Category>;

export const TestTemplate01Config: PuckConfig = {
  root: {},
  components: {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ...(CommonComponents as any),
    EmailContent,
    Test,
    CrowdItemCard,
    DonationSuccess,
    DonationFailed,
    FindPassword,
  },
  categories: {
    Layout: {
      components: LayoutComponents,
    },
    UI: {
      components: UIComponents,
    },
    Blocks: {
      components: ["EmailContent", "Test", "CrowdItemCard", "DonationSuccess", "DonationFailed", "FindPassword"],
    },
  },
};
