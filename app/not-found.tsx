import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell section-shell">
      <div className="mx-auto max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FBBE2C]">404</p>
        <h1 className="mt-4 text-4xl font-black text-[#0B1F33]">Looks like you&apos;ve taken a wrong turn.</h1>
        <p className="mt-4 text-slate-600">The page you are looking for may have moved or no longer exists.</p>
        <Link href="/" className="gold-button mt-8">BACK TO HOME</Link>
      </div>
    </main>
  );
}
