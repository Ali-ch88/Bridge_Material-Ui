import React from "react";
import "../../styling/Hero.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <Grid container>
      <Grid className="left-item" item xs={12} sm={12} md={7} lg={6}>
        <h1 className="heading-one">
          Bridge the <br></br> Gap
        </h1>
        <p className="hero-para">
          Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit.
          Pellentesque aliquet, libero <br></br> eu volutpat hendrerit, dolor
          dui consectetur<br></br> leo.
        </p>
        <Grid container className="btn-wrapper">
          <Button className="btn-pink" variant="contained">
            Register
          </Button>
          <Button className="btn-gray" variant="contained">
            Preview
          </Button>
        </Grid>
      </Grid>
      <Grid className="right-item" item xs={12} sm={12} md={4} lg={6}>
        <img
          className="branding-pattern"
          src="/assets/Bridge_Home_Pattern.svg"
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
