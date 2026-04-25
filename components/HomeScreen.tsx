interface HomeScreenProps {
  onStart: () => void;
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  const dimensionCards = [
    {
      pair: "S / M",
      left: "S：控场",
      right: "M：抗压",
      description: "你面对压迫时，是掌控局面，还是先扛住再说。",
    },
    {
      pair: "T / F",
      left: "T：铁律",
      right: "F：风骨",
      description: "你处理问题时，是先算账，还是先看人心。",
    },
    {
      pair: "A / I",
      left: "A：出手",
      right: "I：潜伏",
      description: "你遇到机会时，是立刻出手，还是暗中观察。",
    },
    {
      pair: "C / V",
      left: "C：原则型",
      right: "V：破防型",
      description: "关系里，你是原则写了三页，还是别人一句话就让你破防。",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-mesh px-5 py-7 shadow-card md:px-8 md:py-9">
      <div className="archive-border absolute inset-0 rounded-[32px]" />
      <div className="absolute -left-12 top-10 h-36 w-36 rounded-full bg-ember/25 blur-3xl animate-pulseGlow" />
      <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-violet/20 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-neon/15 blur-3xl animate-pulseGlow" />

      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-gold/35 bg-black/25 px-3 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-gold">
          历史原型测试
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <div>
            <h1 className="text-[40px] font-black leading-tight tracking-tight text-white sm:text-[56px]">
              测测你是哪种历史狠人格
            </h1>
            <p className="mt-4 text-lg font-medium text-white/78">
              MBTI过时了，来测你的 SMTI
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur">
            <div className="flex items-end gap-2 text-[42px] font-black leading-none sm:text-[58px]">
              <span className="text-gold drop-shadow-[0_0_20px_rgba(247,195,95,0.4)]">S</span>
              <span className="text-white/35">/</span>
              <span className="text-ember drop-shadow-[0_0_20px_rgba(255,77,109,0.45)]">M</span>
            </div>
            <p className="mt-4 text-2xl font-bold leading-tight text-white md:text-[30px]">
              你是天生上位的 S，
              <br />
              还是被生活暴打的 M？
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/78 backdrop-blur md:text-[15px]">
              20道情景题，测出你的 SMTI 人格代码。
              <br />
              有的人像秦始皇，控场控到文件名都想统一。
              <br />
              有的人像司马懿，表面不说，心里已经下到终局。
              <br />
              也有人像苏轼，人生再离谱，也能顺手写成一条值得转发的状态。
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur">
              <div className="grid gap-3">
                {dimensionCards.map((item) => (
                  <details
                    key={item.pair}
                    className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
                      <span className="tracking-[0.16em] text-gold">{item.pair}</span>
                      <span className="text-white/88">
                        {item.left}
                        <span className="mx-2 text-white/28">/</span>
                        {item.right}
                      </span>
                    </summary>
                    <p className="mt-3 text-xs leading-6 text-white/60">{item.description}</p>
                  </details>
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
            <span className="relative">开始测试</span>
          </button>

          <p className="text-center text-xs leading-6 text-white/45">
            大约 3 分钟，测完别怪它太准。
          </p>

          <div className="mx-auto max-w-md rounded-[22px] border border-white/8 bg-black/15 px-4 py-4 text-center backdrop-blur">
            <div className="text-[11px] font-semibold tracking-[0.24em] text-gold/75">
              由小天鹅制作
            </div>
            <p className="mt-2 text-xs leading-6 text-white/48">
              一个热衷观察人类命运剧本的历史原型研究员
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
