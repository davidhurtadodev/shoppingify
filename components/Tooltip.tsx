interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  return (
    <div className="w-x20 pointer-events-none absolute left-1/4 z-10  ml-12  rounded bg-black-light py-1 px-2 text-center text-xs font-medium text-white opacity-0 group-hover:opacity-100">
      {text}
      <span className=" absolute top-0 bottom-0 left-0 -z-[1] my-auto  h-4 w-4 rotate-45 transform bg-black-light"></span>
    </div>
  );
}
