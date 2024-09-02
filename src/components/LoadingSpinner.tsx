import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="min-w-full flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default LoadingSpinner;
