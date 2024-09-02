import { cn } from "@utils/index";
import { FC, InputHTMLAttributes, memo } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextField: FC<TextFieldProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black",
        className,
      )}
      {...props}
    />
  );
};

export default memo(TextField);
