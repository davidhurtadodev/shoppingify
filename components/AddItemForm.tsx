import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';

export default function AddItemForm() {
  return (
    <div className="bg-light-gray px-3">
      <form>
        <h2 className="mb-5  text-2xl font-medium">Add a new item</h2>
        <Input labelText="Name" placeholder="Enter a name" />
        <div className="mb-4 w-full">
          <label className="mb-1 block text-sm font-normal">
            Note (optional)
          </label>
          <textarea
            className={`min-h-[110px] w-full rounded-xl border-2 border-unselected px-4 py-5 text-sm font-medium placeholder:text-unselected `}
            placeholder="Enter a note"
          ></textarea>
        </div>
        <Input labelText="Image (optional)" placeholder="Enter a url" />
        <div className="flex justify-center">
          <Button customClasses="font-bold text-base px-6 py-5 bg-transparent border-0">
            cancel
          </Button>
          <Button customClasses="bg-primary-accent font-bold text-base px-6 py-5 text-white rounded-xl">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
