import Button from './Button';

export default function CategoryGrid() {
  return (
    <div>
      <h2 className="mb-5 text-lg font-medium">Fruit and vegetables</h2>
      <div className="gap-x-{2} gap-y-{6} grid grid-cols-2">
        <Button
          buttonType="button"
          text="Avocado"
          icon="add"
          customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl "
          customIconClasses="block mr-0 ml-auto opacity-20"
        />
        <Button
          buttonType="button"
          text="Avocado"
          icon="add"
          customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl "
          customIconClasses="block mr-0 ml-auto opacity-20"
        />
      </div>
    </div>
  );
}
