import { NextResponse } from "next/server";
import { generateWithGemini } from "@/lib/gemini";

export async function POST() {
  try {
    const prompt =
      "Explain why the 2+2 process is still not complete and requires one more step. Make it dramatic, fake-professional, and hilarious in 2-3 sentences with AI committee jargon.";

    const reason = await generateWithGemini(prompt);
    return NextResponse.json({ reason: reason.replace(/\n+/g, " ").trim() });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown loop error." },
      { status: 500 }
    );
  }
}
