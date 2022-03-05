import { Typography } from "@material-ui/core";
import React from "react";

const AboutAJ = (props) => {
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
  return (
    <div style={{ margin: "2% 8%" }}>
      <Typography style={style.head}>About Us</Typography>
      <Typography style={style.content}>
        The Auction Journal has been designed by Auctioneers and Consumers to be
        the best and most robust website for auction listings built for search
        and ease of use.
      </Typography>
      <Typography style={style.content}>
        The chief end of the Auction Journal is provide the highest quality
        services to auctioneers and the public to the glory of God.
      </Typography>
      <Typography style={style.content}>
        The Auction Journal is committed to the integrity of the Auction
        industry. The Auction Law section of the website will have the best
        information available about auction law by providing articles, news and
        updates about interesting and important updates to that matter to both
        Auctioneers and the Public. For Auctioneers, the Auction Journal will
        bring in the best listing services using the most state of the art
        technology to effectively help Auctioneers provide the best marketing
        and exposure for their sell their clients real, personal and business
        property with targeted market research, descriptive listings, quality
        photography, live webcast with real-time bidding including online timed
        auctions with quality customer service.
      </Typography>
      <Typography style={style.content}>
        For the Public, the Auction Journal will provide the most robust website
        to find auctions, Auctioneers and the real, personal and business
        property they are selling. For Auctioneers who participate and approve
        your registration request to bid at their auctions, you will have the
        ability to print a bid card at home, show up and avoid the lines to
        register. You will be able to bid real-time at live webcast auctions and
        online auctions. You can create an account and choose auction
        notifications by Auctioneer, by geographic area, type of auction,
        categories and key words. The moment an item is listed that you want
        notified, we will send you an alert.{" "}
      </Typography>
      <Typography style={style.content}>
        The Auction Journal values feedback from Auctioneers and the Public and
        asks for you to help make this the best website in the industry. Please
        Contact Us with any cares, concerns, ideas and suggestions.
      </Typography>
    </div>
  );
};

export default AboutAJ;
