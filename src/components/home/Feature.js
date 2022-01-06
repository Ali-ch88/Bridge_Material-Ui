import React from "react";
import "../../styling/Feature.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Feature = () => {
  return (
    <Grid container>
      <Grid className="head-item" item sm={12} md={12}>
        <h3 className="heading-feature">Features</h3>
        <p className="feature-para">
          Most calenders are designed for teams. <br></br> Slate is designed for
          freelancers
        </p>
      </Grid>
      <Grid container>
        <Grid className="feature-categories" item xs={12} sm={6} md={3}>
          <div className="category-fix">
            <img src="/assets/Bridge_Scheduling_Illustration.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit at <br></br> amet, consectetur adipisc.
          </p>
        </Grid>
        <Grid className="feature-categories" item xs={12} sm={6} md={3}>
          <div className="category-fix">
            <img src="/assets/Bridge_Analytics_Illustration.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit at <br></br> amet, consectetur adipisc.
          </p>
        </Grid>
        <Grid className="feature-categories" item xs={12} sm={6} md={3}>
          <div className="category-fix">
            <img src="/assets/Bridge_DriveTraffic_Illustration.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit at <br></br> amet, consectetur adipisc.
          </p>
        </Grid>
        <Grid className="feature-categories" item xs={12} sm={6} md={3}>
          <div className="category-fix">
            <img src="/assets/Bridge_PostFromOne_Illustration.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit at <br></br> amet, consectetur adipisc.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feature;
