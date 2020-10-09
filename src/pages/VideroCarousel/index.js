import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const VideoCarousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section
        id="videoBanner"
        class="video-banner video-banner-layout2 bg-overlay"
      >
        <div class="bg-img">
          <img src="assets/images/backgrounds/1.jpg" alt="background" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="video__btn text-center"> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default VideoCarousel;
