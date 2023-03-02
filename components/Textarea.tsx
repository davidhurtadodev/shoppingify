interface TextareaProps {
  customClasses?: string;
  labelText?: string;
  onChangeFunc: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default function Textarea({
  customClasses,
  labelText,
  onChangeFunc,
  placeholder,
}: TextareaProps) {
  return (
    <div className="mb-4 w-full">
      <label className="mb-1 block text-sm font-normal">{labelText}</label>
      <textarea
        className={` min-h-[110px] w-full rounded-xl border-2 border-unselected px-4 py-5 text-sm font-medium placeholder:text-unselected focus:border-primary-accent focus-visible:border-primary-accent focus-visible:outline-primary-accent ${customClasses} `}
        placeholder="placeholder"
        onChange={(e) => onChangeFunc(e)}
      ></textarea>
    </div>
  );
}
