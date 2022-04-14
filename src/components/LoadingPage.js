import React from "react";

const LoadingPage = () => {
  return (
    <>
      <div className="notebook-loading-page">
        <div className="notebookName">
          <span>N</span>
          <span>O</span>
          <span>T</span>
          <span>E</span>
          <span>B</span>
          <span>O</span>
          <span>O</span>
          <span>K</span>
        </div>
        <div className="notebookLoaderBox">
          <div className="notebook-loader">
            <span style={{ "--i": "1" }}></span>
            <span style={{ "--i": "2" }}></span>
            <span style={{ "--i": "3" }}></span>
            <span style={{ "--i": "4" }}></span>
            <span style={{ "--i": "5" }}></span>
            <span style={{ "--i": "6" }}></span>
            <span style={{ "--i": "7" }}></span>
            <span style={{ "--i": "8" }}></span>
            <span style={{ "--i": "9" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
          </div>
          <div className="notebook-loader-text">loading...</div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
