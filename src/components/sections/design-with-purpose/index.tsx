import content from "@/data/designingWithPurpose.json";

interface ToolGroup {
  id: number;
  label: string;
  tools: string[];
}

export default function DesigningWithPurpose() {
  return (
    <section id="about" className="bg-[#EDEAE4] px-5 md:px-8 pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-[1400px] mx-auto">

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col gap-8 md:hidden">

          {/* Title */}
          <h2 className="text-[32px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">
            {content.title}
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-5">
            {content.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-[#3a3835] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Tool cards — stacked, label left + tools right */}
          <div className="flex flex-col gap-3">
            {content.toolGroups.map((group: ToolGroup) => (
              <div
                key={group.id}
                className="bg-[#E2DED7] rounded-2xl px-5 py-5 flex flex-row justify-between items-start gap-4"
              >
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7a7672] leading-snug whitespace-nowrap">
                  {group.label}
                </p>
                <div className="flex flex-col items-end gap-1">
                  {group.tools.map((tool) => (
                    <p key={tool} className="text-[14px] text-[#1a1a1a]">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:grid grid-cols-[5fr_6fr] gap-10 items-start">

          {/* Left — title + paragraphs */}
          <div className="flex flex-col gap-8">
            <h2 className="text-[48px] lg:text-[52px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">
              {content.title}
            </h2>
            <div className="flex flex-col gap-6">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] md:text-[16px] text-[#3a3835] leading-relaxed max-w-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — 3 tool cards side by side */}
          <div className="grid grid-cols-3 gap-4 items-start">
            {content.toolGroups.map((group: ToolGroup) => (
              <div
                key={group.id}
                className="bg-[#E2DED7] rounded-2xl p-5 flex flex-col gap-6"
              >
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#7a7672] leading-snug">
                  {group.label}
                </p>
                <div className="flex flex-col gap-1.5">
                  {group.tools.map((tool) => (
                    <p key={tool} className="text-[14px] text-[#1a1a1a]">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
