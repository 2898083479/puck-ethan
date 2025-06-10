import type { TestComponentProps } from "./index";
import { DefaultProps } from "./config";
import { merge } from "ts-deepmerge";
import { cn } from "@/lib/utils";
import { MockData } from "./mock";
import { ChevronRight, LogOut } from "lucide-react";
import { Constants } from "./constants";
import { useCurrentLocale } from "@/locales";

interface Props extends Partial<TestComponentProps> {
    isEditing: boolean;
}

export const TestComponentUI = ({
    isEditing,
    ...props
}: Props) => {
    const lang = useCurrentLocale();
    const {
        hidden,
        backgroundUrl,
        font,
        fontColor,
        rounded,
        fontSize,
        fontWeight,
        linkFontSize,
        gap
    } = merge(
        DefaultProps,
        props
    ) as TestComponentProps;

    if (hidden === "Y" && !isEditing) {
        return <></>;
    }

    return (
        <div
            className={cn(
                "w-full flex flex-col items-center justify-between",
                hidden === "Y" ? "opacity-50" : "",
            )}
            style={{
                "--background-url": backgroundUrl,
                "--font-color": fontColor,
                "--font": font,
                "--font-size": fontSize,
                "--gap": gap,
                "--font-weight": fontWeight
            } as React.CSSProperties}
        >
            <div
                className="flex flex-row items-center justify-between"
                style={{
                    width: "768px",
                    padding: "32px",
                }}
            >
                <div
                    className="flex flex-col gap-6 bg-white/95 max-w-[768px] w-auto"
                    style={{
                        gap: gap
                    }}
                >
                    <div
                        className="flex flex-row gap-2 text-[40px] font-normal"
                        style={{
                            fontFamily: "var(--font)",
                            fontSize: fontSize,
                            fontWeight: fontWeight
                        }}
                    >
                        <p>
                            {MockData.genderTitle}
                        </p>
                        <p>
                            {MockData.name}
                        </p>
                    </div>
                    <div
                        className="flex flex-row gap-4"
                        style={{
                            fontSize: linkFontSize
                        }}
                    >
                        <span
                            className="cursor-pointer flex flex-row items-center gap-1"
                            style={{ color: "var(--font-color)" }}
                        >
                            {Constants.edit[lang]} <ChevronRight size={16} />
                        </span>
                        <span
                            className="cursor-pointer flex flex-row items-center gap-1"
                            style={{ color: "var(--font-color)" }}
                        >
                            {Constants.logout[lang]} <LogOut size={16} />
                        </span>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-2 h-full"
                    style={{
                        gap: gap
                    }}
                >
                    <div
                        className="flex flex-col gap-2 items-center"
                        style={{
                            border: "1px solid var(--font-color)",
                            borderRadius: rounded,
                            padding: "12px 24px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: fontSize,
                                fontFamily: "var(--font)",
                                fontWeight: fontWeight
                            }}
                        >
                            {MockData.pending}
                        </div>
                        <div
                            style={{
                                fontSize: "calc(var(--font-size) - 12px)"
                            }}
                        >
                            {Constants.pending[lang]}
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-2 items-center"
                        style={{
                            backgroundColor: "var(--font-color)",
                            borderRadius: rounded,
                            padding: "12px 24px"
                        }}
                    >
                        <div
                            style={{
                                fontSize: fontSize,
                                fontFamily: "var(--font)",
                                fontWeight: fontWeight
                            }}
                        >
                            {MockData.ongoing}
                        </div>
                        <div
                            style={{
                                fontSize: "calc(var(--font-size) - 12px)"
                            }}
                        >
                            {Constants.ongoing[lang]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

