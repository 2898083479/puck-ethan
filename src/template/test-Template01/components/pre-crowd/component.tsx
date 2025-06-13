import type { PreCrowdProps } from ".";
import { merge } from "ts-deepmerge";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props extends Partial<PreCrowdProps> {
    isEditing: boolean;
}


export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        title,
        titleColor,
        fontSize,
        primary,
        btnColor,
        title2,
        list,
    } = merge(DefaultProps, props) as PreCrowdProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex flex-col items-center",
            )}
            style={{
                "--title-color": titleColor,
                "--font-size": fontSize,
                "--primary": primary,
                "--btn-color": btnColor,
                padding: "40px",
                hidden: hidden === "Y" && "opacity-50"
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col justify-center relative"
                style={{
                    maxWidth: "768px",
                    fontSize: "var(--font-size)",
                    borderRadius: "16px",
                    gap: "16px",
                    padding: "48px 32px 32px 32px", // 增加 padding-top 给标题留空间
                    borderColor: "var(--primary)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    marginTop: "25px", // 防止标题被截断
                }}
            >
                <div
                    className="flex justify-center items-center absolute mx-auto"
                    style={{
                        fontSize: "clamp(20px, 4vw, 30px)", // 响应式字体大小
                        color: "var(--title-color)",
                        height: "44px",
                        top: "-22px", // 调整为高度的一半
                        left: "5%",
                        backgroundColor: "var(--primary)",
                        borderRadius: "44px",
                        padding: "12px 24px", // 调整内边距
                        minWidth: "160px", // 防止标题过窄
                        width: "fit-content", // 宽度自适应内容
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        textDecoration: "underline",
                    }}
                >
                    {title2}
                </div>
                <ul
                    style={{
                        listStyleType: "disc",
                        paddingLeft: "20px",
                    }}
                >
                    {list.map((item) => (
                        <li
                            key={item.content}
                            style={{
                                paddingBottom: "16px",
                                fontSize: "24px",
                            }}
                        >
                            {item.content}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <Button
                        style={{
                            backgroundColor: "var(--btn-color)",
                            color: "var(--title-color)",
                        }}
                    >
                        同意
                    </Button>
                </div>
            </div>
        </div>
    )
}