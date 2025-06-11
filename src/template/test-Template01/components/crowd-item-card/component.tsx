import type { CrowdItemCardProps } from ".";
import { DefaultProps } from "../test/config";
import { merge } from "ts-deepmerge";
import { cn } from "@/lib/utils";
import { Component as ProgressComponent } from "@/core/components/ui/progress/component";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Props extends CrowdItemCardProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        title,
        description,
        image,
        link,
        hidden,
        rounded,
        color,
        titleFont,
    } = merge(DefaultProps, props) as CrowdItemCardProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex flex-col gap-2 items-center",
                hidden === "Y" ? "opacity-50" : "",
            )}
            style={{
                "--title": title,
                "--description": description,
                "--image": image,
                "--link": link,
                "--rounded": rounded,
                "--color": color,
                "--title-font-font": titleFont.font,
                "--title-font-weight": titleFont.weight,
                "--title-font-size": `${titleFont.size}px`,
                "--title-font-line-height": titleFont.lineHeight,
                "--title-font-spacing": titleFont.spacing,
                "--title-font-align": titleFont.align,
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col shadow-lg"
                style={{
                    width: "414px",
                    borderRadius: rounded,
                    gap: "20px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    // border: "3px solid #E0E0E0",
                }}
            >
                <div
                    className="flex flex-row items-center"
                    style={{
                        gap: "24px",
                    }}
                >
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Loading...</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <div style={{ fontSize: `${Number(titleFont.size) - 6}px` }}>
                            由
                            <span
                                style={{
                                    fontSize: `${titleFont.size}px`,
                                    fontWeight: "var(--title-font-weight)",
                                    fontFamily: "var(--title-font-font)",
                                }}
                            >
                                某歌迷会
                            </span>
                            发起
                        </div>
                        <div
                            style={{
                                fontSize: `${titleFont.size}px`,
                                fontWeight: "var(--title-font-weight)",
                                fontFamily: "var(--title-font-font)",
                            }}
                        >演唱会应援物资义卖</div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: color,
                        borderRadius: rounded,
                        padding: "16px",
                    }}
                >
                    <div
                        className="flex flex-col gap-2"
                        style={{
                            color: "#FFFFFF",
                        }}
                    >
                        <div
                            style={{
                                fontSize: `${Number(titleFont.size) + 14}px`,
                                fontWeight: "var(--title-font-weight)",
                            }}
                        >
                            HK$ 65,000
                        </div>
                        <div style={{ fontSize: `${Number(titleFont.size) - 6}px` }}>现已筹集善款（港幣）</div>
                        <div><ProgressComponent min={60} max={100} color={color} /></div>
                    </div>
                </div>
                <div style={{ fontSize: "var(--title-font-size)" }}>截止時間：2025年6月8日</div>
                <Button
                    style={{
                        backgroundColor: color,
                        borderRadius: rounded,
                        height: "63px",
                        fontSize: "var(--title-font-size)",
                        fontWeight: "var(--title-font-weight)",
                        fontFamily: "var(--title-font-font)",
                        padding: "16px",
                    }}
                >
                    捐款支持
                </Button>
            </div>
        </div>
    )
}