import { LoaderIcon, PencilIcon, PlusIcon, ImageUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const MAX_AVATAR_FILE_SIZE = 4 * 512 * 1024; // < 2MB
const MAX_BACKGROUND_FILE_SIZE = 9 * 512 * 1024; // < 5MB

export const UploadImage = ({
    value,
    imageAccessUrl,
    flag,
    className,
    onChange
}: {
    value: string;
    imageAccessUrl: string;
    flag: "avatar" | "background"
    className?: string,
    onChange: (props: { filePath: string; accessUrl?: string }) => void;
}) => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [filePath, setFilePath] = useState<string>("");
    const [accessUrl, setAccessUrl] = useState<string>("");

    const randomId = crypto.randomUUID();

    const uploadAvatar = async (flag: string, file: File) => {
        const maxSize = flag === "avatar" ? MAX_AVATAR_FILE_SIZE : MAX_BACKGROUND_FILE_SIZE;
        if (file.size > maxSize) {
            toast.error("");
            return;
        }

        // if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        //     toast.error(Constants.file_type_not_accepted[lang]);
        //     return;
        // }

        // setIsSubmitting(true);
        // const { code, data, message } = await uploadImageAPI({
        //     file,
        //     field: "event",
        // });
        // if (code !== ResponseStatusCode.OPERATING_SUCCESSFULLY) {
        //     if (code === ResponseStatusCode.SYSTEM_ERROR) return;
        //     toast.error(message);
        //     return;
        // }
        // const filePath = data?.filePath;
        // const accessUrl = data?.accessUrl;
        // setAccessUrl(accessUrl);
        // setFilePath(filePath);
        // setIsSubmitting(false);
        // onChange({ filePath, accessUrl });
    };

    return (
        <div
            className="shrink-0 rounded-2xl overflow-hidden border border-border relative"
            style={{
                maxWidth: flag === "avatar" ? "250px" : "740px",
                height: flag === "avatar" ? "250px" : "413px",
            }}
        >
            <div className="flex items-center justify-center w-full h-full">
                {
                    isSubmitting ? (
                        <div className="flex items-center justify-center w-full h-full bg-black text-white">
                            <LoaderIcon className="animate-spin size-8" />
                        </div>
                    ) : (
                        <>
                            {
                                accessUrl ? (
                                    <div
                                        className="relative"
                                        onClick={() =>
                                            onChange({ filePath, accessUrl })
                                        }
                                    >
                                        <Avatar
                                            src={accessUrl}
                                            alt="uploaded-avatar"
                                            flag={flag}
                                            isActive={value === filePath}
                                        />
                                        <div
                                            className="absolute bottom-0 right-0 left-0 h-8 bg-black/50 text-white flex items-center justify-center cursor-pointer"
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        `avatar-upload-${randomId}`,
                                                    )
                                                    ?.click();
                                            }}
                                        >
                                            <PencilIcon size={20} />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="flex items-center justify-center w-full h-full cursor-pointer bg-[#F8FAFC]"
                                        style={{
                                            border: "3px dashed #94A3B8"
                                        }}
                                        onClick={() => {
                                            document.getElementById(
                                                `avatar-upload=${randomId}`,
                                            )
                                                ?.click();
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center text-[#94A3B8]">
                                            <ImageUp size={25} />
                                            {
                                                flag === "avatar" ? (
                                                    <>
                                                        <p>建议上传尺寸：</p>
                                                        <p>800*800， 小于 2MB</p>
                                                    </>
                                                ) : (
                                                    <p>建议上传尺寸：1920*1080， 小于 5MB</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                }
                <input
                    type="file"
                    id={`avatar-upload-${randomId}`}
                    accept={ACCEPTED_FILE_TYPES.join(",")}
                    className="hidden"
                    onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        await uploadAvatar(flag, file);
                        e.target.value = "";
                    }}
                />
            </div>
        </div>
    )
}

const Avatar = ({
    src,
    alt,
    isActive,
    flag,
    onClick,
}: { src: string; alt: string; isActive: boolean; flag: string; onClick?: () => void }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div
            className={cn(
                "shrink-0 rounded-full overflow-hidden relative border-2 border-transparent",
                isActive && "border-[#090909]",
            )}
            style={{
                width: flag === "avatar" ? "clamp(172px, 50vw, 250px)" : "clamp(311px, 90vw, 704px)",
                height: flag === "avatar" ? "clamp(172px, 50vw, 250px)" : "clamp(209px, 90vw, 413px)",
            }}
            onClick={onClick}
        >
            <Skeleton
                className={cn("absolute inset-0 z-10", !isLoading && "hidden")}
            />
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
                onLoadStart={() => setIsLoading(true)}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
