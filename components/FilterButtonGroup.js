import React, { useEffect } from "react";
import FilterTabButton from "../components/FilterTabButton";

export default function FilterButtonGroup({ activeTab, onFilterButtonClick }) {
  const filters = [
    {
      name: "instagram",
      label: "Instagram",
    },
    {
      name: "facebook",
      label: "Facebook",
    },
    {
      name: "twitter",
      label: "Twitter",
    },
    {
      name: "google-search",
      label: "Google Search",
    },
  ];

  //console.log(getRowsByCount(2, filters));

  return (
    <div className="justify-start tab-buttons">
      {filters &&
        filters.map((filter, index) => {
          return (
            <FilterTabButton
              key={index}
              label={filter.label}
              name={filter.name}
              activeTab={activeTab}
              onClick={() => {
                onFilterButtonClick(filter.name);
              }}
            />
          );
        })}
    </div>
  );
}
