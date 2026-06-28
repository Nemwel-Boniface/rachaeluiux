import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/Rachael-hero-image.png";

export default function Landing() {
  return (
    <section className="bg-[#EDEAE4] px-4 md:px-8 pt-4 pb-8">
      <div className="max-w-[1400px] mx-auto">

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col gap-3 md:hidden">

          {/* Dark headline card — full width */}
          <div className="bg-[#1e1e1c] rounded-2xl p-7 flex flex-col gap-8">
            <h1 className="text-white text-[36px] font-semibold leading-[1.1] tracking-tight">
              Designing thoughtful digital experiences that solve real problems.
            </h1>
            <p className="text-[#a8a8a8] text-[15px] leading-relaxed">
              I help businesses turn complex ideas into intuitive products and
              services that are easy to use, easy to understand, and built with
              purpose.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#work"
                className="inline-flex items-center justify-center bg-[#C4714A] hover:bg-[#b5603a] text-white text-[15px] font-medium px-6 py-3 rounded-full transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-white text-white text-[15px] font-medium px-6 py-3 rounded-full hover:bg-white hover:text-[#1e1e1c] transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Bottom row: photo left, cards right */}
          <div className="grid grid-cols-2 gap-3 items-start">

            {/* Portrait photo */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#d4cfc9]" style={{ aspectRatio: "3/4" }}>
              <Image
                src={heroImage}
                alt="Rachael"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Experience + Expertise stacked */}
            <div className="flex flex-col gap-3">
              {/* Experience card */}
              <div className="bg-[#C4714A] rounded-2xl p-5 flex flex-col gap-2">
                <p className="text-[#e8c4ad] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Experience
                </p>
                <p className="text-white text-[52px] font-semibold leading-none mt-1">
                  2+
                </p>
                <p className="text-[#e8c4ad] text-[12px] leading-snug">
                  Years in Product Design
                </p>
              </div>

              {/* Expertise card */}
              <div className="bg-[#E8E4DE] rounded-2xl p-5 flex flex-col gap-4">
                <p className="text-[#8a8680] text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Expertise
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-[#1a1a1a] text-[14px]">Product Strategy</li>
                  <li className="text-[#1a1a1a] text-[14px]">User Experience</li>
                  <li className="text-[#1a1a1a] text-[14px]">Interface design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:grid grid-cols-[1fr_auto_280px] gap-3 items-start">

          {/* Column 1 — Dark card */}
          <div className="bg-[#1e1e1c] rounded-2xl p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <h1 className="text-white text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight mb-8">
                Designing thoughtful digital experiences that solve real problems.
              </h1>
              <p className="text-[#a8a8a8] text-[15px] leading-relaxed max-w-sm">
                I help businesses turn complex ideas into intuitive products and
                services that are easy to use, easy to understand, and built with
                purpose.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-10">
              <Link
                href="#work"
                className="inline-flex items-center justify-center bg-[#C4714A] hover:bg-[#b5603a] text-white text-[15px] font-medium px-6 py-3 rounded-full transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-white text-white text-[15px] font-medium px-6 py-3 rounded-full hover:bg-white hover:text-[#1e1e1c] transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          {/* Column 2 — Portrait photo */}
          <div
            className="relative rounded-2xl overflow-hidden bg-[#d4cfc9]"
            style={{ width: "300px", height: "440px" }}
          >
            <Image
              src={heroImage}
              alt="Rachael"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Column 3 — Experience + Expertise */}
          <div className="flex flex-col gap-3" style={{ height: "440px" }}>
            {/* Experience card */}
            <div className="bg-[#C4714A] rounded-2xl p-6 flex flex-col justify-between flex-1">
              <p className="text-[#e8c4ad] text-[11px] font-semibold tracking-[0.15em] uppercase">
                Experience
              </p>
              <div>
                <p className="text-white text-[72px] font-semibold leading-none">
                  2+
                </p>
                <p className="text-[#e8c4ad] text-[13px] mt-2">
                  Years in Product Design
                </p>
              </div>
            </div>

            {/* Expertise card */}
            <div className="bg-[#E8E4DE] rounded-2xl p-6 flex flex-col gap-5 flex-1">
              <p className="text-[#8a8680] text-[11px] font-semibold tracking-[0.15em] uppercase">
                Expertise
              </p>
              <ul className="flex flex-col gap-3">
                <li className="text-[#1a1a1a] text-[15px]">Product Strategy</li>
                <li className="text-[#1a1a1a] text-[15px]">User Experience</li>
                <li className="text-[#1a1a1a] text-[15px]">Interface design</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
