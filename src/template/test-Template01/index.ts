import type { Config } from "@measured/puck";
import {
    CommonComponents,
    LayoutComponents,
    type LayoutProps,
    UIComponents,
    type UIProps,
} from "../config";
import type { TestTemplate01Props } from "./types";

export type BlockProps = {

};

export type ComponentProps = UIProps & LayoutProps & BlockProps;

export type Category = "Blocks" | "Layout" | "UI";

export type PuckConfig = Config<ComponentProps, TestTemplate01Props, Category>;

export const TestTemplate01Config: PuckConfig = {
    root: {},
    components: {
        ...(CommonComponents as any)
    },
    categories: {
        Layout: {
            components: LayoutComponents,
        },
        UI: {
            components: UIComponents,
        },
        Blocks: {
            components: [

            ]
        }
    },
};

