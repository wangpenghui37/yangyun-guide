import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const quickLinks = [
  { href: '/characters', icon: '人', label: '角色图鉴', en: 'Characters', desc: '6位关键角色详解' },
  { href: '/weapons',    icon: '剑', label: '武器攻略', en: 'Weapons',    desc: '八大武器风格解析' },
  { href: '/bosses',     icon: '尊', label: 'BOSS秘典', en: 'Bosses',     desc: '四大强敌克制之道' },
  { href: '/regions',    icon: '图', label: '地区探索', en: 'Regions',    desc: '20+区域探索指南' },
  { href: '/guide',      icon: '典', label: '新手指南', en: 'Guide',      desc: '入门必读七要诀' },
]

const highlights = [
  { icon: '⚔', label: '流派自定义', desc: '八类武器自由搭配，打造专属武学风格' },
  { icon: '🌍', label: '开放世界',  desc: '20+独特区域，世界随天气时间动态演变' },
  { icon: '📜', label: '历史沉浸',  desc: '五代十国乱世，百工文化深度还原' },
  { icon: '🎭', label: '自由抉择',  desc: '每个选择皆有分量，书写专属传奇' },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="0,500 100,280 200,350 320,200 440,300 560,150 680,260 800,120 920,220 1040,170 1160,280 1280,200 1440,260 1440,500"
              fill="#161210" opacity="0.8"
            />
            <polygon
              points="0,500 80,350 200,400 340,280 460,360 600,240 720,320 860,200 980,300 1100,250 1220,340 1360,280 1440,320 1440,500"
              fill="#1e1a16" opacity="0.9"
            />
            <polygon
              points="0,500 0,430 120,445 240,415 400,435 560,408 720,428 880,400 1040,420 1200,408 1360,435 1440,415 1440,500"
              fill="#0d0b09"
            />
            <circle cx="1100" cy="120" r="60" fill="#1e1a16" opacity="0.6" />
            <circle cx="1100" cy="120" r="54" fill="none" stroke="#3d3328" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(194,59,42,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 text-center px-4" style={{ animation: 'fadeUp 0.8s ease both' }}>
          <p className="text-xs text-gold-400 tracking-[0.5em] mb-6 opacity-80">五代十国 · 乱世江湖</p>

          <h1
            className="text-shimmer mb-3"
            style={{
              fontFamily: 'var(--font-zcool)',
              fontSize: 'clamp(56px, 10vw, 96px)',
              letterSpacing: '0.2em',
              lineHeight: 1.1,
            }}
          >
            燕云十六声
          </h1>

          <p className="text-parchment-400 tracking-[0.4em] text-sm mb-2" style={{ fontFamily: 'var(--font-zcool)' }}>
            WHERE WINDS MEET
          </p>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #a8832e)' }} />
            <span className="text-gold-400 text-xs tracking-widest">综合游戏攻略站</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #a8832e)' }} />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/guide"
              className="px-8 py-3 bg-cinnabar-500 hover:bg-cinnabar-400 text-parchment-100 text-sm tracking-widest transition-all duration-200"
              style={{ fontFamily: 'var(--font-zcool)' }}
            >
              新手入门 →
            </Link>
            <Link
              href="/characters"
              className="px-8 py-3 border border-parchment-400 text-parchment-300 hover:border-parchment-200 hover:text-parchment-100 text-sm tracking-widest transition-all duration-200"
              style={{ fontFamily: 'var(--font-zcool)' }}
            >
              查阅图鉴
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 px-3 py-1 border border-ink-500 text-ink-400 text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-jade-400 inline-block" style={{ animation: 'pulse 2s infinite' }} />
            Version 1.7 · 2026年6月更新
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <span className="text-xs tracking-widest">向下探索</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-20 px-4 bg-ink-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gold-400 tracking-[0.4em] mb-3">攻略索引</p>
            <h2
              className="text-parchment-100 text-2xl tracking-widest"
              style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.2em' }}
            >
              江湖秘典
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative bg-ink-700 border border-ink-500 p-5 text-center card-hover overflow-hidden"
              >
                <div className="text-3xl text-cinnabar-400 mb-3 opacity-70" style={{ fontFamily: 'var(--font-zcool)' }}>
                  {l.icon}
                </div>
                <div className="text-parchment-200 text-base mb-1 tracking-widest" style={{ fontFamily: 'var(--font-zcool)' }}>
                  {l.label}
                </div>
                <div className="text-xs text-ink-400 tracking-widest mb-2">{l.en}</div>
                <div className="text-xs text-parchment-400">{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Game intro */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-cinnabar-400 tracking-[0.4em] mb-4">GAME OVERVIEW</p>
              <h2
                className="text-parchment-100 text-3xl mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.15em' }}
              >
                一剑在手，<br />
                <span className="text-gold-gradient">乱世由我书写</span>
              </h2>
              <p className="text-parchment-400 text-sm leading-8 mb-4">
                《燕云十六声》是由网易游戏 Everstone Studio 出品的开放世界动作角色扮演游戏，背景设定于十世纪中国五代十国末期至北宋初年。
              </p>
              <p className="text-parchment-400 text-sm leading-8 mb-8">
                玩家扮演一名年轻剑客，深入调查被遗忘的真相与自身身世之谜，在政治阴谋与权力纷争交织的乱世中书写属于自己的传奇。每一个选择皆有分量。
              </p>
              <div className="flex flex-wrap gap-2">
                {['iOS', 'Android', 'PS5', 'Steam', 'Epic', 'Xbox', 'PC'].map(p => (
                  <span key={p} className="px-3 py-1 border border-ink-500 text-ink-400 text-xs tracking-wider">{p}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-ink-700 border border-ink-500 p-5">
                  <div className="text-2xl mb-3">{h.icon}</div>
                  <div className="text-parchment-200 text-sm mb-2 tracking-widest" style={{ fontFamily: 'var(--font-zcool)' }}>
                    {h.label}
                  </div>
                  <div className="text-parchment-400 text-xs leading-6">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-ink-800 border-y border-ink-600">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-parchment-300 text-lg mb-4 leading-9"
            style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.1em' }}
          >
            「乱世江湖，刀剑与笔墨同行。<br />
            燕云十六州之间，何处是归途？」
          </blockquote>
          <p className="text-ink-400 text-xs tracking-widest">— WHERE WINDS MEET</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
