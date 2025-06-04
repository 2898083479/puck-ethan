import { TestTemplate01Config } from "./test-Template01";

export const Templates: Record<
  string,
  {
    name: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    config: any;
  }
> = {
  testTemplate01: {
    name: "Test Template 01",
    config: TestTemplate01Config,
  },
};
