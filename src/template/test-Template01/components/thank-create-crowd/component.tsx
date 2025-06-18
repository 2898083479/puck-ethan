"use client"

import { merge } from "ts-deepmerge";
import type { ThankCreateCrowdProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';
import { useRouter } from "next/navigation";

interface Props extends ThankCreateCrowdProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const router = useRouter();
    const {
        hidden,
        primary,
        typo,
        url
    } = merge({ DefaultProps, ...props }) as ThankCreateCrowdProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex flex-col items-center",
                hidden === "Y" && "opacity-50"
            )}
            style={{
                "--primary-color": primary,
                "--font-size": `${typo.size}px`,
                "--font-weight": typo.weight,
                "--font-family": typo.font,
                "--font-line-height": typo.lineHeight,
                "--font-spacing": typo.spacing,
                "--font-align": typo.align,
                "--font-decoration": typo.decoration
            } as React.CSSProperties}
        >
            <div className="w-full flex flex-col items-cente max-w-[343px] sm:max-w-[768px] items-center border border-blue-200 px-6 py-6 rounded-2xl gap-4">
                <div
                    className="max-w-[80%] sm:max-w-[60%]"
                >
                    <img
                        src="/images/donation-success.png"
                        alt="Create Crowd Success"
                    />
                </div>
                <div
                    className="text-[18px] sm:text-[24px]"
                    style={{
                        fontWeight: "var(--font-weight)"
                    }}
                >
                    多谢您！本会现正检视由您发起的筹款项目
                </div>
                <div
                    style={{
                        fontWeight: "var(--font-weight)",
                        fontSize: "calc(var(--font-size) - 6px)"
                    }}
                >
                    一般而言，本会会于两个工作日内完成检视，并会以电邮通知项目发起人/机构。
                </div>
                <div
                    className="text-[#94A3B8]"
                    style={{
                        fontSize: "calc(var(--font-size) - 6px)"
                    }}
                >
                    <p>如有查询，欢迎在办公时间内联络协康会企业发展部</p>
                    <p>电话：3618 6352 电邮：donation@heephong.org</p>
                </div>
                <Button
                    className="w-full flex flex-row justify-between py-6 px-8"
                    variant="outline"
                    style={{
                        fontSize: "var(--font-size)",
                        fontWeight: "var(--font-weight)",
                        color: "var(--primary-color)",
                        borderColor: "var(--primary-color)",
                        lineHeight: "var(--font-line-height)"
                    }}
                    onClick={() => router.push(url)}
                >
                    前往个人中心 <MoveRight />
                </Button>
            </div>
        </div>
    )
}