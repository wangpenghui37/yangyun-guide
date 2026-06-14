import type { Metadata } from 'next'
import { ZCOOL_XiaoWei, Noto_Serif_SC } from 'next/font/google'
import './globals.css'

const zcool = ZCOOL_XiaoWei({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zcool',
  display: 'swap',
})

const noto = Noto_Serif_SC({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '燕云十六声攻略站 | Where Winds Meet Guide',
  description: '燕云十六声综合游戏攻略站，包含角色图鉴、武器攻略、BOSS攻略、地区探索与新手指南。',
  keywords: ['燕云十六声', '攻略', 'Where Winds Meet', '游戏攻略', '武器', 'BOSS'],
  openGraph: {
    title: '燕云十六声攻略站',
    description: '五代十国乱世，一剑书写传奇。最全开放世界武侠RPG攻略。',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${zcool.variable} ${noto.variable}`}>
      <body className="min-h-screen bg-ink-900">{children}</body>
    </html>
  )
}
