'use client'

import { useI18n } from '@/locales/client'
 
export default function Page() {
  const t = useI18n()
 
  return (
    <div>
      <p>{t('test.en_us.title')}</p>
      <p>{t('test.en_us.description')}</p>
    </div>
  )
}