export default function Footer() {
  return (
    <footer className="border-t border-ink-600 mt-20 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="text-gold-400 text-xl mb-2"
          style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.2em' }}
        >
          燕云十六声
        </p>
        <p className="text-ink-400 text-xs tracking-widest mb-4">WHERE WINDS MEET · OFFICIAL GUIDE</p>
        <div className="ink-divider max-w-xs mx-auto mb-4" />
        <p className="text-ink-500 text-xs leading-6">
          数据来源：
          <a href="https://www.wherewindsmeetgame.com" target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-parchment-300 transition-colors">wherewindsmeetgame.com</a>
          {' · '}
          <a href="https://www.yysls.cn" target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-parchment-300 transition-colors">yysls.cn</a>
        </p>
        <p className="text-ink-500 text-xs mt-2">本站内容仅供参考 · 版权归网易游戏 Everstone Studio 所有 · Ver 1.7</p>
      </div>
    </footer>
  )
}
