# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### TypeScript
- TypeScript is configured with strict mode enabled
- Path aliases: `@/*` maps to `./src/*`

## Architecture

This is a Next.js 15 application using the App Router with AI chat functionality.

### Key Technologies
- **Next.js 15** with App Router
- **AI SDK (@ai-sdk/react, @ai-sdk/openai)** for AI chat integration
- **OpenAI GPT-4o** as the AI model
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Zod** for schema validation

### Project Structure
- `src/app/` - App Router pages and layouts
- `src/app/api/chat/route.ts` - API route for AI chat streaming
- `src/app/page.tsx` - Main chat interface component
- `src/app/layout.tsx` - Root layout with Geist fonts

### AI Integration Architecture
- **Frontend**: Uses `useChat` hook from `@ai-sdk/react` for real-time chat
- **Backend**: Streaming API route (`/api/chat`) using `streamText` from AI SDK
- **Model**: OpenAI GPT-4o with 30-second max duration
- **Message Flow**: Client → API route → OpenAI → Streaming response → Client

### Important Notes
- Chat messages support multipart content (currently handles text parts)
- Streaming responses use `toDataStreamResponse()` for real-time updates
- Client-side component uses `'use client'` directive for interactivity
- API route implements POST method for chat completion requests