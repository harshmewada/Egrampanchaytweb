import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about mb-30">
                <div class="footer__widget-content">
                  <img src="assets/images/logo/logo-footer.png" alt="logo" />
                  <p>
                    We produce positive results from ever growing Industrial
                    &amp; manufacturing, we have established a corporate mandate
                    to maintain strong core values.
                  </p>
                  <a class="btn btn__primary btn__link btn__hover2" href="#">
                    {" "}
                    Request A Quote{" "}
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3 footer__widget footer__widget-text">
                <h6 class="footer__widget-title">Quick Contact</h6>
                <div class="footer__widget-content">
                  <p>
                    If you have any questions or need help, feel free to contact
                    with our team.
                  </p>
                  <a class="phone-link" href="tel:00123968574">
                    {" "}
                    (002) 123968574{" "}
                  </a>
                  <p>
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-2 footer__widget footer__widget-nav">
                <h6 class="footer__widget-title">Company</h6>
                <div class="footer__widget-content">
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="#">News &amp; Media</a>
                      </li>
                      <li>
                        <a href="#">Case Studies</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-newsletter">
                <div class="footer__widget-content">
                  <p>
                    Sign up for industry alerts, our latest news, thoughts, and
                    insights from Axima. You may withdraw your consent at any
                    time!
                  </p>
                  <form class="widget__newsletter-form">
                    <div class="form-group mb-0">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Your Email Address"
                      />{" "}
                      <button class="btn" type="submit">
                        {" "}
                      </button>
                    </div>
                  </form>
                </div>
                <nav>
                  <ul class="footer__sitemap-links list-unstyled d-flex justify-content-end flex-wrap">
                    <li>
                      <a href="#">Terms &amp; Conditions </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="footer__contact">
                  <div class="footer__contact-item">
                    <div class="footer__contact-item-icon"> </div>
                    <div class="footer__contact-item-text">
                      Call Us:
                      <strong>
                        <a href="tel:00123968574">(002) 123968574</a>
                      </strong>
                    </div>
                  </div>
                  <div class="footer__contact-item">
                    <div class="footer__contact-item-icon"> </div>
                    <div class="footer__contact-item-text">
                      Email Us:
                      <strong>
                        <a href="mailto:axima@7oroof.com">Axima@7oroof.com</a>
                      </strong>
                    </div>
                  </div>
                  <div class="footer__contact-item">
                    <div class="footer__contact-item-icon"> </div>
                    <div class="footer__contact-item-text">
                      Opening Hours:<strong>Mon-Fri: 8am – 7pm</strong>
                    </div>
                  </div>
                  <div class="footer__contact-item">
                    <a class="btn btn__block btn__primary" href="#">
                      Schedule An Appointment
                    </a>
                  </div>
                </div>
                <div class="footer__copyright text-center">
                  © 2020 Axima, with Love by{" "}
                  <a href="http://themeforest.net/user/7oroof">7oroof.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <button id="scrollTopBtn">
        <i class="fa fa-long-arrow-up"></i>
      </button>
    </div>
  );
};
export default Footer;
