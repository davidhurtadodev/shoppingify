interface TextareaProps {
  customClasses: string;
  labelText: string;
}

export default function Textarea({ customClasses, labelText }: TextareaProps) {
  return (
    <div className="mb-4 w-full">
      <label className="mb-1 block text-sm font-normal">{labelText}</label>
      <textarea
        className={`min-h-[110px] w-full rounded-xl border-2 border-unselected px-4 py-5 text-sm font-medium placeholder:text-unselected ${customClasses} `}
        placeholder="Enter a note"
      ></textarea>
    </div>
  );
}
