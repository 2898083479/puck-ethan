import type { DonationSuccessProps } from ".";
import { merge } from "ts-deepmerge";
import { DefaultProps } from "../test/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface Props extends DonationSuccessProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        primary,
        font,
    } = merge(DefaultProps, props) as DonationSuccessProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex flex-col items-center",
                hidden === "Y" ? "opacity-50" : "",
            )}
            style={{
                "--primary": primary,
                "--font": font.font,
                "--font-weight": font.weight,
                "--font-size": `${font.size}px`,
                "--font-line-height": font.lineHeight,
                "--font-spacing": font.spacing,
                "--font-align": font.align,
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col items-center"
                style={{
                    width: "768px",
                    borderRadius: "12px",
                    padding: "32px",
                    gap: "32px",
                }}
            >
                <div>
                    <img
                        src="/images/donation-success.png"
                        alt="Donation Success"
                        className="aspect-auto"
                    />
                </div>
                <div
                    style={{
                        fontSize: "var(--font-size)",
                        fontWeight: "var(--font-weight)",
                        color: "var(--primary)",
                    }}
                >
                    您已成功捐款 HK$ 860
                </div>
                <div
                    style={{
                        fontSize: "calc(var(--font-size) - 19px)",
                        fontWeight: "var(--font-weight)",
                        textAlign: "var(--font-align)" as "left" | "center" | "right",
                    }}
                >
                    <p>系統已發送電郵紀錄</p>
                    <p>捐款時間：11/07/2023 04:00 PM</p>
                    <p>Ref.No. 1234567890</p>
                </div>
                <Button
                    className="w-full justify-between items-center"
                    style={{
                        backgroundColor: "var(--primary)",
                        color: "white",
                        height: "82px",
                        fontSize: "calc(var(--font-size) - 19px)",
                        fontWeight: "var(--font-weight)",
                        borderRadius: "12px",
                    }}
                >
                    返回首頁 <ArrowRight size={18} />
                </Button>
            </div>
        </div>
    )
}