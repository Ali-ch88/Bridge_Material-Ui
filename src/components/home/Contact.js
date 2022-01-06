import React from "react";
import "../../styling/Contact.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contact = () => {
  return (
    <Grid container>
      <Grid className="contact-head-item" item sm={12} md={12}>
        <h3 className="contact-pricing">Contact Us</h3>
        <p className="contact-para">Easy access to all accounts</p>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop="80px"
      >
        <Grid item className="contact-wrapper">
          <div className="contact-item-left">
            <h5 className="contact-head">Contact Us</h5>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                className="form-txt"
                placeholder="Name"
                variant="standard"
              />
              <TextField
                className="form-txt"
                placeholder="Email"
                variant="standard"
              />
              <TextField
                className="form-txt"
                placeholder="Your Message"
                variant="standard"
              />
            </Grid>
            <Button className="contact-btn" variant="contained">
              Send
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className="contact-item-right">
            <div className="contact-right-sub">
              <div className="contact-text-icon">
                <AddLocationOutlinedIcon className="location-icon" />
                <div>
                  <span className="contact-location-text">
                    6386 Spring St undefined Anchorage, <br></br>
                    Georgia 12473 United States
                  </span>
                </div>
              </div>

              <div className="contact-text-icon">
                <PhoneAndroidOutlinedIcon className="location-icon" />
                <div>
                  <span className="contact-location-text">(843) 555-0130</span>
                </div>
              </div>
              <div className="contact-text-icon">
                <EmailOutlinedIcon className="location-icon" />
                <div>
                  <span className="contact-location-text">
                    willie.jennings@example.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="footer"></div>
    </Grid>
  );
};

export default Contact;
