import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const tips = [
  {
    num: '一',
    title: '主线先行，再展开探索',
    desc: '优先完成主线任务，熟悉游戏世界观与基础机制。主线会自然引导你经历多个区域，积累足够实力后再开展支线探索，避免过早踏入高难度区域。',
    tag: '新手必读',
    tagColor: '#c23b2a',
  },
  {
    num: '二',
    title: '掌握弹反，战力倍增',
    desc: '战斗系统以"响应式武术"为核心。掌握格挡弹反时机是通关强敌的关键——精准弹反能触发额外反击伤害且奖励丰厚。建议在普通敌人身上反复练习，找准节奏感。',
    tag: '战斗核心',
    tagColor: '#a8832e',
  },
  {
    num: '三',
    title: '找到手感再搭配流派',
    desc: '初期不必追求最强武器配置，先选一把手感合适的主武器深入钻研。在理解其节奏与特性后，再逐步扩展搭配组合。游戏支持高度自定义的武学流派系统。',
    tag: '武器系统',
    tagColor: '#a8832e',
  },
  {
    num: '四',
    title: 'NPC对话不可忽视',
    desc: '与路人、商贩、官差充分交谈，往往有意想不到的任务触发与情报获取。声望系统会影响NPC态度，声望高者可解锁更多互动内容，甚至进入封锁区域。',
    tag: '社交互动',
    tagColor: '#2e8868',
  },
  {
    num: '五',
    title: '善用时间与天气系统',
    desc: '世界随天气与时间动态变化。特定任务或稀有事件仅在夜晚、雨天等特定条件下触发，切勿错过。善用营地或客栈的等待功能来把握时机。',
    tag: '世界机制',
    tagColor: '#2e8868',
  },
  {
    num: '六',
    title: '理性面对悬赏缉拿',
    desc: '触犯当地法律会引发悬赏追缉。可选择缴纳赎金、逃离管辖区域，或通过特定任务洗清罪名。切勿与大量官兵强行对抗——量力而行是江湖生存的基本原则。',
    tag: '法律系统',
    tagColor: '#7a2016',
  },
  {
    num: '七',
    title: 'Xbox平台限时免费',
    desc: '自2026年6月8日起，Xbox Series X|S、Xbox Cloud Gaming及Xbox on PC平台支持免费游玩，可在微软商店直接下载体验。',
    tag: '平台情报',
    tagColor: '#185FA5',
  },
]

const quickRef = [
  { label: '游戏类型',   val: '开放世界动作RPG' },
  { label: '历史背景',   val: '五代十国末期 · 北宋初年' },
  { label: '开发商',     val: '网易游戏 Everstone Studio' },
  { label: '当前版本',   val: 'Ver 1.7（2026年6月更新）' },
  { label: '武器种类',   val: '8类（剑/枪/双刀/戟/扇/伞/弓/太极）' },
  { label: '主要BOSS',   val: '4位（寻心者/刀尊/虚空王/贪欲之神）' },
  { label: '地图区域',   val: '20+独特区域' },
  { label: '支持平台',   val: 'iOS / Android / PS5 / Steam / Xbox / PC' },
]

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="陆"
            title="新手指南"
            en="BEGINNER'S GUIDE"
            desc="踏入燕云十六声的世界之前，先读这七条要诀。无论你是第一次接触武侠RPG还是经验丰富的老手，这些建议都能帮助你更顺畅地开启江湖之旅。"
          />

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {tips.map((t) => (
              <div key={t.num} className="bg-ink-700 border border-ink-500 p-6 card-hover">
                <div className="flex items-start gap-4">
                  <span
                    className="text-4xl opacity-40 flex-shrink-0 leading-none"
                    style={{ fontFamily: 'var(--font-zcool)', color: '#c23b2a' }}
                  >
                    {t.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className="text-parchment-100 text-base tracking-widest"
                        style={{ fontFamily: 'var(--font-zcool)' }}
                      >
                        {t.title}
                      </h3>
                    </div>
                    <span
                      className="inline-block px-2 py-0.5 text-xs tracking-widest mb-3"
                      style={{ background: `${t.tagColor}22`, color: t.tagColor }}
                    >
                      {t.tag}
                    </span>
                    <p className="text-parchment-400 text-sm leading-7">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-ink-800 border border-ink-600 p-6 mb-6">
            <p className="text-gold-400 text-xs tracking-widest mb-5">快速参考数据</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickRef.map(r => (
                <div key={r.label} className="bg-ink-700 p-4 border border-ink-500">
                  <p className="text-xs text-ink-400 tracking-widest mb-1">{r.label}</p>
                  <p className="text-parchment-300 text-sm leading-6">{r.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="border border-gold-500 border-opacity-20 p-8 text-center"
            style={{ background: 'rgba(169,131,46,0.05)' }}
          >
            <blockquote
              className="text-parchment-300 text-xl mb-4 leading-9"
              style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.1em' }}
            >
              「江湖路远，切记：<br />
              每一个选择皆有其分量，<br />
              每一场战斗都在书写你的传奇。」
            </blockquote>
            <p className="text-ink-400 text-xs tracking-[0.3em]">— WHERE WINDS MEET · 官方描述</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
