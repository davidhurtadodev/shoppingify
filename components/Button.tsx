interface ButtonInterface {
  text?: string;
  disabled?: boolean;
  customClasses?: string;
  customIconClasses?: string;
  buttonType?: any;
  icon?: string;
  children: React.ReactNode;
  onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({
  buttonType,
  customClasses,
  children,
  onClickFunc,
  disabled,
}: ButtonInterface) {
  return (
    <button
      type={!buttonType ? 'button' : buttonType}
      className={customClasses}
      onClick={onClickFunc ? (e) => onClickFunc(e) : undefined}
      disabled={disabled && disabled}
    >
      {children}
    </button>
  );
}
