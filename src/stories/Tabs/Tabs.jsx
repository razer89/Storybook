import React, { useState } from 'react';
import './tabs.less';

const Tabs = ({ tabs, activeTab, isVertical, verticalClass }) => {
  const [active, setActive] = useState(activeTab);

  const handleTabClick = (tabId) => {
    setActive(tabId);
  };

  return (
    <div className={isVertical ? verticalClass : ''}>
      {isVertical ? (
        <div className="d-flex align-items-start">
          <div className={`nav flex-column nav-pills ${isVertical ? 'flex-column' : ''}`} id="v-pills-tab" role="tablist">
            {tabs.map((tab) => (
              <button
                className={`nav-link ${active === tab.id ? 'active' : ''}`}
                id={`${tab.id}-tab`}
                data-toggle="pill"
                href={`#${tab.id}`}
                role="tab"
                aria-controls={tab.id}
                aria-selected={active === tab.id}
                onClick={() => handleTabClick(tab.id)}
                key={tab.id}
                style={{ backgroundColor: active === tab.id ? tab.backgroundColor : '' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content" id="v-pills-tabContent">
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
      ) : (
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link ${active === tab.id ? 'active' : ''}`}
                  id={`${tab.id}-tab`}
                  data-toggle="tab"
                  href={`#${tab.id}`}
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
      )}
    </div>
  );
};

export default Tabs;