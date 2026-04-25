interface HomeScreenProps {
  onStart: () => void;
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-mesh px-5 py-7 shadow-card md:px-8 md:py-9">
      <div className="archive-border absolute inset-0 rounded-[32px]" />
      <div className="absolute -left-12 top-10 h-36 w-36 rounded-full bg-ember/25 blur-3xl animate-pulseGlow" />
      <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-violet/20 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-neon/15 blur-3xl animate-pulseGlow" />

      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-gold/35 bg-black/25 px-3 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-gold">
          命运档案生成器
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <div>
            <h1 className="text-[40px] font-black leading-none tracking-tight text-white sm:text-[56px]">
              SMTI
              <span className="ml-2 text-stroke bg-gradient-to-r from-gold via-white to-ember bg-clip-text text-transparent">
                乱世人格测试
              </span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/78">
              MBTI过时了，来测你的历史原型。
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur">
            <div className="flex items-end gap-2 text-[42px] font-black leading-none sm:text-[58px]">
              <span className="text-gold drop-shadow-[0_0_20px_rgba(247,195,95,0.4)]">S</span>
              <span className="text-white/35">/</span>
              <span className="text-ember drop-shadow-[0_0_20px_rgba(255,77,109,0.45)]">M</span>
            </div>
            <p className="mt-4 text-2xl font-bold leading-tight text-white md:text-[30px]">
              我是天生上位的 S，
              <br />
              还是被生活反复暴打的 M？
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/78 backdrop-blur md:text-[15px]">
              20道疯癫情景题，
              <br />
              测出你的乱世人格代码。
              <br />
              <br />
              你身体里可能住着一个秦始皇、刘邦、项羽、司马懿、苏轼、李清照、韩信或陶渊明。
              这不是测你有多正常，而是测你在乱世剧本里，到底会站到台前改规则，还是被命运暴打后偷偷翻盘。
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur">
              <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-white/85">
                {[
                  ["S", "主导型"],
                  ["M", "承压型"],
                  ["T", "铁律型"],
                  ["F", "风骨型"],
                  ["A", "进攻型"],
                  ["I", "隐匿型"],
                  ["C", "契约型"],
                  ["V", "共生型"],
                ].map(([letter, label]) => (
                  <div key={letter} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                    <div className="text-xl font-black text-gold">{letter}</div>
                    <div className="mt-1 text-xs tracking-wide text-white/65">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="group relative overflow-hidden rounded-[22px] border border-gold/45 bg-[linear-gradient(90deg,rgba(255,77,109,0.22),rgba(247,195,95,0.22),rgba(84,242,195,0.18))] px-6 py-4 text-base font-bold text-white shadow-neon transition duration-300 hover:scale-[1.01] active:scale-[0.98]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] bg-[length:200%_100%] opacity-0 transition group-hover:animate-shimmer group-hover:opacity-100" />
            <span className="relative">开始受测</span>
          </button>

          <p className="text-center text-xs leading-6 text-white/45">
            娱乐测试，请勿当成人生判决书。
            <br />
            真正的命运，还是得自己改。
          </p>

          <div className="mx-auto max-w-md rounded-[22px] border border-white/8 bg-black/15 px-4 py-4 text-center backdrop-blur">
            <div className="text-[11px] font-semibold tracking-[0.24em] text-gold/75">
              由小天鹅制作
            </div>
            <p className="mt-2 text-xs leading-6 text-white/48">
              一个热衷观察人类命运剧本的乱世人格研究员
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
