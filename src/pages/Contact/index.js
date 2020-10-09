import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section id="contactInfo" class="contact-info pt-40 pb-20">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <strong class="text-center d-block mt-50 mb-20">
                We will get back to you within 24 hours.
              </strong>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
              <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-12 col-xl-6">
                  <div class="contact__info-box">
                    <div class="contact__info-box-icon"> </div>
                    <div class="contact__info-box-text">
                      Call Us:
                      <strong>
                        <a href="tel:00123968574">(002) 123968574</a>
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-12 col-xl-6">
                  <div class="contact__info-box">
                    <div class="contact__info-box-icon"> </div>
                    <div class="contact__info-box-text">
                      Email Us:
                      <strong>
                        <a href="mailto:Axima@7oroof.com">Axima@7oroof.com</a>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactInfo;
