import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const Banner2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section
        id="banner2"
        class="banner banner-2 bg-overlay bg-overlay-theme-2 bg-parallax pt-120 pb-0"
      >
        <div class="bg-img">
          <img src="assets/images/banners/3.jpg" alt="background" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <form class="contact__form-panel mr-50">
                <div class="row">
                  <div class="col-sm-12 contact__form-panel-header">
                    <h4>Get In Touch</h4>
                    <p>
                      Complete control over products allows us to ensure our
                      customers receive the best quality prices and service.
                    </p>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group form-group-select">
                      <select class="form-control">
                        <option>Select Your Industry</option>
                        <option>Industry 1</option>
                        <option>Industry 2</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12"> </div>
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <button class="btn btn__primary btn__block" type="submit">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
              <div class="testimonials testimonials-white">
                <h6 class="testimonials__heading color-white">testimonials</h6>
                <div
                  class="carousel owl-carousel carousel-arrows"
                  data-slide="1"
                  data-slide-md="1"
                  data-slide-sm="1"
                  data-autoplay="true"
                  data-nav="true"
                  data-dots="false"
                  data-space="0"
                  data-loop="true"
                  data-speed="800"
                >
                  <div class=" testimonial-item">
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        I’ve seen great companies serving industry solutions in
                        my career. But not to the point where you feel that
                        comfort and trust that we get with Industic Company.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <div class="testimonial__thumb">
                        <img
                          class="img-fluid"
                          src="assets/images/testimonials/thumbs/1.png"
                          alt="author thumb"
                        />
                      </div>
                      <h5 class="testimonial__meta-title">Martin Hope</h5>
                      <p class="testimonial__meta-desc">Pro Dust</p>
                    </div>
                  </div>
                  <div class=" testimonial-item">
                    <div class="testimonial__content">
                      <p class="testimonial__desc">
                        I’ve seen great companies serving industry solutions in
                        my career. But not to the point where you feel that
                        comfort and trust that we get with Industic Company.
                      </p>
                    </div>
                    <div class="testimonial__meta">
                      <div class="testimonial__thumb">
                        <img
                          class="img-fluid"
                          src="assets/images/testimonials/thumbs/1.png"
                          alt="author thumb"
                        />
                      </div>
                      <h5 class="testimonial__meta-title">Martin Hope</h5>
                      <p class="testimonial__meta-desc">Pro Dust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p> </p>
    </div>
  );
};
export default Banner2;
