import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const characters = [
  {
    id: 'lucky-seventeen',
    name: 'Lucky Seventeen',
    cn: '十七',
    role: '关键角色',
    color: '#c23b2a',
    initial: '十',
    tips: [
      '剧情关键推进角色，优先完成其相关任务线',
      '对话时留意隐藏选项，可解锁额外剧情分支',
    ],
  },
  {
    id: 'tian-ying',
    name: 'Tian Ying',
    cn: '天鹰',
    role: '关键角色',
    color: '#a8832e',
    initial: '鹰',
    tips: [
      '"天鹰"之名暗示其与高处、俯瞰相关的特质',
      '建议在主线推进到中期后重点互动',
    ],
  },
  {
    id: 'ye-wanshan',
    name: 'Ye Wanshan',
    cn: '叶挽山',
    role: '关键角色',
    color: '#2e8868',
    initial: '山',
    tips: [
      '"挽山"之名富有诗意，暗示其在地理或势力上的重要位置',
      '与其互动可能影响地区势力走向',
    ],
  },
  {
    id: 'qianye',
    name: 'Qianye',
    cn: '倩叶',
    role: '关键角色',
    color: '#7a2016',
    initial: '叶',
    tips: [
      '人物关系较为复杂，需留意与其他角色的互动细节',
      '可能隐藏有特殊道具赠予或任务线索',
    ],
  },
  {
    id: 'zheng-e',
    name: 'Zheng E',
    cn: '郑鄂',
    role: '关键角色',
    color: '#564838',
    initial: '郑',
    tips: [
      '个性刚毅，对话风格偏武人直率',
      '可能提供战斗相关的实用信息或训练机会',
    ],
  },
  {
    id: 'murong-yuan',
    name: 'Murong Yuan',
    cn: '慕容远',
    role: '关键角色',
    color: '#185FA5',
    initial: '慕',
    tips: [
      '慕容为历史上的名门大族，"远"字暗示其志向深远',
      '注意其在政治线剧情中的立场变化',
    ],
  },
]

export default function CharactersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="贰"
            title="角色图鉴"
            en="CHARACTERS"
            desc="以下为游戏中登场的重要角色，数据来源自官方国际站。角色互动对剧情走向有深远影响，建议充分探索每位角色的对话与任务线。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((c) => (
              <div key={c.id} className="bg-ink-700 border border-ink-500 overflow-hidden card-hover group">
                <div className="h-1" style={{ background: c.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl text-parchment-100 border-2 flex-shrink-0"
                      style={{
                        background: `${c.color}22`,
                        borderColor: c.color,
                        fontFamily: 'var(--font-zcool)',
                      }}
                    >
                      {c.initial}
                    </div>
                    <div>
                      <h3
                        className="text-parchment-100 text-lg tracking-widest"
                        style={{ fontFamily: 'var(--font-zcool)' }}
                      >
                        {c.cn}
                      </h3>
                      <p className="text-ink-400 text-xs tracking-[0.2em] mt-0.5">{c.name}</p>
                      <span
                        className="inline-block mt-1 px-2 py-0.5 text-xs tracking-wider"
                        style={{ background: `${c.color}22`, color: c.color, border: `1px solid ${c.color}44` }}
                      >
                        {c.role}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-ink-400 tracking-widest mb-2">攻略要点</p>
                    {c.tips.map((t, i) => (
                      <div key={i} className="flex gap-2 text-sm text-parchment-400 leading-6">
                        <span className="text-cinnabar-500 flex-shrink-0 mt-0.5">◈</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink-700 border border-ink-500 p-6">
            <p className="text-xs text-gold-400 tracking-widest mb-3">通用角色攻略</p>
            <ul className="space-y-3">
              {[
                '与角色建立关系将影响剧情走向及结局分支，建议反复对话挖掘隐藏任务',
                '某些角色对话中隐藏有珍稀道具线报与秘密任务触发条件',
                '玩家的声望值会影响不同角色对主角的态度，进而改变对话内容与可接任务类型',
                '官方仍在持续更新内容，关注官网获取最新角色情报',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm text-parchment-400 leading-7">
                  <span className="text-gold-400 font-title text-base flex-shrink-0">{i + 1}</span>
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
