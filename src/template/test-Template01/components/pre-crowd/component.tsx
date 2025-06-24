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
            <div className="max-w-[798px] w-full">
                <div
                    className="relative flex flex-col items-center gap-4 sm:gap-8 px-4 pb-4 sm:pb-8 sm:px-8 sm:py-12 bg-white rounded-3xl border border-red-400"
                >
                    <div
                        className="initial inline-block sm:absolute translate-y-[-25px] sm:translate-y-[unset] sm:top-[-32px] sm:left-[32px] px-6 py-3 bg-[var(--primary)] rounded-[44px] z-10"
                    >
                        <span
                            className={cn(
                                "text-center text-2xl sm:text-3xl leading-none sm:leading-[130%] font-normal text-white",
                            )}
                        >
                            {title}
                        </span>
                    </div>
                    <div
                        className="text-[18px] sm:text-[24px] font-bold underline"
                    >
                        {title2}
                    </div>
                    <ul
                        className="list-disc list-inside gap-4 sm:gap-8"
                    >
                        {list.map((item) => (
                            <li
                                key={item.content}
                                className="text-[16px] sm:text-[24px] pb-4"
                            >
                                {item.content}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end w-full">
                        <Button
                            className="text-[var(--title-color)] bg-[var(--btn-color)] py-3 px-6"
                        >
                            同意
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}