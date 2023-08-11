import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockReports } from "./api";
import { setStockReports } from "./stockReportsSlice";
import StockTable from "./StockTable";
import PaginationButtons from "./PaginationButtons";
import "./App.css"
const App = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockReports();
        dispatch(setStockReports(Object.values(data)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedReports = useSelector((state) =>
    state.stockReports.slice(startIndex, endIndex)
  );

  return (
    <div className="app">
      <h1>Stock Reports</h1>
      <StockTable reports={displayedReports} />
      <PaginationButtons
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default App;
