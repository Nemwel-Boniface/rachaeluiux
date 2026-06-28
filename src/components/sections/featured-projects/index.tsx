import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

export default function FeaturedProjects() {
  return (
    <section id="work" className="bg-[#EDEAE4] px-5 md:px-8 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-start justify-between mb-10 md:mb-14">
          <h2 className="text-[36px] md:text-[52px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">
            Featured Projects
          </h2>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1a1a1a] hover:text-[#C4714A] transition-colors mt-4 whitespace-nowrap"
          >
            View all projects →
          </Link>
          <Link
            href="#"
            className="md:hidden inline-flex items-center gap-1 text-[14px] font-medium text-[#1a1a1a] hover:text-[#C4714A] transition-colors mt-2 whitespace-nowrap"
          >
            View all →
          </Link>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-20 md:gap-28">
          {(projects as Project[]).map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 1;

  return (
    <div className="flex flex-col gap-6 md:gap-0">

      {/* ── MOBILE: image top, text bottom ── */}
      <div className="flex flex-col gap-5 md:hidden">
        <ProjectImage project={project} />
        <ProjectText project={project} />
      </div>

      {/* ── DESKTOP: alternating columns — image 2/3, text 1/3 ── */}
      <div
        className={`hidden md:grid gap-12 items-center ${
          isEven ? "grid-cols-[1fr_2fr]" : "grid-cols-[2fr_1fr]"
        }`}
      >
        {isEven ? (
          <>
            <ProjectText project={project} />
            <ProjectImage project={project} />
          </>
        ) : (
          <>
            <ProjectImage project={project} />
            <ProjectText project={project} />
          </>
        )}
      </div>

    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="relative w-full aspect-[16/7]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ProjectText({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 md:gap-5 md:px-4">
      <h3 className="text-[28px] md:text-[38px] font-semibold text-[#1a1a1a] tracking-tight leading-tight">
        {project.title}
      </h3>

      {/* Tags with left terracotta border */}
      <div className="flex items-start gap-3">
        <div className="w-[3px] self-stretch bg-[#C4714A] rounded-full shrink-0 mt-0.5" />
        <p className="text-[13px] md:text-[14px] text-[#5a5652]">
          {project.tags}
        </p>
      </div>

      <p className="text-[15px] md:text-[16px] text-[#3a3835] leading-relaxed">
        {project.description}
      </p>

      <Link
        href={project.link}
        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#C4714A] hover:text-[#a85c39] transition-colors"
      >
        View Project →
      </Link>
    </div>
  );
}
