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
import { ChevronDown } from "lucide-react";
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

interface Props extends CreateCrowdProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const [date, setDate] = useState<Date | undefined>(
        new Date(2025, 6, 1)
    )

    const {
        hidden,
        fontSize,
        backBtn,
        finBtn
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
                    from: undefined,
                    to: undefined
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
                "flex w-full",
                hidden === "Y" && "opacity-50"
            )}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onHandleSubmit)}
                    className="flex flex-col w-full"
                    style={{
                        "--font-size": `${fontSize}px`
                    } as React.CSSProperties}
                >
                    <div>
                        筹款项目内容
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="item.chineseName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>中文名称</FormLabel>
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
                                <FormItem>
                                    <FormLabel>英文名称（如适用，以30个字母为上限）</FormLabel>
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
                                <FormItem>
                                    <FormLabel>起止日期（日期最少间隔两个星期）</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        `${format(field.value.from, "yyyy-MM-dd")} - ${format(field.value.to, "yyyy-MM-dd")}`
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
                                <FormItem>
                                    <FormLabel>筹款目标（港币）</FormLabel>
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
                    <div>请提供充足的内容，将有助于您的项目获得更多的捐款！</div>
                    <div>
                        <FormField
                            control={form.control}
                            name="desc.chineseDesc"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>中文</FormLabel>
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
                            name="desc.englishDesc"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>英文（如适用）</FormLabel>
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
                    <div>
                        别忘记为页面添加更具风格的视觉效果
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="image.avatar"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>头像</FormLabel>
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
                                    <FormLabel>项目背景图片</FormLabel>
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
                        <Button>返回上一页</Button>
                        <Button>完成并预览</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}