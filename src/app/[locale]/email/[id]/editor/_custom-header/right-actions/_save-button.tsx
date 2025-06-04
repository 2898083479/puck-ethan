"use client";

import { Button } from "@/components/ui/button";
import { useCurrentLocale } from "@/locales";
import { useParams } from "next/navigation";
import { usePuck } from "@measured/puck";

export const SaveButton = () => {
    // Get the id from the url
    const { id } = useParams<{ id: string }>();
    const { appState } = usePuck();

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
    );
};
