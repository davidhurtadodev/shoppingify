interface IconProps {
  icon: string;
  customClasses?: string;
}

export default function Icon({ icon, customClasses }: IconProps) {
  return (
    <span className={`material-icons-outlined  ${customClasses}`}>{icon}</span>
  );
}
