import areasOfFocus from "@/data/areasOfFocus.json";

interface AreaItem {
  id: number;
  title: string;
  description: string;
}

export default function AreasOfFocus() {
  return (
    <section id="expertise" className="bg-[#EEE8DD] px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section title */}
        <h2 className="text-[36px] md:text-[52px] font-semibold text-[#1a1a1a] tracking-tight leading-tight mb-12 md:mb-16">
          Areas of Focus
        </h2>

        {/* Grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-16">
          {(areasOfFocus as AreaItem[]).map((item) => (
            <div key={item.id} className="flex flex-col gap-2.5">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#5a5652] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
