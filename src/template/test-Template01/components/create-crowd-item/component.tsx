import type { CreateCrowdProps } from ".";
import {
    Form,
    FormLabel,
    FormField,
    FormItem,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, CircleChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { merge } from "ts-deepmerge";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { UploadImage } from "@/core/ui/avatar";
import { Label } from "@/core/ui/label";

interface Props extends CreateCrowdProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        backBtn,
        finBtn,
        typo,
        title,
        flag
    } = merge(DefaultProps, props) as CreateCrowdProps;

    const itemSchema = z.object({
        chineseName: z
            .string()
            .min(1, { message: "The chineseName must required" }),
        englishName: z
            .string().optional(),
        datetime: z.object({
            from: z.date({ message: "A date of from is required" }),
            to: z.date({ message: "A date of to is required" })
        }).refine((data) => {

        }),
        crowdObject: z.number()
    });

    const descSchema = z.object({
        chineseDesc: z
            .string()
            .min(1, { message: "The chineseDesc must requireds" }),
        englishDesc: z
            .string()
            .optional()
    });

    const imageSchema = z.object({
        avatar: z
            .object({
                filePath: z.string(),
                avatarAccessUrl: z.string()
            }).refine((data) => {
                if (data.filePath !== "" && data.avatarAccessUrl !== "") return;
                return "The Avatar required!"
            }),
        background: z
            .object({
                filePath: z.string(),
                backgroundAccessUrl: z.string()
            }).refine((data) => {
                if (data.filePath !== "" && data.backgroundAccessUrl !== "") return;
                return "The Avatar required!"
            })
    });

    const formSchema = z.object({
        item: itemSchema,
        desc: descSchema,
        image: imageSchema
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            item: {
                chineseName: "",
                englishName: "",
                datetime: {
                    from: new Date(),
                    to: new Date()
                },
                crowdObject: 0,
            },
            desc: {
                chineseDesc: "",
                englishDesc: "",
            },
            image: {
                avatar: {
                    filePath: "",
                    avatarAccessUrl: ""
                },
                background: {
                    filePath: "",
                    backgroundAccessUrl: ""
                }
            }
        }
    })

    const onHandleSubmit = async (formData: z.infer<typeof formSchema>) => {
        console.log(formData);
    }

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex w-full items-center justify-center py-10 px-10",
                hidden === "Y" && "opacity-50"
            )}
            style={{
                "--back-btn": backBtn,
                "--fin-btn": finBtn,
                "--font-weight": typo.weight,
                "--font-size": typo.size,
                "--font-line-height": typo.lineHeight,
                "--font-spacing": typo.spacing,
                "--font-align": typo.align,
                "--font-decoration": typo.decoration
            } as React.CSSProperties}
        >
            <div className="sm:max-w-[798px] w-full">
                <div className="relative flex flex-col items-center gap-4 sm:gap-8 px-4 pb-4 sm:pb-8 sm:px-8 sm:py-12 bg-white rounded-3xl border border-red-400">
                    <div className="initial inline-block sm:absolute translate-y-[-40px] sm:translate-y-[unset] sm:top-[-32px] sm:left-[32px] px-6 py-3 bg-blue-200 rounded-[44px] z-10">
                        <span
                            className={cn(
                                "text-center text-2xl sm:text-3xl leading-none sm:leading-[130%] font-normal",
                            )}
                        >
                            {title}
                        </span>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onHandleSubmit)}
                            className="max-x-[700px] flex flex-col w-full justify-center gap-8"
                        >
                            <div
                                className="text-[16px] sm:text-[24px] font-[var(--font-weight)]"
                                style={{
                                    textDecoration: "var(--font-decoration)"
                                }}
                            >
                                筹款项目内容
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField
                                    control={form.control}
                                    name="item.chineseName"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col h-full justify-between">
                                            <Label isRequired size="sm">中文名称</Label>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="请输入"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="item.englishName"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col h-full justify-between">
                                            <Label size="sm">英文名称（如适用，以30个字母为上限）</Label>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="请输入"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="item.datetime"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col h-full justify-between">
                                            <Label isRequired size="sm">起止日期（日期最少间隔两个星期）</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            className={cn(
                                                                "text-left font-normal w-full",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                `${format(field.value.from, "yyyy/MM/dd")} - ${format(field.value.to, "yyyy/MM/dd")}`
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        numberOfMonths={2}
                                                        selected={field.value.from}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                        captionLayout="dropdown"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="item.crowdObject"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col h-full justify-between">
                                            <Label isRequired size="sm">筹款目标（港币）</Label>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="请输入"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div
                                className="text-[16px] sm:text-[24px]"
                                style={{
                                    fontWeight: "var(--font-weight)",
                                    textDecoration: "var(--font-decoration)"
                                }}
                            >
                                请提供充足的内容，将有助于您的项目获得更多的捐款！
                            </div>
                            <div className="flex flex-col gap-8">
                                <FormField
                                    control={form.control}
                                    name="desc.chineseDesc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label isRequired size="sm">中文</Label>
                                            <FormControl>
                                                <Textarea
                                                    className="h-[180px] resize-none"
                                                    {...field}
                                                    placeholder="请输入"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="desc.englishDesc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label size="sm">英文（如适用）</Label>
                                            <FormControl>
                                                <Textarea
                                                    className="h-[180px] resize-none"
                                                    {...field}
                                                    placeholder="请输入"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div
                                className="text-[16px] sm:text-[24px]"
                                style={{
                                    fontWeight: "var(--font-weight)",
                                    textDecoration: "var(--font-decoration)"
                                }}
                            >
                                别忘记为页面添加更具风格的视觉效果
                            </div>
                            <div className="flex flex-col gap-8">
                                <FormField
                                    control={form.control}
                                    name="image.avatar"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label isRequired size="sm">头像</Label>
                                            <FormControl>
                                                <UploadImage
                                                    value={field.value.filePath}
                                                    imageAccessUrl={form.getValues("image.avatar.avatarAccessUrl")}
                                                    flag="avatar"
                                                    onChange={(file) => {
                                                        field.onChange(file?.filePath);
                                                        form.setValue(
                                                            "image.avatar.avatarAccessUrl",
                                                            file?.accessUrl || "",
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image.background"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Label isRequired size="sm">项目背景图片</Label>
                                            <FormControl>
                                                <UploadImage
                                                    value={field.value.filePath}
                                                    imageAccessUrl={form.getValues("image.background.backgroundAccessUrl")}
                                                    flag="background"
                                                    onChange={(file) => {
                                                        field.onChange(file?.filePath);
                                                        form.setValue(
                                                            "image.background.backgroundAccessUrl",
                                                            file?.accessUrl || "",
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <Button
                                    style={{ backgroundColor: "var(--back-btn)" }}
                                >
                                    返回上一页
                                </Button>
                                <Button
                                    style={{ backgroundColor: "var(--fin-btn)" }}
                                >
                                    完成并预览<CircleChevronRight />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>

        </div>
    )
}