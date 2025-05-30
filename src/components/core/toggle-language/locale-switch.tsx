"use client";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    LANGUAGES,
    useChangeLocale,
    useCurrentLocale,
} from "@/locales";
import { GrLanguage } from "react-icons/gr";
import { useI18n } from "@/locales";

export const ToggleLanguage = () => {
    const t = useI18n();
    const changeLanguage = useChangeLocale({
        preserveSearchParams: true,
    });
    const language = useCurrentLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="size-5 min-w-5 min-h-5 text-[20px]">
                <GrLanguage />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {LANGUAGES.map((lang, index) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={lang}
                            checked={language === lang}
                            onClick={() => changeLanguage(lang)}
                        >
                            {t(`root.language.${lang}`)}
                        </DropdownMenuCheckboxItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};