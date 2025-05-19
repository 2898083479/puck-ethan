import { ReactElement } from 'react'
import { I18nProviderClient } from '@/locales/client'
import LocaleSwitch from '@/components/core/locale-switch'

export default async function LayoutClient({
    params, children
}: {
    params: Promise<{ locale: string }>,
    children: ReactElement
}) {
    const { locale } = await params
    return (
        <I18nProviderClient locale={locale}>
            <div className="flex items-center justify-end">
                <LocaleSwitch />
            </div>
            <div>
                {children}
            </div>
        </I18nProviderClient>
    )
}
