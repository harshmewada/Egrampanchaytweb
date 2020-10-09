import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const ServicesCarousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section
        id="servicesCarousel"
        class="services services-layout2 services-carousel pt-0 mt-120"
      >
        <div class="bg-img">
          <img src="assets/images/backgrounds/pattern/2.png" alt="background" />
        </div>
        <div class="container">
          <div class="row heading mb-40">
            <div class="col-sm-12 col-md-12 col-lg-6">
              {/* <span class="heading__subtitle">
                Fast Growing Industrial &amp; Manufacturing Estates.
              </span> */}
              <h2 class="heading__title">બધી યોજનાઓ</h2>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <p class="heading__desc">
                બળવંતરાય મહેતા સમિતિની ભલામણોને આધારે, રાજ્યમાં ગુજરાત પંચાયત
                ધારો, ૧૯૬૧ તા. ૦૧/૦૪/૧૯૬૩ થી અમલ માં આવ્યો. ૭૩ મા બંધારણીય
                સુધારાથી પંચાયતો ના શાશક્તિકરણ માટે ગુજરાત પંચાયત ધારો, ૧૯૯૩ તા.
                ૧૫/૦૪/૧૯૯૪ થી લાગુ કરવામાં આવ્યો. વધુ વાંચો
              </p>
              <div class="d-flex">
                <a class="btn btn__primary mt-30 mr-30" href="#">
                  વધુ માહિતી મેળવો
                </a>
                {/* <div class="contact-chip mt-30">
                  <div class="contact__chip-img">
                    <img
                      src="assets/images/testimonials/thumbs/3.png"
                      alt="avatar"
                    />
                  </div>
                  <div class="contact__chip-info">
                    <h6>(002) 01061245741</h6>
                    Sales Representative
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div
              class="carousel owl-carousel carousel-dots"
              data-slide="3"
              data-slide-md="2"
              data-slide-sm="1"
              data-autoplay="true"
              data-nav="false"
              data-dots="true"
              data-space="30"
              data-loop="true"
              data-speed="800"
            >
              <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">સરદાર આવાસ યોજના</h4>
                  <p class="service__desc">
                    ગુજરાત ગ્રામ્ય વિસ્તારમાં ગરીબીરેખા નીચે જીવન જીવતાં જમીન
                    વિહોણા ખેત-મજૂરો તથા ગ્રામ્ય કારીગરો માટે રાજ્ય સરકારની
                    ઘરથાળના મફત પ્લોટની યોજના સને ૧૯૭૨...
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div>
              <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">પંચવટી યોજના</h4>
                  <p class="service__desc">
                    રાજયની ગ્રામીણ પ્રજામાં ગ્રામ્‍ય જીવન ભાતીગળ અને લોક
                    સંસ્‍કૃતિના વાતાવરણથી વણાયેલું છે. ગામડાઓના સીમાડાના
                    વિસ્‍તાર, વનવગડાની વિપુલ...
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div>
              <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">ઇ-ગ્રામ વિશ્‍વગ્રામ યોજના</h4>
                  <p class="service__desc">
                    ભારતનું એકમાત્ર રાજ્ય કે જે 13685 ગ્રામ પંચાયતોને કમ્પ્યુટર
                    દ્વારા ઇ-સેવાઓ પ્રદાન કરવા માટેનું માળખાગત સુવિધા છે...
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div>
              <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">સમરસ ગ્રામ યોજના</h4>
                  <p class="service__desc">
                    રાજયની ચૂંટણીઓમાં પક્ષ અને પ્રતિક હોય છે પરંતુ ગ્રામ
                    પંચાયતની ચૂંટણીમાં પક્ષનું આવું કોઇ પ્રતિક હોતું નથી. તેની
                    પાછળ મહત્‍વના કારણો રહેલા છે...
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div>
              <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">સ્વચ્છ ગામ સ્વસ્થ ગામ યોજના</h4>
                  <p class="service__desc">
                    ગામમાં સફાઇ યોગ્ય રીતે થાય અને સફાઇ પ્રત્યે સભાવના, જાગૃતિ
                    કેળવી સફાઇનું ઉંચુ સ્તર, લાવી, ગ્રામ્યજીવન સ્તર ઉચું લઇ જવા
                    માટે પ્રોત્સાહનરૂપે સફાઇ અને સ્વચ્છતા...
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div>
              {/* <div class="service-item">
                <div class="service__content">
                  <div class="service__icon"> </div>
                  <h4 class="service__title">
                    Bridge <br /> Construction
                  </h4>
                  <p class="service__desc">
                    Building a bridge is a complex undertaking requiring
                    knowledge and expertise. Several variables, including
                    engineering.
                  </p>
                  <a class="btn btn__secondary btn__link" href="#">
                    {" "}
                    વધુ માહિતી મેળવો
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServicesCarousel;
