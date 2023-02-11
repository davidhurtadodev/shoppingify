import CategoryGrid from './CategoryGrid';

export default function MainItems() {
  return (
    <>
      <h1 className="mb-5 hidden text-[26px] font-medium">
        <span className="  text-primary-accent">Shoppingify</span> allows you
        take your shopping list wherever you go
      </h1>
      <CategoryGrid />
    </>
  );
}
