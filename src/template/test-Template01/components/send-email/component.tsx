import { merge } from "ts-deepmerge";
import type { SendEmailProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";

interface Props extends Partial<SendEmailProps> {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        fontSize,
        primary
    } = merge(DefaultProps, props) as SendEmailProps;

    return (
        <div
            className={cn(
                "w-full h-full flex items-center justify-center",
                hidden === "Y" && "opacity-50"
            )}
            style={{
                "--font-size": `${fontSize}px`,
                "--primary": primary
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col items-center"
                style={{
                    maxWidth: "768px"
                }}
            >
                <div>
                    <img
                        src="/images/donation-failed.png"
                        alt="send-email"
                        className="object-cover"
                        style={{
                            width: "calc(var(--font-size) * 6)",
                            aspectRatio: "9/8"
                        }}
                    />
                </div>
                <div
                    className="font-normal"
                    style={{
                        fontSize: "calc(var(--font-size) * 1)",
                        color: "var(--primary)"
                    }}
                >
                    已重新發送密碼至電子郵箱
                </div>
            </div>
        </div>
    )
}