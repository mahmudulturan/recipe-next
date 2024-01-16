import { twMerge } from "tailwind-merge";

export default function Container({children, className, ...rest}) {
  return (
    <div
    {...rest}
    className={twMerge("max-w-7xl mx-auto")}
    >
        {children}
    </div>
  );
}