'use client'

import { Button } from '@/components/ui/button';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { Globe } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

export default function LocaleSwitch() {
    const currentLocale = useCurrentLocale()
    const changeLocale = useChangeLocale()

    return (
        <div className="flex items-center gap-2">
            <Select value={currentLocale} onValueChange={changeLocale}>
                <SelectTrigger>
                    <div
                        className="cursor-pointer"
                        onClick={() => changeLocale(currentLocale === 'en' ? 'sc' : 'en')}
                    >
                        <Globe />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="sc">简体中文</SelectItem>
                    <SelectItem value="tc">繁体中文</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}