import React, { useState, useEffect } from "react";

import DashboardTable from "../components/dashboard/DashboardTable";
import FilterButtonGroup from "../components/FilterButtonGroup";
import FilterRowsButton from "../components/FilterRowsButton";
import FilterButton from "../components/actions/FilterButton";

import useFetch from "../hooks/useFetch";

export default function Dashboard({ volumeData }) {
  const [activeTab, setactiveTab] = useState("instagram");

  const [searchVolume, setsearchVolume] = useState(null);

  const handleOnTabButtonClick = (name) => {
    setactiveTab(name);
  };

  useEffect(() => {
    const rankedVolumes =
      volumeData &&
      volumeData.data.map((item, index) => {
        return { rank: index + 1, ...item };
      });
    setsearchVolume(rankedVolumes);
  }, [volumeData]);

  //console.log(searchVolume);

  return (
    <>
      <main>
        <div className="py-4 w-full max-w-9xl mx-auto">
          <div className="mb-4 main-head">
            <h2>
              The Digital Presence Index measures brand's Digital Footprints
            </h2>
          </div>

          <div className="grid grid-flow-col sm:auto-cols-max justify-between gap-2 mb-4 filters-wrap">
            <FilterButtonGroup
              activeTab={activeTab}
              onFilterButtonClick={handleOnTabButtonClick}
            />
            <div className="justify-end filter-rows-wrap">
              <FilterRowsButton />
              <FilterButton />
            </div>
          </div>

          <DashboardTable tableData={searchVolume} activeTab={activeTab} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const brandRes = await fetch(`https://blinklocal.in/api/volume/`);
  const volumeData = await brandRes.json();

  // Pass data to the page via props
  return { props: { volumeData } };
}
