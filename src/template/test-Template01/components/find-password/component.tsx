import { merge } from "ts-deepmerge";
import type { FindPasswordProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/core/ui/label";
import { ArrowRightIcon } from "lucide-react";
import { useCurrentLocale } from "@/locales";
import { Contants } from "./contants";

export interface Props extends FindPasswordProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const lang = useCurrentLocale();
    const {
        hidden,
        primary,
        font,
        language
    } = merge(DefaultProps, props) as FindPasswordProps;

    const formSchema = z.object({
        email: z.string().email({
            message: Contants.err_msg[lang],
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    if (hidden === "Y" && !isEditing) return <></>;

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

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
                    maxWidth: "768px",
                    borderRadius: "12px",
                    padding: "32px",
                    gap: "32px",
                }}
            >
                <div>
                    <img
                        src="/images/donation-failed.png" alt="find-password"
                        style={{
                            width: "calc(var(--font-size) * 6)",
                            aspectRatio: "9/8",
                        }}
                    />
                </div>
                <div style={{ fontSize: "var(--font-size)" }}>找回我的密碼</div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full flex flex-col"
                        style={{
                            gap: "32px"
                        }}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label isRequired className="mb-0">{Contants.email_label[lang]}</Label>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={Contants.email_placeholder[lang]}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full justify-between"
                            style={{
                                fontSize: "calc(var(--font-size) - 20px)",
                                borderRadius: "12px",
                                backgroundColor: "var(--primary)",
                                fontWeight: "var(--font-weight)",
                            }}
                        >
                            <span>{Contants.send_email_button[lang]}</span> <ArrowRightIcon size={24} />
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}