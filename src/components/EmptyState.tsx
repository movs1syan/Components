import React from "react";

interface Props {
  description?: string;
  image?: string;
}

const EmptyState: React.FC<Props> = ({ description = "No data", image = "/public/file.png" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={image} alt="no-data" />
      <div className="text-gray-600 text-center text-sm">
        {description}
      </div>
    </div>
  );
};

export default EmptyState;
