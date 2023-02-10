interface ButtonInterface {
  text?: string;
  customClasses?: string;
  type?: any;
  customIconClasses?: string;
  buttonType: any;
  icon?: string;
}

export default function Button({
  buttonType,
  icon,
  customClasses,
  text,
  customIconClasses,
}: ButtonInterface) {
  return (
    <button type={buttonType} className={customClasses}>
      {text}
      {icon ? (
        <span className={`material-icons-outlined ${customIconClasses}`}>
          {icon}
        </span>
      ) : null}
    </button>
  );
}
