import React from "react";

function Copright(props) {
  const { width } = props;
  const style = {
    head: {
      fontWeight: "bold",
      fontSize: width === "xs" ? "15px" : width === "sm" ? "23px" : "32px",
      marginTop: "3%",
    },
    subHead: {
      fontWeight: "bold",
      fontSize: width === "xs" ? "10px" : width === "sm" ? "14px" : "20px",
      margin: "2% 0 1% 0",
    },
    contentHead: { fontWeight: "bold" },
    content: {
      margin: "1% 0",
      fontSize: width === "xs" ? "8px" : width === "sm" ? "12px" : "15px",
    },
    bullet: {
      fontSize: width === "xs" ? "8px" : width === "sm" ? "12px" : "15px",
    },
  };
  return <div style={{ margin: "2% 8%" }}></div>;
}

export default Copright;
