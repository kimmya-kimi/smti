interface JobListProps {
  jobs: [string, string, string];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid gap-3">
      {jobs.map((job, index) => (
        <div
          key={job}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white/92"
        >
          <span className="text-[11px] font-semibold tracking-[0.35em] text-gold sm:text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium sm:text-base">{job}</span>
        </div>
      ))}
    </div>
  );
}
