import { NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

function chunkLines(raw: string): string[] {
  return raw
    .split(/\n+/)
    .map((line) => line.replace(/^[-*\d.)\s]+/, "").trim())
    .filter(Boolean)
    .slice(0, 25);
}

export async function POST() {
  try {
    const prompt =
      "Generate 25 absurd, very funny, legally styled terms and conditions for understanding the answer to 2+2 in an April Fools app. Include contradictions, recursive references, fake compliance acronyms, AI agent approval chains, and pointless legal drama. Sprinkle in high-level AI words like RAG, transformers, embeddings, latent space alignment, and model distillation.";

    const content = await generateWithGemini(prompt);
    const terms = chunkLines(content);

    return NextResponse.json({ terms: terms.length ? terms : [content] });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown terms error." },
      { status: 500 }
    );
  }
}
