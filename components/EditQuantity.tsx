import Button from './Button';
import Icon from './Icon';

interface EditQuantityProps {
  children: React.ReactNode;
}

export default function EditQuantity({ children }: EditQuantityProps) {
  return (
    <div className="ml-auto mr-0 flex items-center overflow-hidden rounded-xl bg-white ">
      <Button customClasses="bg-primary-accent self-stretch rounded-xl mr-3 p-3">
        <Icon icon="delete" customClasses="text-white" />
      </Button>
      <Button customClasses="bg-white">
        <Icon icon="remove" customClasses="mr-2 text-primary-accent" />
      </Button>
      <Button customClasses="border-2 mr-2 my-2 border-primary-accent rounded-3xl bg-white text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0">
        {children}
      </Button>
      <Button customClasses="bg-white" customIconClasses="text-primary-accent">
        <Icon icon="add" customClasses="text-primary-accent" />
      </Button>
    </div>
  );
}
