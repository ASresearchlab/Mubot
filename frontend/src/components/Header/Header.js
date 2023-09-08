import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, } from "@mui/material";
import DrawerComp from "./Drawer";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';
import { Images } from '../configs';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          {/*<AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />*/}
          {/* <Typography color='white' to="/" variant="h2" align="center">Mubot</Typography> */}

          {isMatch ? (
            <>
              <img src={Images.logo} alt="icon" height="30" style={{ padding: 5 }} to="/" />
              <DrawerComp />

            </>
          ) : (
            <>
              <Link to="/">
                <img src={Images.logo} alt="icon" height="70" style={{ padding: 15 }} to="/" />
              </Link>
              <Tabs sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="primary"
                value={selectedTab} onChange={handleTabChange}>
                <Tab label="Home" component={Link} to="/" value={0} />
                <Tab label="Documentation" component={Link} to="/doc" value={1} />
                <Tab label="About Us" value={2} />
                <Tab label="Contact" value={3} />
              </Tabs>
              {/* <Avatar size="50" round={true} name="Foo Bar" /> */}
              <Button component={Link} to="/auth" sx={{ marginLeft: "30px", height: 50 }} variant="contained">
                Get Started  <ArrowForwardIcon />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>

  );
};

export default Header;
