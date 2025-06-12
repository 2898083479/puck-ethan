"use client";

import type { LoginProps } from ".";
import { merge } from "ts-deepmerge";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/core/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props extends Partial<LoginProps> {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const router = useRouter();
    const {
        hidden,
        title,
        primary,
        fontSize,
        signupUrl,
        forgotPasswordUrl,
    } = merge(DefaultProps, props) as LoginProps;

    if (hidden === "Y" && !isEditing) return <></>;

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(data);
        alert("Login successful");
    }

    return (
        <div
            className={cn(
                "flex flex-col items-center"
            )}
            style={{
                "--primary": primary,
                "--font-size": `${fontSize}px`,
                backgroundImage: "url(/images/background.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            } as React.CSSProperties}
        >
            <div
                className="flex flex-col items-center w-full"
                style={{
                    borderRadius: "16px",
                    maxWidth: "768px",
                    gap: "32px",
                    padding: "32px",
                    backgroundColor: "#FFFFFF",
                    margin: "64px",
                }}
            >
                <div>
                    <img
                        src="/images/donation-failed.png"
                        alt="login"
                        className="w-full h-full object-cover"
                        style={{
                            width: "calc(var(--font-size) * 6)",
                            aspectRatio: "9/8"
                        }}
                    />
                </div>
                <div
                    style={{
                        fontSize: "var(--font-size)",
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col w-full"
                        style={{
                            gap: "16px",
                        }}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label isRequired>電郵</Label>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <Label isRequired>密碼</Label>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full flex flex-row justify-between"
                            style={{
                                height: "82px",
                                fontSize: "calc(var(--font-size) - 16px)",
                                backgroundColor: primary,
                                padding: "32px 24px",
                            }}
                        >
                            登錄 <ArrowRightIcon size={20} />
                        </Button>
                    </form>
                </Form>
                <div
                    className="flex flex-row items-center justify-between w-full"
                    style={{
                        color: "var(--primary)",
                        justifyContent: "space-between",
                    }}
                >
                    <span
                        className="cursor-pointer"
                        onClick={() => router.push(signupUrl)}
                    >
                        新用戶註冊
                    </span>
                    <span
                        className="cursor-pointer"
                        onClick={() => router.push(forgotPasswordUrl)}
                    >
                        忘記密碼
                    </span>
                </div>
            </div>
        </div>
    )
}