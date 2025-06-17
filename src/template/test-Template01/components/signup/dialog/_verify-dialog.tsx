import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { Contants } from "../contants";
import { useCurrentLocale } from "@/locales";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const reSendCode = useCallback(() => {
    console.log("重新发送验证码")
}, [])

export const VerifyDialog = ({ open, onOpenChange }: Props) => {
    const lang = useCurrentLocale();
    const [vCode, setVCode] = useState<string>("");
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogOverlay />
            <DialogContent>
                <DialogHeader>
                    {Contants.dialog[lang].title}
                </DialogHeader>
                <div>
                    <div>{Contants.dialog[lang].description}</div>
                    <div>
                        <Input
                            type="text"
                            value={vCode}
                            onChange={(e) => setVCode(e.target.value)}
                            placeholder={Contants.dialog[lang].placeholder}
                            endContent={
                                <span
                                    className="cursor-pointer"
                                    onClick={reSendCode}
                                >
                                    {Contants.dialog[lang].reSendCode}
                                </span>
                            }
                        />
                    </div>
                </div>
                <DialogFooter className="flex justify-end">
                    <Button>
                        {Contants.dialog[lang].confirm}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}