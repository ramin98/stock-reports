import React from "react";

const StockTable = ({ reports }) => {
  return (
    <ol>
      {reports.map((report) => (
        <li key={report.symbol}>{report.symbol}</li>
      ))}
    </ol>
  );
};

export default StockTable;
