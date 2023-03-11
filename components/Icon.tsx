interface IconProps {
  icon: string;
  customClasses?: string;
  filled?: boolean;
}

export default function Icon({ icon, customClasses, filled }: IconProps) {
  return (
    <span
      className={
        !filled
          ? `material-icons-outlined  ${customClasses}`
          : `material-icons  ${customClasses}`
      }
    >
      {icon}
    </span>
  );
}
