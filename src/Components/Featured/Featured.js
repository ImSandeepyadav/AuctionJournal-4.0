import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";
import BlogImg from "../../static/blog.svg";

const items = [
  {
    img: BlogImg,
    title: "Hello World, this is the article",
    content:
      "Real Estate this is the content for the headline above... Read More ",
    date: "Feb 19, 4 min read",
    tags: ["Tags", "Tags"],
  },
  {
    img: BlogImg,
    title: "Hello World, this is the article",
    content:
      "Real Estate this is the content for the headline above... Read More ",
    date: "Feb 19, 4 min read",
    tags: ["Tags", "Tags"],
  },
  {
    img: BlogImg,
    title: "Hello World, this is the article",
    content:
      "Real Estate this is the content for the headline above... Read More ",
    date: "Feb 19, 4 min read",
    tags: ["Tags", "Tags"],
  },
];

function TrendingNews(props) {
  const { width } = props;
  const history = useNavigate();

  return (
    <div style={{ margin: "0% 8%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: width == "xs" ? "18px" : width === "sm" ? "18px" : "34px",
            fontWeight: "bold",
          }}
        >
          Featured
        </Typography>
      </div>
      <div style={{ margin: "3% 0" }}>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {items.map((item) => {
              return <TrendingItem width={width} item={item} />;
            })}
          </Grid>
        </Box>
      </div>
      <hr />
    </div>
  );
}

export default TrendingNews;

const TrendingItem = (props) => {
  const width = props.width;
  const { img, title, content, date, tags } = props.item;
  return (
    <Grid item xs={12} sm={6} md={4} style={{ padding: '2%' }}>
      <img src={img} style={{ width: '100%'}} />
      <div>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize:
              width === "xs" ? "12px" : width === "sm" ? "16px" : "24px",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            color: "#C2C2C2",
            fontSize:
              width === "xs" ? "10px" : width === "sm" ? "12px" : "15px",
          }}
        >
          {content}
        </Typography>
        <Typography
          style={{
            color: "#C2C2C2",
            fontSize:
              width === "xs" ? "10px" : width === "sm" ? "12px" : "15px",
          }}
        >
          {date}
        </Typography>
        <Typography>
          <AiFillTag
            style={{
              marginRight: "2%",
              fontSize:
                width === "xs" ? "10px" : width === "sm" ? "14px" : "16px",
            }}
          />
          {tags.map((tag) => {
            return (
              <span
                style={{
                  fontSize:
                    width === "xs" ? "8px" : width === "sm" ? "12px" : "12px",
                }}
              >
                {tag}&nbsp;
              </span>
            );
          })}
        </Typography>
      </div>
    </Grid>
  );
};
