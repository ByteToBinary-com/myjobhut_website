type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div data-reveal="scale" className="rounded-3xl border border-[#BFDBFE] bg-white/90 p-6 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-slate-950">{value}</div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</div>
    </div>
  );
}
