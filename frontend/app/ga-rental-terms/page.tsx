import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";

export default async function GaRentalTermsPage() {
  const termsFilePath = path.join(process.cwd(), "docs", "ga-rental-terms-template.md");
  const termsContent = await readFile(termsFilePath, "utf8");

  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-10">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-2xl font-bold text-zinc-900">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-zinc-600">
          The content below is loaded from the official document in docs/ga-rental-terms-template.md.
        </p>

        <article className="mt-6 rounded-xl bg-zinc-50 p-4 text-zinc-800 md:p-6">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h1 className="text-xl font-bold text-zinc-900" {...props} />,
              h2: ({ ...props }) => <h2 className="mt-6 text-base font-semibold text-zinc-900" {...props} />,
              p: ({ ...props }) => <p className="mt-3 text-sm leading-6" {...props} />,
              ul: ({ ...props }) => <ul className="mt-3 list-disc space-y-1 pl-5 text-sm" {...props} />,
              ol: ({ ...props }) => <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm" {...props} />,
              li: ({ ...props }) => <li className="leading-6" {...props} />,
            }}
          >
            {termsContent}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
