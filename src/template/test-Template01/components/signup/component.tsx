import { merge } from "ts-deepmerge";
import type { SignupProps } from ".";
import { DefaultProps } from "./config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { useCurrentLocale } from "@/locales";
import { cn } from "@/lib/utils";
import { Label } from "@/core/ui/label";
import { CircleChevronRight } from "lucide-react";

interface Props extends SignupProps {
    isEditing: boolean;
};

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        typo,
        titleColor,
        backBtn,
        nextBtn,
    } = merge(DefaultProps, props) as SignupProps;

    const pageSchema = z.object({
        email: z
            .string()
            .email("Invalid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: z
            .string()
            .min(8, "Password must be at least 8 characters"),
    })
    const contractSchema = z.object({
        name: z.string().min(1, "Name is required"),
        title: z.string().min(1, "Title is required"),
        phone: z.string().min(1, "Phone is required"),
        team: z.string().optional(),
    })

    const formSchema = z.discriminatedUnion("type", [
        pageSchema.extend({ type: z.literal("page") }),
        contractSchema.extend({ type: z.literal("contract") }),
    ]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            title: "",
            phone: "",
            team: "",
        },
    });

    const onHandleSubmit = async (data: z.infer<typeof formSchema>) => {
        // 發送驗證碼
        console.log(data.type === "page" ? data.email : "");
    }


    if (hidden === "Y" || !isEditing) return <></>;

    return (
        <div
            className="flex flex-col items-center"
            style={{
                "--font-size": typo.size,
                "--font-weight": typo.weight,
                "--line-height": typo.lineHeight,
                "--letter-spacing": typo.spacing,
                "--text-align": typo.align,
                "--text-transform": typo.decoration,
                "--text-decoration": typo.decoration,
                "--title-color": titleColor,
                "--back-btn-color": backBtn,
                "--next-btn-color": nextBtn,
                padding: "40px"
            } as React.CSSProperties}
        >
            <div className="max-w-[768px] w-full">
                <div
                    className="relative flex flex-col items-center gap-4 sm:gap-8 px-4 pb-4 sm:pb-8 sm:px-8 bg-white rounded-3xl border border-red-400"
                >
                    <div
                        className="initial inline-block items-center sm:absolute translate-y-[-25px] sm:translate-y-[unset] sm:top-[-32px] sm:left-[32px] px-6 py-3 bg-[#FFDE59] rounded-[44px] z-10 w-[192px] sm:w-[228px]"
                    >
                        <span
                            className={cn(
                                "text-center text-2xl sm:text-3xl leading-none sm:leading-[130%] font-normal",
                            )}
                        >
                            設定基本資料
                        </span>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onHandleSubmit)}
                            className="flex flex-col w-full gap-8 text-[16px] sm:text-[24px] pt-1 sm:pt-16"
                        >
                            <div
                                className={cn(
                                    "font-semibold underline text-[18px] sm:text-[24px]",
                                )}
                            >
                                請為您的項目頁面，設立登入名稱及密碼
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label isRequired size="sm">請提供有效電郵（同時作為登入名稱）</Label>
                                        <FormControl>
                                            <Input {...field} />
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
                                        <Label isRequired size="sm">請設定登入密碼（最少8個字元，需包括英文字母及數字）</Label>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label isRequired size="sm">請再次輸入密碼確認</Label>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div
                                className="font-semibold underline text-[18px] sm:text-[24px]"
                            >
                                聯絡人
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label isRequired size="sm">姓名（請以中文或英文填寫）</Label>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label isRequired size="sm">稱謂</Label>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label isRequired size="sm">電話（只接受本港之固網電話號碼）</Label>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="team"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label size="sm">所屬機構/團體/學校名稱（如適用）</Label>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between">
                                <Button className="bg-[var(--back-btn-color)] py-3 px-6 w-[128px] sm:w-[148px]">返回上一頁</Button>
                                <Button className="bg-[var(--next-btn-color)] py-3 px-6 w-[128px] sm:w-[148px]">下一步 <CircleChevronRight /></Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}