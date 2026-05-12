import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <h1 className="text-3xl font-bold">SitePulse</h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Welcome to SitePulse. Backend API is in progress. You can preview the new detailed About Us page below.
      </p>
      <Link
        href="/about-us"
        className="mt-6 inline-flex rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
      >
        Visit About Us
      </Link>
    </main>
  );
}
