import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(145deg,#fef3c7_0%,#fde68a_30%,#f59e0b_100%)] px-6 py-16">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <section className="bg-white/85 backdrop-blur rounded-3xl border border-amber-200 p-8 shadow-[0_20px_80px_-30px_rgba(146,64,14,0.65)]">
          <p className="text-xs tracking-[0.26em] uppercase font-semibold text-amber-800">Fleet Reservations</p>
          <h1 className="mt-4 text-5xl font-black leading-[1.05] text-zinc-900">
            Book Your Next Ride Without Calls Or Queues
          </h1>
          <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
            Our customer portal lets you pick dates, view available vehicles, and submit reservations online in one flow.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/reserve"
              className="rounded-xl bg-zinc-900 text-white px-5 py-3 font-semibold"
            >
              Start Reservation
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-zinc-900 text-zinc-900 px-5 py-3 font-semibold"
            >
              Staff Login
            </Link>
          </div>
        </section>

        <section className="bg-zinc-950 text-zinc-100 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <ol className="mt-6 space-y-4 text-zinc-300 list-decimal list-inside">
            <li>Select your customer profile and rental dates.</li>
            <li>Choose from live available vehicles.</li>
            <li>Review your pricing estimate and confirm reservation.</li>
          </ol>

          <p className="mt-8 text-sm text-zinc-400">
            Need assistance? Staff can still manage reservations in the internal dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}