import { NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

function chunkShortLines(raw: string): string[] {
  return raw
    .split(/\n+/)
    .map((line) => line.replace(/^[-*\d.)\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 14);
}

export async function POST() {
  try {
    const prompt =
      "Generate 14 short, very funny, absurd loading messages for an April Fools system where AI agents keep adding just one more step to answer 2+2. Include terms like RAG, transformers, embeddings, and model orchestration. Mention that around 1000 models are spun up concurrently. Keep each under 10 words.";

    const content = await generateWithGemini(prompt);
    const messages = chunkShortLines(content);

    return NextResponse.json({ messages: messages.length ? messages : [content] });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown loading error." },
      { status: 500 }
    );
  }
}
