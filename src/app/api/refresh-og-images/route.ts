import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

async function extractOgImage(link: string): Promise<string | null> {
  if (!link || !link.startsWith("http")) return null
  try {
    const res = await fetch(link, { headers: { "User-Agent": "Mozilla/5.0" }, cache: "no-store" })
    const html = await res.text()
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i)
    const url = m?.[1]
    if (!url) return null
    try { return new URL(url, link).toString() } catch { return null }
  } catch { return null }
}

export async function POST() {
  const { data } = await supabaseAdmin
    .from("blog_posts")
    .select("id,featured_image_url,source_url,region")

  let updated = 0
  for (const row of data || []) {
    const isGenerated = (row.featured_image_url || "").includes("trae-api-sg.mchost.guru")
    if (!isGenerated && row.featured_image_url) continue
    const og = await extractOgImage(row.source_url || "")
    if (og) {
      const { error } = await supabaseAdmin
        .from("blog_posts")
        .update({ featured_image_url: og })
        .eq("id", row.id)
      if (!error) updated++
    }
  }
  return NextResponse.json({ updated })
}

