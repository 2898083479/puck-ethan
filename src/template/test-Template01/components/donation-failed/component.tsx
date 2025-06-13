import { merge } from "ts-deepmerge";
import type { DonationFailedProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Contants } from "./contants";
import { useCurrentLocale } from "@/locales";

export interface Props extends DonationFailedProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const lang = useCurrentLocale();
    const {
        hidden,
        primary,
        font,
    } = merge(DefaultProps, props) as DonationFailedProps;

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
                className="w-full flex flex-col items-center"
                style={{
                    maxWidth: "500px",
                    borderRadius: "12px",
                    padding: "32px",
                    gap: "32px",
                }}
            >
                <div>
                    <img
                        src="/images/donation-failed.png"
                        alt="Donation Failed"
                        style={{
                            width: "150px",
                            aspectRatio: "9/8",
                        }}
                    />
                </div>
                <div
                    style={{
                        fontSize: "var(--font-size)",
                        fontWeight: "var(--font-weight)",
                        textAlign: "var(--font-align)" as "left" | "center" | "right",
                    }}
                >
                    {Contants.title[lang]}
                </div>
                <Button
                    className="w-full items-center justify-between"
                    style={{
                        color: "var(--primary)",
                        height: "45px",
                        fontSize: "calc(var(--font-size) - 12px)",
                        fontWeight: "var(--font-weight)",
                        borderColor: "var(--primary)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                    }}
                >
                    {Contants.button[lang]} <ArrowRight size={18} />
                </Button>
            </div>
        </div>
    )
}