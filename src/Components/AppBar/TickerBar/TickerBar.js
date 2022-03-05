import { Typography } from "@material-ui/core";
import React from "react";
import Marquee from "react-fast-marquee";

const item = [
  { symbol: "TBA", auctionType: "LIVE WEBCASTE", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "ONLINE ABSOLUTE", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "ONLINE ABSOLUTE", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "ONSITE", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "ONLINE TIMED", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "LIVE WEBCASTE", lot: "12", price: "123" },
  { symbol: "TBA", auctionType: "ONSITE", lot: "12", price: "123" },

];

function TickerBar(props) {
  const { width } = props;
  return (
    <div style={{ background: "#000" }}>
      <Marquee play={true} pauseOnHover={true} speed={40} gradientWidth="0">
        {item.map((i) => {
          return (
            <Item
              width={width}
              symbol={i.symbol}
              auctionType={i.auctionType}
              lot={i.lot}
              price={i.price}
            />
          );
        })}
      </Marquee>
    </div>
  );
}

export default TickerBar;

const Item = (props) => {
  const { width, symbol, auctionType, lot, price } = props;

  const textStyle = {
    color: "white",
    marginRight: "5px",
    fontSize: width === "xs" ? "10px" : width === "sm" ? "12px" : "16px",
  };
  const buttonColor = {
    "LIVE WEBCASTE": "#00FF08",
    "ONLINE ABSOLUTE": "#FF0000",
    "ONLINE TIMED": "#FFEE00",
    "ONSITE": "#00CBFF",
  };
  const buttonStyle = {
    fontSize: width === "xs" ? "10px" : width === "sm" ? "12px" : "16px",
    cursor: "pointer",
    borderTop: `1.5px solid ${buttonColor[auctionType]}`,
    borderLeft: `1px solid ${buttonColor[auctionType]}`,
    borderRight: `1px solid ${buttonColor[auctionType]}`,
    borderBottom: `1.5px solid ${buttonColor[auctionType]}`,

    color: buttonColor[auctionType],
    padding: "0 5px",
    marginRight: "5px",
  };
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        margin: "8px 100px",
      }}
    >
      <Typography style={textStyle}>{symbol}</Typography>

      <div>
        <Typography style={buttonStyle}>{auctionType}</Typography>
      </div>
      <Typography style={textStyle}>LOT#{lot}</Typography>
      <Typography style={textStyle}>${price}</Typography>
    </div>
  );
};
