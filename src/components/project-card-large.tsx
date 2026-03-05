"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCardLarge({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 200;
  const shouldTruncate = description.length > MAX_LENGTH;
  const displayDescription =
    shouldTruncate && !isExpanded
      ? description.slice(0, MAX_LENGTH) + "..."
      : description;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-border">
        {/* Media Section */}
        <Link href={href || "#"} className="block overflow-hidden">
          <div className="relative overflow-hidden">
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {image && (
              <Image
                src={image}
                alt={title}
                width={800}
                height={450}
                className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {!video && !image && (
              <div className="flex h-56 w-full items-center justify-center bg-muted/30">
                <span className="text-4xl font-bold text-muted-foreground/20">
                  {title.charAt(0)}
                </span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </Link>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Title + Date row */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold leading-tight tracking-tight sm:text-xl">
                {title}
              </h3>
              {href && (
                <Link
                  href={href}
                  target="_blank"
                  className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink className="size-4" />
                </Link>
              )}
            </div>
            <time className="mt-1 block text-sm text-muted-foreground">
              {dates}
            </time>
          </div>

          {/* Description */}
          <div className="mb-4 flex-1">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="mt-1 text-sm font-medium text-foreground/70 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  className="rounded-full px-2.5 py-0.5 text-xs font-normal"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-2 border-t border-border/50 pt-4">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge
                    key={idx}
                    className="flex gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-primary/90"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
