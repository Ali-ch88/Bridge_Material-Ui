import React from "react";
import "../../styling/Pricing.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const Pricing = () => {
  return (
    <Grid container>
      <Grid className="head-item" item sm={12} md={12}>
        <h3 className="heading-pricing">Pricing</h3>
        <p className="pricing-para">
          Most calenders are designed for teams. <br></br> Slate is designed for
          freelancers
        </p>
      </Grid>
      <Grid container justifyContent="center">
        <Grid className="pricing-categories" item>
          <div className="pricing-plan">
            <h4 className="pricing-plan-heading">Plan X</h4>
            <span className="text-border"></span>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>

            <Button className="pricing-btn" variant="contained">
              LOREM IPSUM
            </Button>
          </div>
        </Grid>
        <Grid className="pricing-categories" item>
          <div className="pricing-plan">
            <h4 className="pricing-plan-heading">Plan Y</h4>
            <span className="text-border"></span>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>
            <div className="plan-text-icon">
              <CheckBoxOutlinedIcon className="check-icon" />
              <div>
                <span className="pricing-plan-text">
                  Lorem ipsum dolor sit amet, <br></br> abcd consectetur
                  adipiscing elit.
                </span>
              </div>
            </div>

            <Button className="pricing-btn" variant="contained">
              LOREM IPSUM
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;
