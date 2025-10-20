import React, {useEffect, useState} from 'react';

const Button = ({ htmlType="button", type="default", size, color="blue", icon=null, iconPosition="start", title="Button", children }) => {
  const [buttonColor, setButtonColor] = useState({
    baseColor: "",
    hoverColor: "",
    activeColor: "",
  });

  useEffect(() => {
    if (type === "primary") {
      switch (color) {
        case "blue": setButtonColor({baseColor: "bg-blue-700", hoverColor: "hover:bg-blue-800", activeColor: "active:bg-blue-900"}); break;
        case "red": setButtonColor({baseColor: "bg-red-700", hoverColor: "hover:bg-red-800", activeColor: "active:bg-red-900"}); break;
        case "green": setButtonColor({baseColor: "bg-green-700", hoverColor: "hover:bg-green-800", activeColor: "active:bg-green-900"}); break;
        case "orange": setButtonColor({baseColor: "bg-orange-400", hoverColor: "hover:bg-orange-500", activeColor: "active:bg-orange-600"}); break;
        case "yellow": setButtonColor({baseColor: "bg-yellow-400", hoverColor: "hover:bg-yellow-500", activeColor: "active:bg-yellow-600"}); break;
      }
    } else if (type === "default") {
      switch (color) {
        case "blue": setButtonColor({baseColor: "border-[#e0e0e0]", hoverColor: "hover:border-blue-400 hover:text-blue-400", activeColor: "active:border-blue-900 hover:text-blue-900"}); break;
      }
    }
  }, [type, color]);

  return (
    <button
      className={`
        px-3 py-1 rounded-sm cursor-pointer transition-colors ease-in-out ${type === "primary" ? "text-white" : "border-1 text-black"}
        ${buttonColor.baseColor} ${buttonColor.hoverColor} ${buttonColor.activeColor}
      `}
      type={htmlType}
    >
      {children}
    </button>
  );
};

export default Button;