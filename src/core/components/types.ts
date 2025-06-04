export interface BasicProps {
  hidden?: "Y" | "N";
}

const FILL_HEIGHT = [
  { label: "Y", value: "Y" },
  { label: "N", value: "N" },
] as const;
export type FillHeightType = (typeof FILL_HEIGHT)[number]["value"];
