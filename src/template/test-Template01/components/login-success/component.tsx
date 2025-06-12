import { merge } from "ts-deepmerge";
import type { LoginSuccessProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";

interface Props extends Partial<LoginSuccessProps> {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        title,
        primary
    } = merge(DefaultProps, props) as LoginSuccessProps;

    return (
        <div
            className={cn(
                "flex items-center justify-center",
                hidden === "Y" && "opacity-50"
            )}
            style={{
                "--primary": primary
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col items-center w-full"
                style={{
                    maxWidth: "768px",
                    padding: "32px",
                    borderRadius: "16px",
                    gap: "32px"
                }}
            >
                <div>
                    <img
                        src="/images/donation-failed.png"
                        alt="send-email"
                        className="object-cover"
                        style={{
                            width: "300px",
                            aspectRatio: "9/8"
                        }}
                    />
                </div>
                <div
                    className="font-normal"
                    style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "var(--primary)"
                    }}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}