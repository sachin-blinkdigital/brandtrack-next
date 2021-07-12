import React from "react";

export default function FilterRowsButton() {
  const handleRowbuttonclick = (event) => {
    console.log(event.target.value);
  };

  const getRowsByCount = (n, arr) => {
    return arr.slice(0, n);
  };

  return (
    <select
      name="rows mr-1"
      defaultValue={"Default"}
      onChange={handleRowbuttonclick}
    >
      <option value="Default" disabled>
        Rows
      </option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
}
