interface InputProps {
  labelText?: string;
  type?: string;
  customClasses?: string;
  placeholder?: string;
}

export default function Input({
  labelText,
  type,
  customClasses,
  placeholder,
}: InputProps) {
  return (
    <div className="mb-4 w-full">
      {labelText ? (
        <label className="mb-1 block text-sm font-normal">{labelText}</label>
      ) : null}
      {type === 'checkbox' ? (
        <input
          type="checkbox"
          className="mr-2  grid h-6 w-6 appearance-none place-content-center rounded border-2 border-primary-accent text-primary-accent before:h-6 before:w-6 before:scale-0 checked:before:scale-100    checked:before:bg-[url('/assets/icons/done.svg')]"
        />
      ) : (
        <input
          type={!type ? 'text' : type}
          className={`w-full rounded-xl border-2 border-unselected px-4 py-5 text-sm font-medium placeholder:text-unselected ${customClasses}`}
          placeholder={placeholder ? placeholder : ''}
        />
      )}
    </div>
  );
}
