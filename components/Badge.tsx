interface BadgeProps {
  isCancelled: boolean;
  customClasses?: string;
}

export default function Badge({ isCancelled, customClasses }: BadgeProps) {
  return !isCancelled ? (
    <div
      className={`${customClasses} w-20 rounded-lg border border-solid border-accept py-1 text-xs font-medium text-accept`}
    >
      completed
    </div>
  ) : (
    <div
      className={`${customClasses} w-20 rounded-lg border border-solid  border-danger py-1 text-xs font-medium text-danger`}
    >
      cancelled
    </div>
  );
}
