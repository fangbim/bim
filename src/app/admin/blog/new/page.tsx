"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Check, Copy, Eye, Loader2, Pencil } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [secret, setSecret] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<{
    slug: string;
    url: string;
  } | null>(null);
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, content, secret }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess({ slug: data.slug, url: data.url });
    } catch {
      setError("Failed to connect to the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMDX = () => {
    const publishedAt = new Date().toISOString().split("T")[0];
    return `---
title: "${title}"
publishedAt: "${publishedAt}"
summary: "${summary}"
---

${content}`;
  };

  const handleCopyMDX = async () => {
    await navigator.clipboard.writeText(generateMDX());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (success) {
    return (
      <main className="flex flex-col min-h-[60dvh] items-center justify-center space-y-6 px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
            <Check className="size-8 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Post Created!
          </h1>
          <p className="text-muted-foreground max-w-md">
            Your blog post <strong>&quot;{title}&quot;</strong> has been
            created successfully.
          </p>
          <div className="flex gap-3 pt-2">
            <Button asChild variant="outline">
              <Link href={success.url}>View Post</Link>
            </Button>
            <Button
              onClick={() => {
                setTitle("");
                setSummary("");
                setContent("");
                setSuccess(null);
              }}
            >
              Create Another
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-2 -ml-2"
        >
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            Blog
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setPreview(!preview)}
            className="gap-2"
          >
            {preview ? (
              <Pencil className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
            {preview ? "Edit" : "Preview"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyMDX}
            disabled={!title || !content}
            className="gap-2"
          >
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied ? "Copied!" : "Copy MDX"}
          </Button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">New Blog Post</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {slug ? (
            <>
              Slug: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{slug}</code>
            </>
          ) : (
            "Start typing a title to generate the slug"
          )}
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
          {error}
        </div>
      )}

      {preview ? (
        /* Preview Mode */
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {title || "Untitled"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <div className="prose dark:prose-invert max-w-full whitespace-pre-wrap text-sm">
              {content || "No content yet..."}
            </div>
          </div>
        </div>
      ) : (
        /* Editor Mode */
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Secret Key */}
          <div className="space-y-2">
            <label
              htmlFor="secret"
              className="text-sm font-medium leading-none"
            >
              Secret Key
            </label>
            <input
              id="secret"
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter secret key..."
              required
              className={cn(
                "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm",
                "ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "transition-colors duration-200"
              )}
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-medium leading-none"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My awesome blog post..."
              required
              className={cn(
                "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-lg font-medium",
                "ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "transition-colors duration-200"
              )}
            />
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <label
              htmlFor="summary"
              className="text-sm font-medium leading-none"
            >
              Summary
            </label>
            <input
              id="summary"
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="A brief description of the post..."
              required
              className={cn(
                "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm",
                "ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "transition-colors duration-200"
              )}
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label
              htmlFor="content"
              className="text-sm font-medium leading-none"
            >
              Content{" "}
              <span className="text-muted-foreground font-normal">
                (Markdown supported)
              </span>
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`Write your blog post here...\n\nYou can use **bold**, *italic*, \`code\`, and more markdown syntax.\n\n## Headings\n\n- Lists\n- Are supported`}
              required
              rows={16}
              className={cn(
                "flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-mono",
                "ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "transition-colors duration-200 resize-y min-h-[200px]"
              )}
            />
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || !title || !summary || !content || !secret}
              className="gap-2"
            >
              {isSubmitting && <Loader2 className="size-4 animate-spin" />}
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </Button>
          </div>
        </form>
      )}
    </main>
  );
}
