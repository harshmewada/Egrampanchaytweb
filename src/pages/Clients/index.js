import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section id="clients" class="clients border-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div
                class="carousel owl-carousel"
                data-slide="6"
                data-slide-md="4"
                data-slide-sm="2"
                data-autoplay="true"
                data-nav="false"
                data-dots="false"
                data-space="20"
                data-loop="true"
                data-speed="700"
              >
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/9.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/10.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/11.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/12.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/13.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/11.png" alt="client" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
