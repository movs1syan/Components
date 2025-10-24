import React, {useRef} from "react";

interface ItemProps {
  key: string;
  label: string;
  children: React.ReactNode;
}

interface PanelProps {
  items: ItemProps[];
  defaultActiveKeys?: string | string[];
}

const CollapsiblePanel: React.FC<PanelProps> = ({ items, defaultActiveKeys = [] }) => {
  const [activeKeys, setActiveKeys] = React.useState<string[]>(Array.isArray(defaultActiveKeys) ? defaultActiveKeys : [defaultActiveKeys]);

  const togglePanel = (key: string) => {
    setActiveKeys((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm min-w-100 w-fit">
      {items.map(item => {
        const isOpen = activeKeys.includes(item.key);
        const contentRef = useRef<HTMLDivElement>(null);

        return (
          <div key={item.key}>
            <button
              onClick={() => togglePanel(item.key)}
              className="w-full flex justify-start items-center gap-4 cursor-pointer px-4 py-3 border-b border-t border-[#e0e0e0] bg-gray-100 transition"
            >
              <span
                className={`transform transition-transform -rotate-90 ${
                  isOpen ? "rotate-0" : ""
                }`}
              >
                <img src="/public/arrow.png" alt="arrow down" className="h-4 w-4"/>
              </span>
              <span>{item.label}</span>
            </button>

            <div
              ref={contentRef}
              style={{
                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
              }}
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-40" : "max-h-0"}`}
            >
                <div className="p-4 text-gray-600 bg-white">{item.children}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default CollapsiblePanel;
