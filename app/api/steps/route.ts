import { NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

export async function POST() {
  try {
    const prompt =
      "Invent a completely unnecessary next step after answering 2+2 in an April Fools app. Make it sound mission-critical, corporate, and meaningless. Mention AI agent teams and at least one advanced AI buzzword (RAG, transformers, embeddings, or vector index).";
    const step = await generateWithGemini(prompt);

    return NextResponse.json({ step: step.replace(/\n+/g, " ").trim() });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown step error." },
      { status: 500 }
    );
  }
}
