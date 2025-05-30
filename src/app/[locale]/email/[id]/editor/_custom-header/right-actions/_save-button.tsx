"use client"

import { Button } from "@/components/ui/button";
import { useCurrentLocale } from "@/locales";

export const SaveButton = () => {

    const lang = useCurrentLocale();

    return (
        <Button
            variant="secondary"
            className="text-tp hover:text-ts"
            onClick={() => {
                console.log(lang);
            }}
        >
            Save
        </Button>
    )
}