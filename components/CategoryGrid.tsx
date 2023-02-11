import Button from './Button';
import Icon from './Icon';

export default function CategoryGrid() {
  return (
    <div>
      <h2 className="mb-5 text-lg font-medium">Fruit and vegetables</h2>
      <div className="gap-x-{2} gap-y-{6} grid grid-cols-2">
        <Button customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl ">
          Avocado
          <Icon icon="add" customClasses="block mr-0 ml-auto opacity-20" />
        </Button>
        <Button customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl ">
          Avocado
          <Icon icon="add" customClasses="block mr-0 ml-auto opacity-20" />
        </Button>
      </div>
    </div>
  );
}
