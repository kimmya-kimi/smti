interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,#ff4d6d,#f7c35f,#54f2c3)] transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
