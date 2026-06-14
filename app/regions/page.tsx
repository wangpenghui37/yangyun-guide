import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const regions = [
  {
    cn: '清河',
    en: 'Qinghe',
    type: '水乡泽国',
    level: '初期区域',
    levelColor: '#2e8868',
    desc: '水乡泽国，河流纵横，是重要的贸易与文化交汇之地。清河商路兴盛，形形色色的旅人在此驻足，情报与商机并存。',
    highlights: ['水路隐藏道路众多', '夜间河面有特殊事件', '船夫可提供独家任务线索'],
    features: ['集市贸易', '水路探索', '情报收集'],
  },
  {
    cn: '开封',
    en: 'Kaifeng',
    type: '皇城重镇',
    level: '中期区域',
    levelColor: '#a8832e',
    desc: '五代十国末期的繁华皇城，政治中枢所在，市集林立，人口密集。城内势力错综复杂，官兵巡逻严密，是打探情报与购置稀有装备的最佳场所。',
    highlights: ['稀有武器装备可在此购置', '多条主线任务在此汇聚', '夜间城内有隐秘活动'],
    features: ['政治枢纽', '稀有商铺', '主线核心'],
  },
  {
    cn: '河西',
    en: 'Hexi',
    type: '戈壁异域',
    level: '后期区域',
    levelColor: '#c23b2a',
    desc: '戈壁荒漠与古代丝路通道交汇之地，风沙弥漫，异域风情浓厚。此地隐藏着独特的武学传承与上古秘密，是高等级玩家深入探索的绝佳目的地。',
    highlights: ['独特武学传承隐藏于此', '上古秘密与隐藏剧情', '高等级材料与道具'],
    features: ['异域探索', '武学秘籍', '高难副本'],
  },
]

export default function RegionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="伍"
            title="地区探索"
            en="REGIONS"
            desc="游戏拥有超过20片独特地图区域，涵盖皇城、寺庙、荒野、水乡等多元场景。以下为目前已知的主要地区信息，更多区域将随主线推进逐步开放。"
          />

          <div className="space-y-6 mb-10">
            {regions.map((r) => (
              <div key={r.cn} className="bg-ink-700 border border-ink-500 overflow-hidden card-hover">
                <div className="flex">
                  <div
                    className="w-1 flex-shrink-0"
                    style={{ background: r.levelColor }}
                  />
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <h3
                            className="text-parchment-100 text-2xl tracking-widest"
                            style={{ fontFamily: 'var(--font-zcool)' }}
                          >
                            {r.cn}
                          </h3>
                          <span className="text-ink-400 text-xs tracking-[0.3em]">{r.en}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-parchment-400 text-xs">{r.type}</span>
                          <span className="text-ink-600">·</span>
                          <span
                            className="text-xs px-2 py-0.5"
                            style={{ color: r.levelColor, background: `${r.levelColor}18` }}
                          >
                            {r.level}
                          </span>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-wrap gap-2">
                        {r.features.map(f => (
                          <span key={f} className="px-2 py-0.5 border border-ink-500 text-ink-400 text-xs">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-parchment-400 text-sm leading-7 mb-5">{r.desc}</p>

                    <div>
                      <p className="text-xs text-gold-400 tracking-widest mb-2">探索亮点</p>
                      <ul className="space-y-1.5">
                        {r.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2 text-sm text-parchment-400">
                            <span className="text-cinnabar-500">◈</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-ink-800 border border-ink-600 p-6 mb-6">
            <p className="text-xs text-parchment-400 tracking-widest mb-4">🗺 游戏共有 20+ 独特地图区域</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {['皇城重镇', '寺庙禅院', '荒野山林', '水乡泽国', '戈壁异域', '市井街巷', '山间隘口', '更多待探索'].map(t => (
                <div key={t} className="bg-ink-700 border border-ink-600 py-3 px-2 text-xs text-parchment-400 tracking-wider">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink-700 border border-ink-500 p-6">
            <p className="text-gold-400 text-xs tracking-widest mb-4">通用探索攻略</p>
            <ul className="space-y-3">
              {[
                '地图区域将随时间、天气和玩家行动动态演变，建议多时段探索同一区域',
                '悬崖峭壁、地下暗道、废弃祠堂中往往藏有珍稀道具与支线剧情触发点',
                '某些区域仅在特定天气（雨天、沙暴）或时间（夜晚、黄昏）下开放隐藏内容',
                '与当地NPC充分对话，可解锁区域专属地图标注与特殊任务线索',
                '声望系统影响各区域居民态度，不同声望等级可进入不同的封锁区域',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm text-parchment-400 leading-7">
                  <span className="text-cinnabar-500 flex-shrink-0">{i + 1}.</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
