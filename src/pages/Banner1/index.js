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
      <section id="banner1" class="banner banner-1 fancybox-white p-0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 background-banner bg-overlay bg-overlay-2">
              <div class="bg-img">
                <img
                  src="https://panchayat.gujarat.gov.in/images/banner.jpg"
                  alt="background"
                />
              </div>
              <div class="cta__banner">
                <div class="bg-img">
                  <img
                    src="assets/images/backgrounds/pattern/1.jpg"
                    alt="background"
                  />
                </div>
                <h5 class="cta__title">જેપુર ગામની લોક વાયકા</h5>
                <p class="cta__desc">
                  બીજી એક લોકવાયકા મુજબ એ સમયના અગ્રણી એવા શ્રી પટેલ ઝવેરભાઈ ના
                  નામ ઉપરથી ગામનું નામ જેપુર પાડવામાં આવ્યું હોવાનું મનાય છે.
                  ગામમાં સૌથી પહેલાં જે મહોલ્લાની શરૂઆત થઇ તેને રૂપાવત મહોલ્લો
                  નામ આપવામાં આવ્યું. આમ આ ગામ સમયની સાથે ખેતી ક્ષેત્રે અને
                  શિક્ષણક્ષેત્રે ખુબ સારી પ્રગતિ કરતુ ગયું. ગામના લોકોનો મુખ્ય
                  વ્યવસાય ખેતી અને પશુપાલન છે. ગામના લોકોનો મુખ્ય ઉદ્યોગ તમાકુનો
                  છે. તદઉપરાંત અમુક લોકો ઓઈલમિલ તથા જીનીંગના વ્યવસાય ક્ષેત્રે
                  જેડાયેલા છે. આ ગામની રાજકીય છાપ પણ ઘણી સારી છે.
                </p>
                <a class="btn btn__white btn__link" href="#">
                  {" "}
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 inner-padding bg-overlay bg-overlay-theme bg-parallax">
              <div class="bg-img">
                <img src="assets/images/banners/1.jpg" alt="background" />
              </div>
              <div class="heading heading-white mb-40">
                <h3 class="heading__title">જેપુર ગામની લોક વાયકા</h3>
                <p class="heading__desc">
                  અત્યારનું આ ગામ મૂળ ૨ કિલોમીટર દુર સાબરમતી નદી કિનારે આવેલા
                  આગલોડ ગામમાંથી છુટું પડીને વસ્યું હતું.આ ગામમાંથી કેટલાક પટેલ
                  જ્ઞાતિના લોકો અહી આવીને વસ્યા હતા. લોક વાયકા મુજબ આગલોડ ગામ
                  દરબારી ગામ ગણાતું હતું. જેમાં હિંમતસિહ ઠાકોર ગાયકવાડ રાજ્યના
                  તાબાના દરબારી હતા. આગલોડ અગત્સપુરી તરીકે ઓરખાતું હતું. જેમાં
                  દરબારની ભાગવટી પધ્ધતિ ચાલતી હતી. આગલોડ ગામ સાબરમતી નદીના એકદમ
                  કિનારા ઉપર વસેલું હતું. જ્યાંથી પાટીદાર લોકો તથા અન્ય જાતિના
                  લોકોની જમીનો આગલોડથી ઘણી જ દુર આવેલી હતી. જેથી ખેતી કરવામાં
                  ખુબ જ મુશ્કેલી પડતી હતી. જમીનો દૂર હોવાથી પાકનું ભેલાણ પણ થતું
                  હતું. આથી કેટલાક કુટુંબોએ પોતાની જમીન નજીક પડે તે હેતુથી
                  આગલોડથી ૨ કિલોમીટર દૂર પોતાની જમીનોમાં આજથી લગભગ ૧૫૦ વર્ષ
                  પૂર્વે વસવાટ કર્યો. શીવાભાઈ પટેલ નામના યુવકના હાથે નાળીયેર
                  બાંધવામાં આવ્યું.
                </p>
              </div>
              <div class="row">
                {/* <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="fancybox-item">
                    <div class="fancybox__icon"> </div>
                    <div class="fancybox__content">
                      <h4 class="fancybox__title">Environmental Sensitivity</h4>
                      <p class="fancybox__desc">
                        The world of international supply chains involves a
                        myriad of unknown risks and challenging regulations.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="fancybox-item">
                    <div class="fancybox__icon"> </div>
                    <div class="fancybox__content">
                      <h4 class="fancybox__title">Personalised Solutions</h4>
                      <p class="fancybox__desc">
                        Our facilities meet high security requirements and are
                        certified to the highest local standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <a class="btn btn__white btn__bordered btn__lg" href="#">
                    Schedule An Appointment
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
