import { twMerge } from "tailwind-merge";

export default function Container({children, className, ...rest}) {
  return (
    <div
    {...rest}
    className={twMerge("max-w-7xl mx-auto px-2 lg:px-0", className)}
    >
        {children}
    </div>
  );
}