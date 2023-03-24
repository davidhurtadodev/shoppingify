import helper from '@/lib/helper';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CategorySectionTest({
  title,
  children,
}: CategorySectionProps) {
  return (
    <div>
      <h2 className="mb-5 text-base font-medium">
        {helper.capitalizeString(title)}
      </h2>
      <div className="gap-x-{2} gap-y-{6} mb-12 grid  grid-cols-2 gap-y-12 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
