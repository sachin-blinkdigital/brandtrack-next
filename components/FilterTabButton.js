import React from "react";

export default function FilterTabButton({ label, name, activeTab, onClick }) {
  var activeClass = activeTab == name ? "active" : "";
  return (
    <button
      className={`btn rounded-full btn-filter btn-instagram mr-1 ${activeClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
