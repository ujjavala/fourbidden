import { NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

function lines(raw: string): string[] {
  return raw
    .split(/\n+/)
    .map((line) => line.replace(/^[-*\d.)\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 5);
}

export async function POST() {
  try {
    const prompt =
      "Generate 5 short, funny status snippets for floating dashboard widgets in an April Fools over-engineered AI system trying to answer 2+2. Mention dramatic AI agent activity and fake escalation where possible.";

    const content = await generateWithGemini(prompt);
    const statuses = lines(content);

    return NextResponse.json({ statuses: statuses.length ? statuses : [content] });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown widget error." },
      { status: 500 }
    );
  }
}
