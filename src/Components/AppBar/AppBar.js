import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button, Drawer, IconButton, Typography, ButtonGroup, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, makeStyles } from "@material-ui/core";
import Blink from "react-blink-text";
import TickerBar from "./TickerBar/TickerBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard, MdArrowDropDown } from "react-icons/md";

import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";

import { useNavigate, useLocation } from "react-router-dom";
import Logoimg from '../../static/logo.svg';

const useStyles = (() => ({
  buttonGroup: {
    borderColor: '#000',
    color: '#000'
  }
}));

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

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

function AppBar(props) {
  const width = useWidth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopBar width={width} />
      <TickerBar width={width} />
      <AuthBar width={width} />
      {width === "xs" ? "" : <MenuBar width={width} />}
      <hr />
    </div>
  );
}

export default AppBar;

const TopBar = (props) => {
  const { width } = props;
  const [textBlink, setTextBlink] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTextBlink(!textBlink);
    }, 500);
  }); 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: width === "xs" ? "center" : "space-between",
        margin: "0 5%",
      }}
    >
      {/* <Link onClick={() => window.location = "/services"} style={{ cursor: "pointer" }}>
        <Typography
          style={{
            cursor: "pointer",
            color: textBlink ? "#EF0101" : "#fff",
            fontWeight: "bold",
          }}
        >
          CREATE AN AUCTION WEBSITE FOR FREE LISTING
        </Typography>
      </Link> */}
      <Button
        style={{ padding: 0 }}
        onClick={() => (window.location = "/services")}
      >
        <Blink
          color="red"
          text="CREATE AN AUCTION WEBSITE FOR FREE LISTING"
          fontSize="15"
          fontWeight="bold"
        />
      </Button>

      {width !== "xs" && (
        <Typography
          onClick={() => (window.location = "/aboutAJ")}
          style={{ cursor: "pointer", fontWeight: "bold" }}
        >
          ABOUT AJ
        </Typography>
      )}
    </div>
  );
};

const navButtonsBid = [
  {
    link: "/bidderdashboard/myPasses",
    text: "MY PASSES",
  },
  {
    link: "/bidderdashboard/myRequests",
    text: "MY REQUESTS",
  },
  {
    link: "/bidderdashboard/myprofile",
    text: "MY PROFILE",
  },
  // {
  //   link: "/bidderdashboard/billing",
  //   text: "BILLING INFO",
  //   content: null,
  // },
  {
    link: "/bidderdashboard/faqs",
    text: "FAQs",
  },
  {
    link: "/bidderdashboard/getHelp",
    text: "BID SUPPORT",
  },
  {
    link: "#",
    text: "LOG OUT",
  },
];

const navButtonsAuc = [
  {
    link: "/auctioneerdashboard",
    text: (
      <span>
        ANALYTICS{" "}
        <span
          style={{
            marginLeft: 8,
            background:
              "-webkit-linear-gradient(89.83deg, #F80000 -10.08%, rgba(255, 199, 0, 0) 140.74%)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
        >
          COMING SOON
        </span>
      </span>
    ),
  },
  {
    link: "/auctioneerdashboard/createnewlisting",
    text: "CREATE A NEW LISTING",
  },
  {
    link: "/auctioneerdashboard/managelisting",
    text: "MANAGE LISTING",
  },
  {
    link: "/auctioneerdashboard/myprofile",
    text: "MY PROFILE",
  },
  {
    link: "/auctioneerdashboard/addcontent",
    text: "ADD CONTENT",
  },
  {
    link: "/auctioneerdashboard/faqs",
    text: "FAQs",
  },
  {
    link: "/auctioneerdashboard/getHelp",
    text: "GET HELP",
  },
  {
    link: "/auctioneerdashboard/listingpolicies",
    text: "LISTING POLICY",
  },
  {
    link: "#",
    text: "LOG OUT",
  },
];

const AuthBar = (props) => {
  const classes = useStyles();
  const { width } = props;
  const history = useNavigate();
  const query = useQuery();

  const [ sideMenuBar, setSideMenuBar ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ login, setLogin ] = useState(false);
  const [ signUp, setSignUp ] = useState(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleSignUp = () => {
    setLogin(false);
    setSignUp(true);
  }

  const handleSignIn = () => {
    setSignUp(false);
    setLogin(true);
  }

  const handleRouting = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser(parsedUserData);
    } else {
      setUser(null);
    }

    if (query.get('login') === 'true') {
      setLogin(true);
    }
  }, []);

  const provideLogin = () => {
    setSignUp(false);
    setLogin(true);
  }

  return (
    <div
      style={{
        display: "flex",
        margin: "2% 5%",
        justifyContent: "space-between",
      }}
    >
      <Login open={login} onClose={() => setLogin(false)} handleSignUp={handleSignUp} />
      <SignUp open={signUp} onClose={() => setSignUp(false)} handleSignUp={handleSignIn} provideLogin={provideLogin} />
      <Drawer
        anchor="left"
        open={sideMenuBar}
        onClose={() => {
          setSideMenuBar(false);
        }}
      >
        <DrawerMenu />
      </Drawer>
      <div style={{ width: "33.33%" }}>
        {width === "xs" ? (
          <div>
            <IconButton
              style={{ color: "#000" }}
              onClick={() => {
                setSideMenuBar(true);
              }}
            >
              <GiHamburgerMenu />
            </IconButton>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        style={{ width: "33.33%", display: "flex", justifyContent: "center" }}
      >
        <img
          onClick={() => history.push("/")}
          style={{ cursor: "pointer" }}
          width={width === "xs" ? "140px" : width === "sm" ? "180px" : "350px"}
          // src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/logo.png`}
          src = {Logoimg}
          onClick={() => (window.location = "/")}
        />
      </div>
      <div
        style={{ width: "33.33%", display: "flex", justifyContent: "right" }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <>
                <ButtonGroup variant="outlined" className={classes.buttonGroup} ref={anchorRef} aria-label="split button">
                  <Button className={classes.buttonGroup} onClick={() => {
                      console.log(user);
                      if (user.role === "auctioneer") {
                        handleRouting("/auctioneerdashboard");
                      } else {
                        handleRouting("/bidderdashboard/myPasses");
                      }
                    }}><MdDashboard style={{marginRight: 8}} color='#333' /> DASHBOARD</Button>
                  <Button
                    className={classes.buttonGroup}
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <MdArrowDropDown />
                  </Button>
                </ButtonGroup>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex: 100000}}>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            {user.role === "auctioneer" ? navButtonsAuc.map((option) => (
                              <MenuItem
                                key={option.text}
                                onClick={() => {
                                  if (option.text === 'LOG OUT') {
                                    sessionStorage.clear();
                                    window.location.reload();
                                  } else {
                                    handleRouting(option.link)
                                  }
                                }}
                              >
                                {option.text}
                              </MenuItem>
                            )) : navButtonsBid.map((option) => (
                              <MenuItem
                                key={option.text}
                                onClick={() => {
                                  if (option.text === 'LOG OUT') {
                                    sessionStorage.clear();
                                    window.location.reload();
                                  } else {
                                    handleRouting(option.link)
                                  }
                                }}
                              >
                                {option.text}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>
            ) : (
              <>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize:
                      width === "xs" ? "8px" : width === "sm" ? "11px" : "15px",
                    color: "#000",
                  }}
                  onClick={() => setLogin(true)}
                >
                  LOGIN
                </Typography>
                <Typography
                  style={{
                    fontSize:
                      width === "xs" ? "8px" : width === "sm" ? "11px" : "15px",
                    margin: "0 1vw",
                  }}
                >
                  |
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                    fontSize:
                      width === "xs" ? "8px" : width === "sm" ? "11px" : "15px",
                    color: "#000",
                  }}
                  onClick={() => setSignUp(true)}
                >
                  SIGN UP
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuBar = (props) => {
  const history = useNavigate();

  const { width } = props;

  const menuStyle = {
    color: "#000",
    fontSize: width === "sm" ? "12px" : "16px",
    margin: "0 10px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button onClick={() => history.push("/findAuctions")}>
          <Typography style={menuStyle}>FIND AUCTIONS</Typography>
        </Button>
        <Button onClick={() => history.push("/auctioneerDirectories")}>
          <Typography style={menuStyle}>AUCTIONEER DIRECTORIES</Typography>
        </Button>
        <Button onClick={() => history.push("/videos")}>
          <Typography style={menuStyle}>VIDEOS</Typography>
        </Button>
        <Button onClick={() => history.push("/blogs")}>
          <Typography style={menuStyle}>BLOGS</Typography>
        </Button>
        <Button onClick={() => history.push("/contactUs")}>
          <Typography style={menuStyle}>CONTACT US</Typography>
        </Button>
      </div>
    </div>
  );
};

const DrawerMenu = (props) => {
  const history = useNavigate();
  
  const menuItem = [
    { name: "HOME", path: "/" },
    { name: "FIND AUCTIONS", path: "/findAuctions" },
    { name: "AUCTIONEER DIRECTORIES", path: "/auctioneerDirectories" },
    { name: "VIDEOS", path: "/videos" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT US", path: "/contactUs" },
  ];
  const menuStyle = {
    color: "#000",
    fontSize: 13,
    margin: "10px 5px",
    width: 180,
    textAlign: "left",
  };
  return (
    <div>
      {menuItem.map((item) => {
        if (window.location.pathname !== item.path) {
          return (
            <div>
              <Button onClick={() => history.push(item.path)}>
                <Typography style={menuStyle}>{item.name}</Typography>
              </Button>
            </div>
          );
        }
      })}
    </div>
  );
};
