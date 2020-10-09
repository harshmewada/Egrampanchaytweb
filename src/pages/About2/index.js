import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const About2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section id="aboutLayout2" class="about about-layout2 pt-120 pb-40">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9 offset-xl-1">
              <div class="heading heading-3 mb-50">
                {/* <span class="heading__subtitle">
                  Setting A Global Standard In Industrial Contracting.
                </span> */}
                <h2 class="heading__title">આંકડા</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-6 col-xl-5">
              <div class="about__img mb-50">
                <img
                  class="img-fluid"
                  src="assets/images/about/2.jpg"
                  // alt="about"
                />
                {/* <object
                  class="img-fluid"
                  type="image/svg+xml"
                  data="/assets/images/logo/gujarat.svg"
                ></object> */}
                {/* <embed
                  class="img-fluid"
                  src="/assets/images/logo/gujarat.svg"
                /> */}
                <div class="cta__banner">
                  <div class="cta__icon"> </div>
                  <h5 class="cta__title">
                    ઈ - પંચાયત પાયાના સ્તર ના નાગરિકો સુધી પહોંચવા અને તેમના
                    ઉત્કર્ષ માટે ...
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <div class="about__text mb-30">
                <p>
                  બળવંતરાય મહેતા સમિતિની ભલામણોને આધારે, રાજ્યમાં ગુજરાત પંચાયત
                  ધારો, ૧૯૬૧ તા. ૦૧/૦૪/૧૯૬૩ થી અમલ માં આવ્યો. ૭૩ મા બંધારણીય
                  સુધારાથી પંચાયતો ના શાશક્તિકરણ માટે ગુજરાત પંચાયત ધારો, ૧૯૯૩
                  તા. ૧૫/૦૪/૧૯૯૪ થી લાગુ કરવામાં આવ્યો. વધુ વાંચો
                </p>
                {/* <p>
                  The world is changing faster than ever before, business is no
                  exception. Axima industries are threatened as technology
                  disrupts and software “eats the world.” Yet those that embrace
                  change are thriving, building bigger, better, faster, and
                  stronger products than ever before. You are helping to lead
                  the charge; we can help you build on your past successes and
                  prepare for future.
                </p> */}
              </div>
              <ul class="list-items list-items-layout2 list-unstyled mb-30">
                <li>Taluka Development Officer Transfer Order</li>
                <li>Vibrant Gujarat Global Summit-2019 Duty Order</li>
                <li>Prob TDO [Batch-2018] Attachment Training Schedule</li>
                {/* <li>Environmental Sensitivity, Personalised solutions</li> */}
              </ul>
              <div class="about__signature mb-30">
                <a class="btn btn__primary btn__bordered mr-40" href="#">
                  વધુ માહિતી મેળવો
                </a>{" "}
                {/* <img
                  class="signature"
                  src="assets/images/about/singnture.png"
                  alt="singnture"
                /> */}
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2">
              <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div class="counter-item">
                    <h4 class="counter">33</h4>
                    <p class="counter__desc">જિલ્લા પંચાયતો</p>
                  </div>
                  <div class="divider__line d-none d-xl-block mb-40"> </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div class="counter-item">
                    <h4 class="counter">248</h4>
                    <p class="counter__desc">તાલુકા પંચાયતો</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div class="counter-item">
                    <h4 class="counter">14292</h4>
                    <p class="counter__desc">ગ્રામ પંચાયતો</p>
                  </div>
                </div>{" "}
                {/* <div class="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div class="counter-item">
                    <h4 class="counter">18584</h4>
                    <p class="counter__desc">ગામડા</p>
                  </div>
                </div>{" "}
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                  <div class="counter-item">
                    <h4 class="counter">60383628</h4>
                    <p class="counter__desc">વસ્તી</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About2;
