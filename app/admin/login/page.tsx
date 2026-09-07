import { LoginForm } from "./login-form";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] p-6">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FBBE2C] bg-[#0B1F33] text-lg font-black text-white">L</div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.32em] text-[#FBBE2C]">ADMIN PORTAL</p>
          <h1 className="mt-2 text-3xl font-black text-[#0B1F33]">Sign in</h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
