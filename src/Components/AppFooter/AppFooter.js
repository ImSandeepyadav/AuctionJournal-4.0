import { IconButton, TextField, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import {
  FaInstagramSquare,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import React from "react";
import Button from '../../UiComponents/Buttons';
import Logoimg from '../../static/logo.svg';

const footerMenu = [
  {
    head: "RESOURCES",
    menu: [
      { name: "About Us", path: "/aboutAJ" },
      { name: "Privacy Policy", path: "/privacyPolicy" },
      { name: "Data Security", path: "/dataSecurity" },
      { name: "Terms & Conditions", path: "/termsAndConditions" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    head: "BUSINESSES",
    menu: [
      { name: "Find Auctions", path: "/findAuctions" },
      { name: "Auctioneer Directory", path: "/auctioneerDirectories" },
      { name: "How To Sell ", path: "/howToSell" },
      { name: "How To Buy", path: "/howToBuy" },
      { name: "Advertise with Us", path: "/advertise" },
    ],
  },
];

const AppFooter = (props) => {
  const { width } = props;
  return (
    <div>
      <div
        style={{
          background: "#E9E9E9",
          padding: "2% 5%",
          display: width === "xs" ? "block" : "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: width === "xs" ? "100%" : "30%" }}>
          <Logo width={width} />{" "}
        </div>
        <div
          style={{
            display: "flex",
            width: width === "xs" ? "100%" : "40%",
            margin: width === "xs" ? "4% 0" : "",
          }}
        >
          <div
            style={{
              width: "50%",
              marginLeft: width === "xs" ? "" : "5%",
            }}
          >
            <MenuDisplay width={width} menus={footerMenu[0]} />
          </div>
          <div style={{ width: "50%" }}>
            <MenuDisplay width={width} menus={footerMenu[1]} />
          </div>
        </div>
        <div style={{ width: width === "xs" ? "100%" : "30%" }}>
          <Subscribe width={width} />
        </div>
        {width === "xs" ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <SocialIcons width={width} />
          </div>
        ) : (
          ""
        )}
      </div>{" "}
      <div>
        <Typography
          style={{
            fontSize: width === "xs" ? "10px" : "16px",
            textAlign: "center",
            color: "#646464",
            margin: "0.5% 0",
          }}
        >
          Copyright ©️2021 THE AUCTION JOURNAL, Inc. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default AppFooter;

const Logo = ({ width }) => {
  return (
    <div>
      <img
        src = {Logoimg}
        width={width === "xs" ? "40%" : "90%"}
      />{" "}
      <Typography
        style={{
          fontSize: width === "xs" ? "12px" : width === "sm" ? "12px" : "16px",
          width: width === "xs" ? "" : width === "sm" ? "160px" : "200px",
        }}
      >
        Join us on social for latest content marketing tips, trends and humor.
      </Typography>
      {width === "xs" ? "" : <SocialIcons width={width} />}
    </div>
  );
};

const MenuDisplay = ({ width, menus }) => {
  const { head, menu } = menus;
  const history = useNavigate();

  return (
    <div>
      <Typography
        style={{
          fontWeight: "bold",
          marginBottom: "7%",
          marginTop: "2px",
          fontSize: width === "xs" ? "12px" : width === "sm" ? "12px" : "15px",
        }}
      >
        {head}
      </Typography>
      {menu.map((item) => {
        return (
          <Typography
            style={{
              color: "#656E7B",
              marginBottom: "2%",
              fontSize:
                width === "xs" ? "12px" : width === "sm" ? "12px" : "15px",
              cursor: "pointer",
            }}
            onClick={() => history.push(item.path)}
          >
            {item.name}
          </Typography>
        );
      })}
    </div>
  );
};

const Subscribe = ({ width }) => {
  return (
    <div>
      <Typography
        style={{
          fontWeight: "bold",
          marginBottom: width === "xs" ? "2%" : "5%",
          marginTop: "2px",
          fontSize: width === "xs" ? "12px" : width === "sm" ? "12px" : "15px",
        }}
      >
        SUBSCRIBE TO OUR NEWSLETTER
      </Typography>
      <Typography
        style={{
          color: "#656E7B",
          fontSize: width === "xs" ? "12px" : width === "sm" ? "12px" : "15px",
        }}
      >
        Enter your E-mail below and never miss an update from us
      </Typography>
      <div style={{ margin: "3% 0", display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          style={{ background: "#fff" }}
          size="small"
          placeholder="E-mail"
        />
        <Button btntype="contained">
          {width === "xs" || width === "sm" ? <IoMdSend /> : "Subscribe"}
        </Button>
      </div>
    </div>
  );
};

const SocialIcons = ({ width }) => {
  return (
    <div
      style={{
        color: "#000000",
        display: width === "xs" ? "flex" : "block",
        justifyContent: "center",
        margin: "2% 0",
      }}
    >
      <IconButton style={{ color: "#000000" }}>
        <FaTwitter size={width === "xs" ? 18 : width === "sm" ? 18 : 20} />
      </IconButton>
      <IconButton style={{ color: "#000000" }}>
        <FaInstagramSquare
          size={width === "xs" ? 18 : width === "sm" ? 18 : 20}
        />
      </IconButton>
      <IconButton style={{ color: "#000000" }}>
        <FaFacebook size={width === "xs" ? 18 : width === "sm" ? 18 : 20} />
      </IconButton>

      <IconButton style={{ color: "#000000" }}>
        <FaYoutube size={width === "xs" ? 18 : width === "sm" ? 18 : 20} />
      </IconButton>
    </div>
  );
};
