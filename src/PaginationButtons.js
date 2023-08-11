import React from "react";

const PaginationButtons = ({ onNextPage, onPrevPage }) => {
  return (
    <div className="pag-buttons">
      <button onClick={onPrevPage}>Previous Page</button>
      <button onClick={onNextPage}>Next Page</button>
    </div>
  );
};

export default PaginationButtons;
