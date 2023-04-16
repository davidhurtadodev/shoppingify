import { useState } from 'react';
import { useRouter } from 'next/router';

interface MenuTabProps {
  children: React.ReactNode;
  hrefReference: string;
}

export default function MenuTab({ children, hrefReference }: MenuTabProps) {
  const router = useRouter();

  let isActive = false;
  if (router.route === hrefReference) isActive = true;

  const activeStyles = isActive
    ? 'before:absolute before:left-0 before:block before:h-full before:w-1.5 before:rounded-r before:bg-primary-accent'
    : '';

  return (
    <div
      className={`group relative mb-16  flex h-11 cursor-pointer items-center justify-center ${activeStyles}`}
    >
      {children}
    </div>
  );
}
