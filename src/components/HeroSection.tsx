import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#EDEAE4] px-4 md:px-8 pt-4 pb-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_280px] gap-3 items-start">

          {/* Column 1 — Dark card */}
          <div className="bg-[#1e1e1c] rounded-2xl p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <h1 className="text-white text-[42px] md:text-[52px] font-semibold leading-[1.1] tracking-tight mb-8">
                Designing thoughtful digital experiences that solve real problems.
              </h1>
              <p className="text-[#a8a8a8] text-[15px] leading-relaxed max-w-sm">
                I help businesses turn complex ideas into intuitive products and
                services that are easy to use, easy to understand, and built with
                purpose.
              </p>
            </div>

            {/* Buttons */}
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
          <div className="relative w-full md:w-[300px] aspect-[3/4] md:aspect-auto md:h-[440px] rounded-2xl overflow-hidden bg-[#d4cfc9]">
            <Image
              src="/images/hero-photo.jpg"
              alt="Rachael"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Column 3 — Experience + Expertise cards */}
          <div className="flex flex-col gap-3 h-full">
            {/* Experience card */}
            <div className="bg-[#C4714A] rounded-2xl p-6 flex-1 flex flex-col justify-between">
              <p className="text-[#e8c4ad] text-[11px] font-semibold tracking-[0.15em] uppercase">
                Experience
              </p>
              <div>
                <p className="text-white text-[72px] font-semibold leading-none mt-4">
                  2+
                </p>
                <p className="text-[#e8c4ad] text-[13px] mt-2">
                  Years in Product Design
                </p>
              </div>
            </div>

            {/* Expertise card */}
            <div className="bg-[#E8E4DE] rounded-2xl p-6 flex-1">
              <p className="text-[#8a8680] text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">
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
