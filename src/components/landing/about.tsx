import { Marquee } from "@/components/ui/marquee";
import { Eyebrow } from "@/components/ui/eyebrow";

const MARQUEE_IMAGES = [
  { src: "/aivora/about/about-img01.jpg", alt: "AI trading analysis" },
  { src: "/aivora/about/about-img02.jpg", alt: "Smart market signals" },
  { src: "/aivora/about/about-img03.jpg", alt: "Risk-first trading" },
];

export function LandingAbout() {
  return (
    <section className="relative pt-32 pb-0">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6">
        <div className="sf-anim-fade-up mb-20 max-w-5xl">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="sf-display mt-5 text-3xl leading-[1.05] tracking-tight text-[color:var(--color-fg)] sm:text-5xl md:text-[58px]">
            We help traders
            <InlineGif src="/aivora/icon/original-66948a0d81d.gif" />
            grow accounts and
            <InlineGif src="/aivora/icon/original-9e54f87f13d.gif" />
            scale with smart, data-driven{" "}
            <span className="sf-gradient-text">AI signals</span>
            <InlineGif src="/aivora/icon/artificial-intelligence-11761.gif" />
          </h2>
        </div>
      </div>

      {/* Marquee on about-bg */}
      <div
        className="relative overflow-hidden bg-cover bg-center py-12"
        style={{ backgroundImage: "url(/aivora/bg/about-bg.png)" }}
      >
        <Marquee speed={40}>
          {MARQUEE_IMAGES.map((img, i) => (
            <MarqueeTile key={`m1-${i}`} {...img} />
          ))}
          {MARQUEE_IMAGES.map((img, i) => (
            <MarqueeTile key={`m2-${i}`} {...img} />
          ))}
        </Marquee>
        <div className="mt-6">
          <Marquee speed={50} direction="right">
            {MARQUEE_IMAGES.slice()
              .reverse()
              .map((img, i) => (
                <MarqueeTile key={`m3-${i}`} {...img} />
              ))}
            {MARQUEE_IMAGES.slice()
              .reverse()
              .map((img, i) => (
                <MarqueeTile key={`m4-${i}`} {...img} />
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function InlineGif({ src }: { src: string }) {
  return (
    <span className="mx-2 inline-flex h-[1.1em] w-[1.1em] overflow-hidden rounded-full bg-[color:var(--color-surface-2)] align-middle">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
    </span>
  );
}

function MarqueeTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-3 h-[320px] w-[480px] shrink-0 overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
    </div>
  );
}
