import { FC, memo, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-[#2f2f31] focus:outline-none active:bg-black transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};

export default memo(Button);
