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
            <div
                className="flex flex-col w-full "
                style={{
                    position: "relative",           //父容器設為relative，讓子元素可以absolute定位
                    maxWidth: "768px",
                    padding: "32px 32px 48px 32px", //預留頂部空間
                    borderRadius: "16px",
                    border: "1px solid #FFDE59",
                    marginTop: "30px",              //防止標題被截斷
                }}
            >
                <div
                    className="rounded-full"
                    style={{
                        position: "absolute",
                        top: "-40px",
                        left: "20px",
                        backgroundColor: "#FFDE59",
                        padding: "24px 12px",
                        fontSize: "var(--font-size)",
                        fontWeight: "var(--font-weight)",
                    }}
                >
                    設定基本資料
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onHandleSubmit)}
                        className="flex flex-col w-full max-w-2xl mx-auto"
                        style={{
                            gap: "32px"
                        }}
                    >
                        <div>請為您的項目頁面，設立登入名稱及密碼</div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>請提供有效電郵（同時作為登入名稱）</FormLabel>
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
                                    <FormLabel>請設定登入密碼（最少8個字元，需包括英文字母及數字）</FormLabel>
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
                                    <FormLabel>請再次輸入密碼確認</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>聯絡人</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>姓名（請以中文或英文填寫）</FormLabel>
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
                                        <FormLabel>稱謂</FormLabel>
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
                                    <FormLabel>電話（只接受本港之固網電話號碼）</FormLabel>
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
                                    <FormLabel>所屬機構/團體/學校名稱（如適用）</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-row justify-between">
                            <Button style={{ backgroundColor: "var(--back-btn-color)" }}>返回上一頁</Button>
                            <Button style={{ backgroundColor: "var(--next-btn-color)" }}>下一步</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}