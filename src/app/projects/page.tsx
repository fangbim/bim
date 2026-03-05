import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCardLarge } from "@/components/project-card-large";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse all of my projects and works.",
};

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 -mx-6 sm:-mx-0">
      <section className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Back button */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Button
            asChild
            variant="ghost"
            className="mb-8 gap-2 group hover:gap-1 transition-all duration-300 -ml-2"
          >
            <Link href="/">
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </BlurFade>

        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-14">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                All Projects
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                My Work
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
                A collection of all {DATA.projects.length} projects I&apos;ve
                built — from web apps and mobile applications to AI-powered
                tools.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Projects Grid — 2 columns for bigger cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              inView
            >
              <ProjectCardLarge
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
