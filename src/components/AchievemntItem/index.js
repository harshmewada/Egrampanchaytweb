import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@material-ui/core";
import fontConfig from "../../constants/fonts";
// import fontConfig from "../../constants/fonts";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(),
    // marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  card: {
    width: "20vw",

    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.5s ease",
    "&:hover": {
      boxShadow: "0px 0px 20px rgba(0,0,0,0.15)",
    },
  },
  cover: {
    height: "25vh",
    width: "100%",

    // width: "25vh",
    // alignSelf: "center",
    // justifySelf: "center",
    // maxWidth: "15vw",
  },
  titleContainer: {},
  // title: {
  //   ...fontConfig.semibold,
  //   fontSize: "2rem",
  //   color: "white",
  //   backgroundColor: theme.palette.primary.main,
  //   // width: "20%",
  //   width: "15%",
  //   textAlign: "center",
  //   padding: 10,
  // },
  personalityContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    ...fontConfig.medium,
    fontSize: "1rem",
  },
  description: {
    marginTop: theme.spacing(1),
    ...fontConfig.regular,
    fontSize: "0.8rem",
    overflow: "hidden",
    display: "-webkit-box",
    letterSpacing: "0.05rem",
    height: "7vh",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
  link: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

const AchievementItem = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardMedia image={data.imageSrc} className={classes.cover} />
        <CardContent>
          <Typography variant="body1" className={classes.name}>
            {data.title}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {data.description}
          </Typography>
        </CardContent>
        <Typography
          align="right"
          variant="body1"
          className={classes.link}
          paragraph
        >
          <Link href={data?.link}>{data?.linkTitle}</Link>
        </Typography>
      </Card>
    </div>
  );
};
export default AchievementItem;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down("md")]: {
//       backgroundColor: "white",
//     },
//   },
// }));

// const PortFolio = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <section
//         id="portfolioCarousel"
//         class="portfolio-carousel portfolio-classic pt-90 pb-70"
//       >
//         <div class="container">
//           <div class="row mb-50">
//             <div class="col-sm-12 col-md-12 col-lg-7">
//               <div class="heading">
//                 <span class="heading__subtitle">
//                   We Work With Global Industries!
//                 </span>
//                 <h3 class="heading__title mb-0">Featured portfolio</h3>
//               </div>
//             </div>
//             {/* <div class="col-sm-12 col-md-12 col-lg-5">
//               <div class="cta__banner">
//                 <div class="bg-img">
//                   <img
//                     src="assets/images/backgrounds/pattern/1.jpg"
//                     alt="background"
//                   />
//                 </div>
//                 <h5 class="cta__title">
//                   Dedicated Customer <br /> Teams &amp; An Agile Services
//                 </h5>
//                 <p class="cta__desc">
//                   Building relationships and portfolio that last. Serving an
//                   impressive list of long-term clients with experience and
//                   expertise in industries.
//                 </p>
//                 <a class="btn btn__white btn__link" href="#">
//                   {" "}
//                   View Our Works{" "}
//                 </a>
//               </div>
//             </div> */}
//           </div>
//           <div class="row">
//             <div class="col-sm-12 col-md-12 col-lg-12">
//               <div
//                 class="carousel owl-carousel carousel-arrows"
//                 data-slide="3"
//                 data-slide-md="2"
//                 data-slide-sm="1"
//                 data-autoplay="true"
//                 data-nav="true"
//                 data-dots="false"
//                 data-space="30"
//                 data-loop="true"
//                 data-speed="800"
//               >
//                 <div class="portfolio-item">
//                   <div class="portfolio__img">
//                     <img
//                       src="http://jepurpanchayat.com/assets/images/products/p3.jpg"
//                       alt="portfolio img"
//                     />{" "}
//                     {/* <a class="view__icon" href="#">
//                       View
//                     </a> */}
//                   </div>
//                   <div class="portfolio__content">
//                     <h4 class="portfolio__title">
//                       <a href="#">શ્રી અમરેન્દ્ર કુમાર રાકેશ​ આઇ. એ. એસ.</a>
//                     </h4>
//                     <div class="portfolio__cat">
//                       <a href="#">
//                         અધિક મુખ્ય સચિવશ્રી (પંચાયત, ગ્રામ ગૃહનિર્માણ અને ગ્રામ
//                         વિકાસ વિભાગ)
//                       </a>
//                       {/* <a href="#">oil &amp; Gas</a> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div class="portfolio-item">
//                   <div class="portfolio__img">
//                     <img
//                       src="http://jepurpanchayat.com/assets/images/products/p4.jpg"
//                       alt="portfolio img"
//                     />{" "}
//                     {/* <a class="view__icon" href="#">
//                       View
//                     </a> */}
//                   </div>
//                   <div class="portfolio__content">
//                     <h4 class="portfolio__title">
//                       <a href="#">પ્રહલાદભાઈ એચ. પટેલ</a>
//                     </h4>
//                     <div class="portfolio__cat">
//                       <a href="#">ઉપ સરપંચશ્રી </a>
//                       <a href="#">+૯૧-૯૦૯ ૯૪૨ ૨૮૬૦</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="portfolio-item">
//                   <div class="portfolio__img">
//                     <img
//                       src="http://jepurpanchayat.com/assets/images/products/p1.jpg"
//                       alt="portfolio img"
//                     />{" "}
//                     {/* <a class="view__icon" href="#">
//                       View
//                     </a> */}
//                   </div>
//                   <div class="portfolio__content">
//                     <h4 class="portfolio__title">
//                       <a href="#">શ્રી રામાજી રાણાજી વણઝારા</a>
//                     </h4>
//                     <div class="portfolio__cat">
//                       <a href="#">ગ્રામસેવક</a>
//                       <a href="#">+૯૧-૭૮૭૪૨૪૪૯૩૫</a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div class="portfolio-item">
//                   <div class="portfolio__img">
//                     <img
//                       src="http://jepurpanchayat.com/assets/images/products/p2.jpg"
//                       alt="portfolio img"
//                     />{" "}
//                     <a class="view__icon" href="#">
//                       View
//                     </a>
//                   </div>
//                   <div class="portfolio__content">
//                     <h4 class="portfolio__title">
//                       <a href="#">Regulatory Compliance Seminar</a>
//                     </h4>
//                     <div class="portfolio__cat">
//                       <a href="#">Construction</a>
//                       <a href="#">Engineering</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="portfolio-item">
//                   <div class="portfolio__img">
//                     <img
//                       src="http://jepurpanchayat.com/assets/images/products/p3.jpg"
//                       alt="portfolio img"
//                     />{" "}
//                     <a class="view__icon" href="#">
//                       View
//                     </a>
//                   </div>
//                   <div class="portfolio__content">
//                     <h4 class="portfolio__title">
//                       <a href="#">Documents &amp; Electronic Data</a>
//                     </h4>
//                     <div class="portfolio__cat">
//                       <a href="#">Engineering</a>
//                       <a href="#">oil &amp; Gas</a>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default PortFolio;
