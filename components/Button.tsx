interface ButtonInterface {
  text?: string;
  customClasses?: string;
  type?: any;
  customIconClasses?: string;
  buttonType?: any;
  icon?: string;
  children: React.ReactNode;
}

export default function Button({
  buttonType,
  customClasses,
  children,
}: ButtonInterface) {
  return (
    <button
      type={!buttonType ? 'button' : buttonType}
      className={customClasses}
    >
      {children}
    </button>
  );
}
