import { useState } from 'react';

interface MenuTabInterface {
  children: React.ReactNode;
}

export default function MenuTab({ children }: MenuTabInterface) {
  const [isActive, setIsActive] = useState(false);

  const activeStyles = isActive
    ? 'before:absolute before:left-0 before:block before:h-full before:w-1.5 before:rounded-r before:bg-primary-accent'
    : '';

  return (
    <div
      className={`relative mb-16  flex cursor-pointer items-center justify-center ${activeStyles}`}
    >
      {children}
    </div>
  );
}
