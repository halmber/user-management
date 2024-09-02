import { cn } from "@utils/index";
import { ButtonHTMLAttributes, FC, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "w-full md:w-auto px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-[#2f2f31] focus:outline-none active:bg-black transition-colors duration-200 ease-in-out",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
