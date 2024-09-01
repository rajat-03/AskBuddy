import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  const response = await streamText({
    model: openai(`${process.env.OPENAI_MODEL}`),
    messages
  })

  return response.toDataStreamResponse();
}
