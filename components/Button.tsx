interface ButtonInterface {
  text?: string;
  customClasses?: string;
  customIconClasses?: string;
  buttonType?: any;
  icon?: string;
  children: React.ReactNode;
  onClickFunc?: () => void;
}

export default function Button({
  buttonType,
  customClasses,
  children,
  onClickFunc,
}: ButtonInterface) {
  return (
    <button
      type={!buttonType ? 'button' : buttonType}
      className={customClasses}
      onClick={onClickFunc}
    >
      {children}
    </button>
  );
}
