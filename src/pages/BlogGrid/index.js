import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const BlogGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section id="blogGrid" class="blog blog-grid pt-120 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div class="heading text-center mb-50">
                <span class="heading__subtitle">અવનવા સમાચાર</span>
                <h2 class="heading__title">પ્રવ્રુતિઓ</h2>
                {/* <p class="heading__desc">અવનવા સમાચાર</p> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    {" "}
                    <img
                      class="blog-image"
                      src="assets/images/blog/1.png"
                      alt="blog image"
                    />{" "}
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    {/* <div class="blog__meta-cat">
                      <a href="#">Oil &amp; Gas</a>
                      <a href="#">Insights</a>
                    </div> */}
                    <span class="blog__meta-date">Jan 20, 2019</span>
                  </div>
                  <h4 class="blog__title">
                    <a href="#">
                      ૧ લાખ લીટર ઓવરહેડ ટાંકી અને ૨ લાખ લીટર ના સંપ નું
                      ખાતમૂહર્ત કાર્યક્રમ
                    </a>
                  </h4>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    {" "}
                    <img
                      class="blog-image"
                      src="assets/images/blog/2.png"
                      alt="blog image"
                    />{" "}
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    {/* <div class="blog__meta-cat">
                      <a href="#">Industry</a>
                      <a href="#">Construction</a>
                    </div> */}
                    <span class="blog__meta-date">Oct 18, 2019</span>
                  </div>
                  <h4 class="blog__title">
                    <a href="#">
                      ગ્રામ પંચાયતના નવીન મકાનનું લોકાર્પણ કાર્યક્રમ
                    </a>
                  </h4>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog-item">
                <div class="blog__img">
                  <a href="#">
                    {" "}
                    <img
                      class="blog-image"
                      src="assets/images/blog/3.png"
                      alt="blog image"
                    />{" "}
                  </a>
                </div>
                <div class="blog__content">
                  <div class="blog__meta">
                    {/* <div class="blog__meta-cat">
                      <a href="#">Engineering</a>
                      <a href="#">Distribution</a>
                    </div> */}
                    <span class="blog__meta-date">Jan 20, 2019</span>
                  </div>
                  <h4 class="blog__title">
                    <a href="#">
                      ગ્રામ પંચાયતના નવીન મકાનનું લોકાર્પણ કાર્યક્રમ
                    </a>
                  </h4>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    Read More{" "}
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
export default BlogGrid;
