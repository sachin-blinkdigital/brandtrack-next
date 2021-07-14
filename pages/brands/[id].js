import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import DashboardCard05 from "@/components/dashboard/DashboardCard05";
import ContentLoader from "react-content-loader";

import { formatNumber } from "@/utils/Utils";

export default function Brand({ response }) {
  const brandData = response.data[0];

  //console.log(brandData);
  useEffect(() => {
    document.body.classList.add("bg-lgray");
    return () => {
      document.body.classList.remove("bg-lgray");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title data-react-helmet="true"></title>
        <meta
          name="description"
          content="brand desc"
          data-react-helmet="true"
        />
      </Helmet>
      <main>
        <div className="brandpage">
          <div className="name-section">
            <div className="logo-wrap">
              <>
                <img
                  src={
                    brandData.thumbnail || "https://via.placeholder.com/300.png"
                  }
                  className="img-responsive"
                  alt=""
                />
                <div className="meta">
                  <h2>{brandData.heading}</h2>
                  <div>
                    <div className="namepill mr-1">
                      Rank #1{" "}
                      <span className="stat-update">
                        23 <i className="fa fa-caret-up" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div className="namepill">QSR</div>
                  </div>
                </div>
              </>
            </div>
          </div>
          <div className="content">
            <div className="stats-section">
              <div className="head">
                <h3>Digital Presence Stats</h3>
              </div>
              <div className="filters">
                <ul>
                  <li>All |</li>
                  <li>1 Day |</li>
                  <li>7 Days |</li>
                  <li>1 MTH |</li>
                  <li>3 MTH |</li>
                  <li>1 Year</li>
                </ul>
              </div>
              <div className="stats-content">
                <div className="unit">
                  <h4>Total score</h4>
                  <div className="value">
                    <div>707,454,87</div>
                    <span className="text-green-500">
                      41% <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="unit">
                  <h4>Engagement</h4>
                  <div className="value">
                    <div>707,454,87</div>
                    <span className="text-green-500">
                      41% <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="unit">
                  <h4>Mentions</h4>
                  <div className="value">
                    <div>707,454,87</div>
                    <span className="text-green-500">
                      41% <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="unit">
                  <h4>Search Volume</h4>
                  <div className="value">
                    <div>{brandData && formatNumber(brandData.volume)}</div>
                    <span className="text-green-500">
                      41% <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="unit">
                  <h4>Reach & Impressions</h4>
                  <div className="value">
                    <div>707,454,87</div>
                    <span className="text-red-500">
                      41%{" "}
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-section">
              <div className="head">
                <h3>KFC Total Value</h3>
                <div className="tablist">
                  <ul>
                    <li>All |</li>
                    <li>1 Day | </li>
                    <li>7 Days |</li>
                    <li>1 MTH | </li>
                    <li>3 MTH |</li>
                    <li>1 Year </li>
                  </ul>
                </div>
              </div>
              <div>
                <DashboardCard05 />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://blinklocal.in/api/volume/");
  const brands = await res.json();

  const paths = brands?.data?.map((brand) => ({
    params: { id: brand.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // params contains the brand `id`.
  // If the route is like /brands/1, then params.id is 1

  const brandRes = await fetch(
    `https://blinklocal.in/api/volume/${context.params.id}`
  );
  const response = await brandRes.json();

  //console.log(context);

  // Pass data to the page via props
  return { props: { response } };
}
