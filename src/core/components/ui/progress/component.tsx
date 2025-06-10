import { merge } from "ts-deepmerge";
import type { ProgressProps } from ".";
import { DefaultProps } from "./config";
import { useState } from "react";

interface Props extends Partial<ProgressProps> {
    isEditing: boolean;
}

const getColor = (percentage: number) => {
    if (percentage < 50) return "#FFFFFF";
    if (percentage >= 50) return "#50BBE9";
    if (percentage === 100) return "#B64C00";
};

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        color,
        min,
        max
    } = merge(DefaultProps, props) as ProgressProps;

    const [value, setValue] = useState(min);

    const percentage = min / max * 100;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div style={{ width: "256px" }}>
            <div
                style={{
                    height: "32px",
                    borderRadius: "100px",
                    border: "1px solid #E0E0E0",
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#a0d2ee" // 背景色
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
                    color: getColor(percentage),
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {percentage}% {/* 固定百分比文字 */}
                </div>
            </div>
        </div>
    )
}