import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

type ShadeOverrides = {
  primary?: number[];
  default?: number[];
  dashed?: number[];
  text?: number[];
  link?: number[];
}

const COMMON_STYLES = {
  defaultBase: "border border-[#e0e0e0]",
  dashedBase: "border border-dashed border-[#e0e0e0]",
  textBase: "border-none",
  linkBase: "border-none",
};

const createColorScheme = (color: string, shadeOverrides: ShadeOverrides = {}) => {
  const shades = {
    primary: shadeOverrides.primary || [700, 800, 900],
    default: shadeOverrides.default || [400, 700],
    dashed: shadeOverrides.dashed || [400, 700],
    text: shadeOverrides.text || [700, 100, 300],
    link: shadeOverrides.link || [400, 600, 900],
  };

  return {
    primary: {
      base: `bg-${color}-${shades.primary[0]} text-white`,
      hover: `hover:bg-${color}-${shades.primary[1]}`,
      active: `active:bg-${color}-${shades.primary[2]}`,
    },
    default: {
      base: COMMON_STYLES.defaultBase,
      hover: `hover:border-${color}-${shades.default[0]} hover:text-${color}-${shades.default[0]}`,
      active: `active:border-${color}-${shades.default[1]} active:text-${color}-${shades.default[1]}`,
    },
    dashed: {
      base: COMMON_STYLES.dashedBase,
      hover: `hover:border-${color}-${shades.dashed[0]} hover:text-${color}-${shades.dashed[0]}`,
      active: `active:border-${color}-${shades.dashed[1]} active:text-${color}-${shades.dashed[1]}`,
    },
    text: {
      base: `${COMMON_STYLES.textBase} text-${color}-${shades.text[0]}`,
      hover: `hover:bg-${color}-${shades.text[1]}`,
      active: `active:bg-${color}-${shades.text[2]}`,
    },
    link: {
      base: `${COMMON_STYLES.linkBase} text-${color}-${shades.link[0]}`,
      hover: `hover:text-${color}-${shades.link[1]}`,
      active: `active:text-${color}-${shades.link[2]}`,
    },
  };
};

const colorSchemes = {
  blue: createColorScheme("blue"),
  red: createColorScheme("red"),
  green: createColorScheme("green"),
  orange: createColorScheme("orange", {
    primary: [400, 500, 600],
    text: [400, 100, 200],
    link: [400, 500, 900],
  }),
  yellow: createColorScheme("yellow", {
    primary: [400, 500, 600],
    text: [400, 100, 200],
    link: [400, 500, 600],
  }),
};

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const iconSizeMap: Record<"sm" | "md" | "lg", number> = {
  sm: 15,
  md: 20,
  lg: 30,
};

type LucideIconName = keyof typeof LucideIcons;

interface Props {
  htmlType?: "button" | "submit" | "reset";
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "sm" | "md" | "lg";
  color?: keyof typeof colorSchemes;
  icon?: LucideIconName;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  htmlType = "button",
  type = "default",
  size = "md",
  color = "blue",
  icon,
  iconPosition = "start",
  children,
  onClick = () => {},
}) => {
  const IconComponent = icon
    ? (LucideIcons[icon] as React.ComponentType<LucideProps>)
    : null;

  const colorSet = colorSchemes[color][type];

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md font-medium cursor-pointer transition-colors duration-300 ease-in-out text-black
        ${sizes[size]}
        ${colorSet.base} ${colorSet.hover} ${colorSet.active}`}
    >
      {IconComponent && (
        <IconComponent className={`${iconPosition === "end" ? "order-1" : ""}`} size={iconSizeMap[size]} />
      )}
      {children}
    </button>
  );
};

export default Button;
