import Icon from './Icon';
import Button from './Button';
import helper from '@/lib/helper';

export default function CategorySection({ categoryName, items }) {
  return (
    <div>
      <h2 className="mb-5 text-base font-medium">
        {helper.capitalizeString(categoryName)}
      </h2>
      <div className="gap-x-{2} gap-y-{6} mb-12 grid  grid-cols-2 gap-y-12 lg:grid-cols-4">
        {items.map((item: any) => {
          return (
            <div className="h-[70px]" key={item.id}>
              <Button customClasses="text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl ">
                {helper.capitalizeString(item.name)}
                <Icon
                  icon="add"
                  customClasses="block mr-0 ml-auto opacity-20"
                />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
