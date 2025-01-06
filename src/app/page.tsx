"use client";

import { MarkdownText } from "@/components/markdown-text";
import { Thread } from "@assistant-ui/react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100vh]">
        <div className="w-[300px] bg-black text-gray-300 p-6 pr-10">
          <h1 className="text-2xl mb-10">NextJS Q&A</h1>
          <h3 className="mb-2 font-semibold">What is this?</h3>
          <p className="text-sm mb-2">
            This is a RAG research project to get better LLM responses for the
            latest technologies
          </p>
          <p className="text-sm mb-2">
            This model uses NextJS docs to provide up-to-date responses.
          </p>
          <p className="text-sm mb-2">
            Include the NextJS version and router in your message (defaults to
            Next 15 app router).
          </p>
          <p className="text-sm mb-2 mt-6 italic">
            Responses do not stream and may take around 30s due to cold-start.
          </p>
          <p className="mt-6 text-sm">
            Please feel free to get in touch, provide feedback, etc.
            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/rafbgarcia/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <main className="flex-1">
          <Thread
            welcome={{
              suggestions: [
                {
                  prompt:
                    "Implement a form that optimistically creates blog posts using a server action in NextJS 15 app router",
                },
                {
                  prompt:
                    "How to implement a POST API handler in Next 15 app vs pages routers?",
                },
                {
                  prompt:
                    "In what version did NextJS introduce server actions?",
                },
              ],
            }}
            assistantMessage={{ components: { Text: MarkdownText } }}
          />
        </main>
      </div>
    </>
  );
}
