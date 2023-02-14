interface ShoppingCategoryProps {
  title: string;
  children: React.ReactNode;
}

export default function ShoppingCategory({
  title,
  children,
}: ShoppingCategoryProps) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-medium text-[#828282]">{title} </h3>
      {children}
    </div>
  );
}
