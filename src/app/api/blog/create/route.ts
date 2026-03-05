import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const SECRET_KEY = process.env.BLOG_SECRET || "fangbim-secret-2024";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, summary, content, secret } = body;

    // Validate secret
    if (secret !== SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validate required fields
    if (!title || !summary || !content) {
      return NextResponse.json(
        { error: "Title, summary, and content are required" },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Build MDX content with frontmatter
    const publishedAt = new Date().toISOString().split("T")[0];
    const mdxContent = `---
title: "${title}"
publishedAt: "${publishedAt}"
summary: "${summary}"
---

${content}
`;

    // Write to content directory
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "A blog post with this slug already exists", slug },
        { status: 409 }
      );
    }

    fs.writeFileSync(filePath, mdxContent, "utf-8");

    return NextResponse.json(
      {
        message: "Blog post created successfully",
        slug,
        url: `/blog/${slug}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
