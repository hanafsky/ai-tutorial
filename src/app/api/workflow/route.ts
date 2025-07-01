import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { instruction } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    prompt: instruction,
    maxDuration: 30_000,
  });

  return result.toDataStreamResponse();
}