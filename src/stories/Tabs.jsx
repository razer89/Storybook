import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({ tabs, activeTab }) => {
  const [active, setActive] = useState(activeTab);

  const handleTabClick = (tabId) => {
    setActive(tabId);
  };

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${active === tab.id ? 'active' : ''}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={active === tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{ backgroundColor: active === tab.id ? tab.backgroundColor : '' }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {tabs.map((tab) => (
          <div
            className={`tab-pane fade ${active === tab.id ? 'show active' : ''} ${tab.contentClass}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            key={tab.id}
            style={{ backgroundColor: active === tab.id ? tab.backgroundColor : '' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;