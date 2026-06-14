import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const weapons = [
  {
    cn: '剑',
    en: 'Sword',
    style: '均衡型',
    styleColor: '#2e8868',
    desc: '攻守兼备，出招流畅，适合新手入门。可近身搏击亦可发出剑气，是游历江湖最经典的选择。',
    strengths: ['攻防均衡', '连招流畅', '适应性强'],
    tips: ['建议新手优先掌握，感受游戏基础节奏', '高级剑法可融入太极意境，催生独特流派'],
  },
  {
    cn: '枪',
    en: 'Spear',
    style: '长距离型',
    styleColor: '#c9a44a',
    desc: '攻击范围极广，擅长中距离压制。枪法刚猛，一击足以破敌防线，适合喜欢大开大合风格的玩家。',
    strengths: ['攻击范围广', '单次伤害高', '压制感强'],
    tips: ['注意枪法前摇较长，需掌握出招时机', '对群体敌人有优势，善用横扫技能'],
  },
  {
    cn: '双刀',
    en: 'Dual Blades',
    style: '速攻型',
    styleColor: '#c23b2a',
    desc: '攻速极快，连击能力超强，爆发输出惊人。双刀流讲究节奏与走位，在快速连击中削弱对手。',
    strengths: ['攻速最快', '连击伤害高', '爆发输出强'],
    tips: ['依赖连击叠伤，需保证攻击节奏不中断', '注意防御较弱，需配合灵活走位'],
  },
  {
    cn: '戟',
    en: 'Glaive',
    style: '重型力量',
    styleColor: '#564838',
    desc: '单次伤害极高，破防与群控能力一流。戟法霸道，每一击都令地动山摇，是硬实力的最强代表。',
    strengths: ['单击伤害极高', '破防能力强', '群控优秀'],
    tips: ['攻击速度较慢，需精确把握敌人破绽', '面对快速BOSS时需耐心等待反击窗口'],
  },
  {
    cn: '扇',
    en: 'Fan',
    style: '奇巧型',
    styleColor: '#4aaa88',
    desc: '变幻莫测，暗含风雷之力，走位灵活飘逸。扇法出其不意，适合喜欢华丽且奇异战斗风格的玩家。',
    strengths: ['走位灵活', '出招不可预测', '含特殊属性'],
    tips: ['发挥扇法优势需要熟练的走位习惯', '可配合环境风向触发特殊效果'],
  },
  {
    cn: '伞',
    en: 'Umbrella',
    style: '防反型',
    styleColor: '#7a2016',
    desc: '独特攻守转换流派，可格挡并弹反敌方攻击，以伤换伤。掌握弹反时机后爆发力极为可观。',
    strengths: ['格挡弹反', '攻守一体', '独特机制'],
    tips: ['此流派学习曲线较陡，建议熟悉游戏后再上手', '精准弹反能触发额外反击伤害，奖励极丰厚'],
  },
  {
    cn: '弓',
    en: 'Bows',
    style: '远程狙击',
    styleColor: '#185FA5',
    desc: '远程精准打击，擅长预判与蓄力。弓手流讲究冷静布局，在安全距离之外掌控战场节奏。',
    strengths: ['远程输出', '精准打击', '蓄力爆发'],
    tips: ['需要较强的预判能力与走位意识', '对飞行型或远程型BOSS有明显优势'],
  },
  {
    cn: '太极',
    en: 'Taichi',
    style: '玄妙内功',
    styleColor: '#806020',
    desc: '以柔克刚，借力打力，气劲运转全身。太极为神秘的玄妙武学，内外兼修方能领悟其真谛。',
    strengths: ['以柔克刚', '借力打力', '内力独特'],
    tips: ['太极法门讲究"顺势而为"，勿强行硬接强攻', '与剑、扇组合可触发独特内外兼修流派效果'],
  },
]

export default function WeaponsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="叁"
            title="武器攻略"
            en="WEAPONS GUIDE"
            desc="游戏内共有八大类武器，各具独特战斗节奏与武学风格。游戏支持自定义武学流派，可组合搭配打造专属风格。"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {weapons.map((w) => (
              <div key={w.cn} className="bg-ink-700 border border-ink-500 p-6 card-hover group">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-2xl text-parchment-100 flex-shrink-0 border"
                    style={{
                      background: `${w.styleColor}18`,
                      borderColor: `${w.styleColor}44`,
                      fontFamily: 'var(--font-zcool)',
                    }}
                  >
                    {w.cn}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className="text-parchment-100 text-lg tracking-widest"
                        style={{ fontFamily: 'var(--font-zcool)' }}
                      >
                        {w.cn}
                      </h3>
                      <span className="text-ink-400 text-xs tracking-widest">{w.en}</span>
                      <span
                        className="ml-auto px-2 py-0.5 text-xs tracking-wider"
                        style={{ background: `${w.styleColor}22`, color: w.styleColor }}
                      >
                        {w.style}
                      </span>
                    </div>
                    <p className="text-parchment-400 text-sm leading-7 mb-4">{w.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {w.strengths.map(s => (
                        <span key={s} className="px-2 py-0.5 border border-ink-500 text-ink-400 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      {w.tips.map((t, i) => (
                        <div key={i} className="flex gap-2 text-xs text-parchment-400 leading-6">
                          <span className="text-cinnabar-500 flex-shrink-0">◈</span>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink-800 border border-gold-500 border-opacity-30 p-6">
            <p className="text-gold-400 text-xs tracking-widest mb-4">武器搭配推荐</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '新手推荐', combo: '剑 + 弓', desc: '均衡攻防配合远程补充，容错率高，适合熟悉游戏节奏' },
                { title: '进阶流派', combo: '太极 + 双刀', desc: '内外兼修，柔刚并济，掌握后爆发力极强' },
                { title: '防反大师', combo: '伞 + 枪', desc: '格挡弹反后接枪法重击，节奏感极强，对BOSS效果显著' },
              ].map(r => (
                <div key={r.title} className="bg-ink-700 p-4 border border-ink-500">
                  <p className="text-cinnabar-400 text-xs tracking-widest mb-1">{r.title}</p>
                  <p className="text-gold-300 text-lg mb-2" style={{ fontFamily: 'var(--font-zcool)' }}>{r.combo}</p>
                  <p className="text-parchment-400 text-xs leading-6">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
