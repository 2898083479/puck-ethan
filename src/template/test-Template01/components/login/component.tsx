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
    FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Contants } from "./contants";
import { useCurrentLocale } from "@/locales";

interface Props extends Partial<LoginProps> {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const router = useRouter();
    const lang = useCurrentLocale();
    const {
        hidden,
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
                    {Contants.title[lang]}
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
                                    <Label isRequired>{Contants.email_label[lang]}</Label>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={Contants.placeholder[lang]}
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
                                    <Label isRequired>{Contants.password_label[lang]}</Label>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={Contants.placeholder[lang]}
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
                            {Contants.login_button[lang]} <ArrowRightIcon size={20} />
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
                        {Contants.signup_button[lang]}
                    </span>
                    <span
                        className="cursor-pointer"
                        onClick={() => router.push(forgotPasswordUrl)}
                    >
                        {Contants.forgot_password_button[lang]}
                    </span>
                </div>
            </div>
        </div>
    )
}