import { merge } from "ts-deepmerge";
import type { ProgressProps } from ".";
import { DefaultProps } from "./config";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends Partial<ProgressProps> {
    isEditing?: boolean;
    className?: string;
}

export const Component = ({ isEditing, className, ...props }: Props) => {
    const {
        hidden,
        color,
        min,
        max
    } = merge(DefaultProps, props) as ProgressProps;

    const percentage = min / max * 100;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div className={cn("w-full", className)}>
            <div
                style={{
                    height: "32px",
                    borderRadius: "100px",
                    border: "1px solid #E0E0E0",
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: `rgba(${color}, 0.5)`, // 背景色
                }}
            >
                {/* 进度条填充部分 - 移除transition动画 */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${percentage}%`,
                        backgroundColor: "#FFFFFF", // 固定颜色
                        borderRadius: "100px"
                        // 移除了transition属性
                    }}
                />
                {/* 进度文字 */}
                <div style={{
                    position: "absolute",
                    color: `${color}`,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                }}>
                    {percentage}% {/* 固定百分比文字 */}
                </div>
            </div>
        </div>
    )
};