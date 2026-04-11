import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";

export default async function GaRentalTermsPage() {
  const termsFilePath = path.join(process.cwd(), "docs", "ga-rental-terms-template.md");
  const termsContent = await readFile(termsFilePath, "utf8");

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 border-b border-zinc-200 pb-5">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-zinc-600">Carsgidi rental terms for Georgia bookings.</p>
        </div>

        <article className="text-zinc-800">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h1 className="text-2xl font-bold text-zinc-900" {...props} />,
              h2: ({ ...props }) => (
                <h2 className="mt-8 border-l-4 border-[#03396c] pl-3 text-lg font-semibold text-zinc-900" {...props} />
              ),
              p: ({ ...props }) => <p className="mt-3 text-sm leading-7 text-zinc-700" {...props} />,
              ul: ({ ...props }) => <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700" {...props} />,
              ol: ({ ...props }) => <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-700" {...props} />,
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
