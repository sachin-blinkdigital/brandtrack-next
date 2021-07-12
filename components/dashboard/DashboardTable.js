import React, { useEffect } from "react";
import LineChart from "../../charts/LineChart01";
// Import utilities
import { tailwindConfig, hexToRGB, formatNumber } from "../../utils/Utils";
import Link from "next/link";

import useSortableData from "../../hooks/useSortableData";
import TableLoader from "../loaders/TableLoader";

function DashboardTable({ tableData, activeTab }) {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 10, 510, 64, 204],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 1,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // // Gray line
      // {
      //   data: [
      //     532, 532, 532, 404, 404, 314, 314,
      //     314, 314, 314, 234, 314, 234, 234,
      //     314, 314, 314, 388, 314, 202, 202,
      //     202, 202, 314, 720, 642,
      //   ],
      //   borderColor: tailwindConfig().theme.colors.gray[300],
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
      //   clip: 20,
      // },
    ],
  };

  const label = "instagram";

  const { items, requestSort, sortConfig } = useSortableData(tableData || []);

  //console.log(items);

  if (activeTab != label) return null;
  if (!tableData) return <TableLoader></TableLoader>;

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dashboard-table">
            {/* Table header */}
            <thead className="text-xs uppercase text-white bg-gray-50 rounded-sm table-head">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">#</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Brand</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">Total Score</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">7d%</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">24hr% </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">Engagement</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">Reach & Impressions</div>
                </th>
                <th className="p-2">
                  <div
                    className="font-semibold btn-sortable"
                    onClick={() => requestSort("volume")}
                  >
                    Search Volume
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold">Mentions</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Chart</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {items &&
                items.map((brand, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2">
                        <div className="text-center">{brand.rank}</div>
                      </td>
                      <td className="p-2">
                        <div className="">
                          <Link
                            href={`/brands/${brand.id}`}
                            className="flex items-center"
                          >
                            <a className="flex items-center">
                              <img
                                src={
                                  brand.thumbnail ||
                                  "https://via.placeholder.com/300.png"
                                }
                                className="brand-icon"
                              />
                              <div className="brand-title whitespace-nowrap">
                                {brand.heading}
                              </div>
                            </a>
                          </Link>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">707,454,37</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-red-500">4%</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-green-500">7.83%</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">7,458,370</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">7,458,370</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">
                          {formatNumber(brand.volume)}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">7,458,370</div>
                      </td>
                      <td>
                        <div className="flex-grow">
                          <LineChart data={chartData} width={150} height={65} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardTable;
