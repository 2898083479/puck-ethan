import { createI18nServer } from 'next-international/server'
 
export const { 
    getI18n, 
    getScopedI18n,
    getStaticParams,
    getCurrentLocale,
} = createI18nServer({
  en: () => import('./en-US'),
  sc: () => import('./zh-CN'),
  tc: () => import('./zh-HK')
})