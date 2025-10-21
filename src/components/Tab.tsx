import React, { useState, useRef, useEffect } from "react";

interface Tab {
  key: string;
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || tabs[0].key);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.key === activeKey);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setIndicatorStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeKey, tabs]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Tab headers */}
      <div className="relative flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(el) => { tabRefs.current[index] = el }}
            onClick={() => setActiveKey(tab.key)}
            className={`px-4 py-2 font-medium transition-colors duration-300 cursor-pointer ${
              activeKey === tab.key ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* Active tab indicator */}
        <div
          className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300"
          style={indicatorStyle}
        />
      </div>

      {/* Tab content */}
      <div className="relative mt-4 min-h-[80px]">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
              activeKey === tab.key ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
