import React, { useState, useRef, useEffect } from "react";
import type { ReactElement } from "react";

interface DropdownItem {
  key: string;
  label: React.ReactNode | string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

interface Props {
  menu?: DropdownItem[];
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
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (trigger === "click") {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [trigger]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      timeoutRef.current = setTimeout(() => setOpen(false), 150);
    }
  };
  const handleClick = () => trigger === "click" && setOpen((prev) => !prev);

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
    
    ${placement === "bottom" ? "after:left-1/2 after:-translate-x-1/2 mt-2 after:border-t after:border-l after:border-gray-200" : ""}
    ${placement === "bottomLeft" ? "after:left-1/8 after:-translate-x-1/2 mt-2 after:border-t after:border-l after:border-gray-200" : ""}
    ${placement === "bottomRight" ? "after:right-1/8 after:-translate-x-1/2 mt-2 after:border-t after:border-l after:border-gray-200" : ""}

    ${placement === "top" ? "after:left-1/2 after:-translate-x-1/2 mb-2 after:border-b after:border-r after:border-gray-200" : ""}
    ${placement === "topLeft" ? "after:left-1/8 after:-translate-x-1/2 mb-2 after:border-b after:border-r after:border-gray-200" : ""}
    ${placement === "topRight" ? "after:right-1/8 after:-translate-x-1/2 mb-2 after:border-b after:border-r after:border-gray-200" : ""}
  `
    : "";

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={`cursor-pointer transition-all duration-200 ease-out text-blue-700 ${trigger === "click" ? "active:opacity-70" : "hover:opacity-70"}`}>
        {children}
      </div>

      <div
        className={`
          absolute min-w-56 p-2 bg-white shadow-md rounded-md ring-1 ring-gray-200 backdrop-blur-sm transform transition-all duration-200 ease-out
          ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}
          ${placementClasses}
          ${arrowClasses}
        `}
      >
        {menu?.map((item) => {
          const label =
            item.disabled && React.isValidElement(item.label) && item.label.type === "a"
              ? React.cloneElement(item.label as ReactElement<HTMLAnchorElement>, {
                href: undefined,
                className:
                  "pointer-events-none text-gray-400 cursor-not-allowed select-none",
              })
              : item.label;

          return (
            <button
              key={item.key}
              type="button"
              disabled={item.disabled}
              onClick={(e) => {
                e.stopPropagation();
                if (!item.disabled) item.onClick?.();
              }}
              className={`
               w-full text-left px-4 py-2 flex items-center gap-2 rounded-md transition-colors
                ${item.danger ? "text-red-600 hover:bg-red-600 hover:text-white" : "hover:bg-gray-100"}
                ${item.disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : "cursor-pointer"}
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
