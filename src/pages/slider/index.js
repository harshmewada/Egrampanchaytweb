import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const ComponentName = () => {
  const classes = useStyles();

  return (
    <section id="slider1" class="slider slider-1">
      <div
        class="carousel owl-carousel carousel-arrows carousel-dots"
        data-slide="1"
        data-slide-md="1"
        data-slide-sm="1"
        data-autoplay="false"
        data-nav="true"
        data-dots="true"
        data-space="0"
        data-loop="true"
        data-speed="3000"
        data-transition="fade"
        data-animate-out="fadeOut"
        data-animate-in="fadeIn"
      >
        <div class="slide-item align-v-h bg-overlay bg-overlay-3">
          <div class="bg-img">
            <img
              src="https://panchayat.gujarat.gov.in/images/banner.jpg"
              alt="slide img"
            />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <div class="slide__content">
                  {/* <span class="slide__subtitle">
                    Positive Results From A Fast Growing Industrial &amp;
                    Manufacturing Estates.
                  </span> */}
                  <h2 class="slide__title">
                    ઈ - પંચાયત પાયાના સ્તર ના નાગરિકો સુધી પહોંચવા અને તેમના
                    ઉત્કર્ષ માટે ...
                  </h2>
                  {/* <p class="slide__desc">
                    We produce positive results from ever-growing Industrial
                    &amp; manufacturing estates, we have established a corporate
                    mandate to maintain strong core values.
                  </p> */}
                  <a class="btn btn__primary mr-30" href="#">
                    વધુ માહિતી મેળવો
                  </a>{" "}
                  {/* <a class="btn btn__white" href="#">
                    Our Services
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-item align-v-h bg-overlay bg-overlay-3">
          <div class="bg-img">
            <img src="assets/images/sliders/2.jpg" alt="slide img" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <div class="slide__content">
                  {/* <span class="slide__subtitle">
                    A Grade Commercial &amp; Industrial portfolio!
                  </span> */}
                  <h2 class="slide__title">
                    Serve As Consultants For All Industris
                  </h2>
                  <p class="slide__desc">
                    To further develop our corporate strengths we have
                    established a corporate mandate to maintain strong core
                    values.
                  </p>
                  <a class="btn btn__white mr-30" href="#">
                    Our Services
                  </a>{" "}
                  <a class="btn btn__primary btn__hover2" href="#">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-item align-v-h bg-overlay bg-overlay-3">
          <div class="bg-img">
            <img src="assets/images/sliders/4.jpg" alt="slide img" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <div class="slide__content">
                  {/* <span class="slide__subtitle">
                    A Grade Commercial &amp; Industrial portfolio!
                  </span> */}
                  <h2 class="slide__title">
                    Manufacture A High Quality Products
                  </h2>
                  <p class="slide__desc">
                    Develop our corporate strengths we have established a
                    corporate mandate to maintain strong core values that truly
                    reflect the philosophy.
                  </p>
                  <a class="btn btn__primary btn__hover2 mr-30" href="#">
                    More About Us
                  </a>{" "}
                  <a class="btn btn__white" href="#">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentName;
