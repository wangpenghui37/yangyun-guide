import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const bosses = [
  {
    en: 'Heartseeker',
    cn: '寻心者',
    difficulty: '中等',
    diffColor: '#a8832e',
    phases: 2,
    desc: '以心为目标的神秘强敌，攻击往往精准指向要害。行动路线不可预测，但每次重击前有明显蓄力前摇。',
    weaknesses: ['弓箭远程骚扰', '蓄力弹反窗口'],
    tactics: [
      '全程保持走位，不要原地与其对峙',
      '观察其攻击前的蓄力动作，把握弹反时机',
      '保留气力值用于关键时刻的紧急回避',
      '第二阶段攻击速度加快，需提高走位频率',
    ],
  },
  {
    en: 'Dao Lord',
    cn: '刀尊',
    difficulty: '困难',
    diffColor: '#c23b2a',
    phases: 3,
    desc: '刀道至尊，出刀势大力沉，范围攻击极具压迫感。其刀法来自对"刀道"的极致追求，每一击皆凛然生威。',
    weaknesses: ['伞法弹反', '拉开距离待机'],
    tactics: [
      '切勿强行硬接其连段攻击，等待破绽',
      '使用「伞」或「戟」与之周旋效果最佳',
      '第二阶段会出现范围刀气，需横向移动规避',
      '第三阶段破防后有较长硬直，集中输出',
    ],
  },
  {
    en: 'The Void King',
    cn: '虚空王',
    difficulty: '高难',
    diffColor: '#9e2e1e',
    phases: 3,
    desc: '统御虚空之力的王者，可操控空间扭曲与瞬移，令人防不胜防。其攻击没有固定规律，强调对玩家适应性的考验。',
    weaknesses: ['远程持续消耗', '规律性瞬移后的空档'],
    tactics: [
      '准备充足气血恢复道具，这场战斗消耗极大',
      '以「弓」进行远程骚扰，减少近战硬碰机会',
      '虚空王瞬移后会有短暂定位位置的空档，抓准时机输出',
      '关注其身上的空间扭曲特效，预判下次瞬移方向',
    ],
  },
  {
    en: 'God of Avarice',
    cn: '贪欲之神',
    difficulty: '极难',
    diffColor: '#7a2016',
    phases: 4,
    desc: '贪婪欲望化身的神明，拥有多阶段形态转换。其每个阶段的攻击模式与弱点都大相径庭，考验玩家的全面适应能力。',
    weaknesses: ['内功修炼加成', '阶段转换时的破绽'],
    tactics: [
      '前期阶段积累优势，保留关键技能应对后期变身',
      '内功修炼越深厚，对其抗性与反制效果越强',
      '每次形态转换时有较长的切换动画，是最佳输出窗口',
      '建议至少通关一次后再挑战，了解全阶段机制',
    ],
  },
]

const diffMap: Record<string, string> = {
  '中等': 'bg-amber-900 text-amber-300',
  '困难': 'bg-red-900 text-red-300',
  '高难': 'bg-red-950 text-red-200',
  '极难': 'bg-red-950 text-red-100',
}

export default function BossesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="肆"
            title="BOSS秘典"
            en="BOSS GUIDE"
            desc="游戏中登场的四大强敌，数据来源自官方国际站。每位BOSS各有其独特机制与弱点，知己知彼方能百战百胜。"
          />

          <div className="space-y-6">
            {bosses.map((b) => (
              <div key={b.cn} className="bg-ink-800 border border-ink-600 overflow-hidden">
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${b.diffColor}, transparent)` }} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start gap-4 mb-5">
                    <div>
                      <h3
                        className="text-parchment-100 text-2xl tracking-widest mb-1"
                        style={{ fontFamily: 'var(--font-zcool)' }}
                      >
                        {b.cn}
                      </h3>
                      <p className="text-ink-400 text-xs tracking-[0.3em]">{b.en}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-3">
                      <span className="text-xs text-ink-400 tracking-widest">{b.phases}阶段</span>
                      <span className={`px-3 py-1 text-xs tracking-widest ${diffMap[b.difficulty]}`}>
                        {b.difficulty}
                      </span>
                    </div>
                  </div>

                  <p className="text-parchment-400 text-sm leading-7 mb-6">{b.desc}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-gold-400 tracking-widest mb-3">弱点 / 克制方式</p>
                      <div className="flex flex-wrap gap-2">
                        {b.weaknesses.map(w => (
                          <span
                            key={w}
                            className="px-3 py-1 border text-xs tracking-wide"
                            style={{ borderColor: `${b.diffColor}44`, color: b.diffColor, background: `${b.diffColor}11` }}
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-cinnabar-400 tracking-widest mb-3">实战攻略要点</p>
                      <ul className="space-y-2">
                        {b.tactics.map((t, i) => (
                          <li key={i} className="flex gap-2 text-sm text-parchment-400 leading-6">
                            <span className="text-cinnabar-500 flex-shrink-0">{i + 1}.</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-ink-700 border border-cinnabar-600 border-opacity-30 p-6">
            <p className="text-cinnabar-400 text-xs tracking-widest mb-3">通用BOSS战建议</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-parchment-400 leading-7">
              <p>◈ 战前务必备足气血恢复道具，充分利用营地休息功能补满状态</p>
              <p>◈ 观察BOSS三到五次攻击模式后再尝试输出，切忌莽撞强攻</p>
              <p>◈ 内功修炼越深，对各类BOSS的抗性加成越明显，建议先提升内功再挑战</p>
              <p>◈ 每位BOSS均有"怒气值"机制，怒气满时攻击强化但也会出现特殊破绽</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
