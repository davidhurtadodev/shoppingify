import { useState } from 'react';

interface MenuTabInterface {
  icon: string;
  iconCustomStyle?: string;
}

export default function MenuTab({ icon, iconCustomStyle }: MenuTabInterface) {
  const [isActive, setIsActive] = useState(false);

  const activeStyles = isActive
    ? 'before:absolute before:left-0 before:block before:h-full before:w-1.5 before:rounded-r before:bg-primary-accent'
    : '';

  return (
    <div
      className={`relative mb-16  flex items-center justify-center ${activeStyles}`}
    >
      <span
        className={`material-icons${iconCustomStyle ? iconCustomStyle : ''}`}
      >
        {icon}
      </span>
    </div>
  );
}
