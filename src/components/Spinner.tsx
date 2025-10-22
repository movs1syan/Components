import React from 'react';

interface SpinnerProps {
  size?: "small" | "default" | "large";
  tip?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "default", tip }) => {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "w-4 h-4 border-2";
      break;
    case "large":
      sizeClasses = "w-10 h-10 border-4";
      break;
    default:
      sizeClasses = "w-6 h-6 border-3";
      break;
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin rounded-full border-solid border-t-transparent border-blue-500 ` + sizeClasses}></div>
      {tip && <span className="text-gray-600 text-sm">{tip}</span>}
    </div>
  );
};

export default Spinner;