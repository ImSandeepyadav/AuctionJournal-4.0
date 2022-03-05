import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "../../Components/AppBar/AppBar";
import AppFooter from "../../Components/AppFooter/AppFooter";
import AboutAJ from "../../Components/FooterPages/AboutAJ";

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

function AboutAJPage() {
  const width = useWidth();

  return (
    <div>
      <AppBar />
      <AboutAJ width={width} />
      <AppFooter width={width} />
    </div>
  );
}

export default AboutAJPage;
