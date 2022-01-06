import React from "react";
import "../../styling/Header.css";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <Grid container className="header-wrapper" alignItems="center">
          <Grid item xs={12} sm={2} className="branding-wrapper">
            <Link href="#">
              <img
                className="branding-logo"
                width="92.45px"
                src="/assets/Bridge_Logo_White.svg"
              />
            </Link>
          </Grid>
          <Grid item className="header-links-wrapper" flex={1}>
            <Grid alignItems="center" container justifyContent="space-between">
              <Grid item xs={6} className="left-navs">
                <Link href="#">
                  <span>Plan</span>
                </Link>
                <Link href="#">
                  <span>Guide</span>
                </Link>
              </Grid>
              <Grid item xs={6} className="right-navs">
                <Link href="#">
                  <span>Sign Up</span>
                </Link>
                <Link href="#">
                  <span>Log In</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
