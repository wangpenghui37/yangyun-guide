interface Props {
  num: string
  title: string
  en: string
  desc?: string
}

export default function SectionHeader({ num, title, en, desc }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-end gap-4 mb-3">
        <span
          className="text-5xl text-cinnabar-500 opacity-40 leading-none"
          style={{ fontFamily: 'var(--font-zcool)' }}
        >
          {num}
        </span>
        <div>
          <h2
            className="text-2xl text-parchment-100 tracking-widest"
            style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.15em' }}
          >
            {title}
          </h2>
          <p className="text-xs text-ink-400 tracking-[0.35em] mt-0.5">{en}</p>
        </div>
      </div>
      <div className="ink-divider" />
      {desc && <p className="text-parchment-400 text-sm mt-4 leading-7">{desc}</p>}
    </div>
  )
}
