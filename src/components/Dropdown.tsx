import React, { useState, useRef } from "react";

interface DropdownItem {
  key: string;
  label: React.ReactNode | string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

interface Props {
  menu: DropdownItem[];
  trigger?: "hover" | "click";
  placement?: "bottom" | "bottomLeft" | "bottomRight" | "top" | "topLeft" | "topRight";
  arrow?: boolean;
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({
  menu,
  trigger = "hover",
  placement = "bottom",
  arrow = false,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const handleClick = () => setOpen((prev) => !prev);

  const eventProps: React.HTMLAttributes<HTMLDivElement> = {};

  if (trigger === "hover") {
    eventProps.onMouseEnter = handleMouseEnter;
    eventProps.onMouseLeave = handleMouseLeave;
  } else {
    eventProps.onClick = handleClick;
  }

  const handleClickOutside = () => {
    if (dropdownRef.current) setOpen(false);
  };

  const placementClasses =
    placement === "bottomLeft" ? "left-0 top-full origin-top" :
    placement === "bottomRight" ? "right-0 top-full origin-top" :
    placement === "top" ? "bottom-full left-1/2 -translate-x-1/2 origin-bottom" :
    placement === "topLeft" ? "left-0 bottom-full origin-bottom" :
    placement === "topRight" ? "right-0 bottom-full origin-bottom" :
    "top-full left-1/2 -translate-x-1/2 origin-top";

  const arrowClasses = arrow
    ? `
    after:content-[''] after:absolute after:w-3 after:h-3 after:bg-white after:rotate-45
    ${placement.startsWith("bottom") ? "after:top-0 after:-translate-y-2" : ""}
    ${placement.startsWith("top") ? "after:bottom-0 after:translate-y-2" : ""}
    
    ${placement === "bottom" ? "after:left-1/2 after:-translate-x-1/2 after:border-t after:border-l after:border-gray-200" : ""}
    ${placement === "bottomLeft" ? "after:left-1/8 after:-translate-x-1/2 after:border-t after:border-l after:border-gray-200" : ""}
    ${placement === "bottomRight" ? "after:right-1/8 after:-translate-x-1/2 after:border-t after:border-l after:border-gray-200" : ""}

    ${placement === "top" ? "after:left-1/2 after:-translate-x-1/2 after:border-b after:border-r after:border-gray-200" : ""}
    ${placement === "topLeft" ? "after:left-1/8 after:-translate-x-1/2 after:border-b after:border-r after:border-gray-200" : ""}
    ${placement === "topRight" ? "after:right-1/8 after:-translate-x-1/2 after:border-b after:border-r after:border-gray-200" : ""}
  `
    : "";

  return (
    <>
    <div
      ref={dropdownRef}
      className="relative inline-block"
      {...eventProps}
    >
      <div className="cursor-pointer transition-all duration-200 ease-out text-blue-700">
        {children}
      </div>

      {trigger === "hover" && open && (
        <div className={`absolute left-0 right-0 h-3 ${placement.startsWith("bottom") ? "top-full" : "bottom-full"} bg-transparent`} />
      )}

      {/* Dropdown menu */}
      <div
        className={`
        absolute min-w-56 p-2 bg-white shadow-md rounded-md ring-1 ring-gray-200 transform transition-all duration-200 ease-out z-20
        ${open ? `opacity-100 scale-100 ${placement.startsWith("bottom") ? "translate-y-2" : "-translate-y-2"} pointer-events-auto` : `opacity-0 scale-95 -translate-y-1 pointer-events-none`}
        ${placementClasses}
        ${arrowClasses}
      `}
      >
        {menu.map((item) => {
          const isDisabled = !!item.disabled;
          return (
            <div
              key={item.key}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                  e.stopPropagation();
                } else {
                  item.onClick?.();
                }
              }}
              aria-disabled={isDisabled}
              className={`
              w-full text-left px-4 py-2 flex items-center gap-2 rounded-md transition-colors
              ${item.danger ? "text-red-600 hover:bg-red-600 hover:text-white" : "hover:bg-gray-100"}
              ${item.disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}
            `}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>

    {trigger === "click" && open && (
      <div onClick={handleClickOutside} className="fixed inset-0 bg-transparent z-10"></div>
    )}
    </>
  );

};

export default Dropdown;
