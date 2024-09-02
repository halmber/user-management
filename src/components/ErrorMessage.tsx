import { FC } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Something went wrong, please try again.</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );
};

export default ErrorMessage;
