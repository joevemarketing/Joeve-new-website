import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

function buildFallback(region: string) {
  const prompt = `technology news background ${region} editorial style, clean layout, minimal, blue accents, no text`
  return `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_16_9`
}

function extractFirstImage(html: string): string | null {
  const m = html?.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i)
  const src = m?.[1]
  return src && src.startsWith("http") ? src : null
}

export async function POST() {
  const { data } = await supabaseAdmin
    .from("blog_posts")
    .select("id, featured_image_url, tags, content")
  let updated = 0
  for (const row of data || []) {
    const tags: string[] = Array.isArray(row.tags) ? row.tags : []
    const region = tags.find((t) => t === "Malaysia" || t === "Singapore" || t === "China") || "Asia"
    const candidate = extractFirstImage(row.content || "")
    const url = candidate || buildFallback(region)
    if (url !== row.featured_image_url) {
      const { error } = await supabaseAdmin.from("blog_posts").update({ featured_image_url: url }).eq("id", row.id)
      if (!error) updated++
    }
  }
  return NextResponse.json({ updated })
}
