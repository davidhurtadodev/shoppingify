import CategoryGrid from './CategoryGrid';

export default function MainItems() {
  return (
    <div className="xl:px-20">
      <h2 className="mb-5 hidden text-[26px] font-medium lg:block">
        <span className="  text-primary-accent">Shoppingify</span> allows you
        take your shopping list wherever you go
      </h2>
      <CategoryGrid />
    </div>
  );
}
