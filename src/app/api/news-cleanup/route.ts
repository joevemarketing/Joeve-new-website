import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

const unwantedSources = [
  "Analytics India Magazine",
  "VentureBeat",
  "TechCrunch",
  "The Verge",
  "MIT News"
]

export async function GET() {
  const results: { source: string; deleted: number }[] = []
  for (const source of unwantedSources) {
    const { error, count } = await supabaseAdmin
      .from("blog_posts")
      .delete({ count: "exact" })
      .ilike("content", `%Source: ${source}%`)
    results.push({ source, deleted: (count || 0) })
  }
  return NextResponse.json({ cleaned: results })
}

