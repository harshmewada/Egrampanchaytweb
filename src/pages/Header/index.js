import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import MyMenu from "./MyMenu";
import ArrowDown from "@material-ui/icons/ArrowDropDown";
import clsx from "clsx";
import fontConfig from "../../constants/fonts";
const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: theme.palette.primary.main,
    height: "7vh",
  },
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  menuItemContainer: {
    borderLeft: "0.5px solid",
    // borderRight: "0.5px solid",

    borderLeftColor: theme.palette.primary.dark,
    borderRightColor: theme.palette.primary.dark,

    height: "7vh",
  },
  hasBorderLeft: {
    borderLeft: "1px solid",

    borderLeftColor: theme.palette.primary.dark,
  },
  hasBorderRight: {
    borderRight: "1px solid",

    borderRightColor: theme.palette.primary.dark,
  },
  menuBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  menuTitle: {
    ...fontConfig.medium,
    fontSize: 15,
  },
  menuIcon: {
    marginLeft: "0.5vw",
  },
}));

const Header = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar variant="dense">
          <Container maxWidth="md">
            <Grid container justify="center">
              {data?.map((nav, index) => {
                return (
                  <Grid
                    item
                    lg={2}
                    className={clsx(
                      classes.menuItemContainer,
                      index === 0 && classes.hasBorderLeft,
                      index === data.length - 1 && classes.hasBorderRight
                    )}
                  >
                    <Box className={classes.menuBox}>
                      <Typography className={classes.menuTitle}>
                        {nav.title}
                      </Typography>
                      <ArrowDown className={classes.menuIcon} />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down("md")]: {
//       backgroundColor: "white",
//     },
//   },
// }));

// const ComponentName = () => {
//   const classes = useStyles();

//   return (
//     <header id="header" class="header header-layout1">
//       {/* <div class="header__promo-text text-center">
//         <strong>Need Help:</strong>Providing Innovative and Sustainable
//         Solutions, Call (002) 01061245741
//       </div> */}
//       <nav class="navbar navbar-expand-lg sticky-navbar">
//         <div class="container-fluid px-0">
//           <a class="navbar-brand" href="index.html">
//             {" "}
//             <img
//               class="logo-light"
//               src="assets/images/logo/logo-light.png"
//               alt="logo"
//             />{" "}
//             <img
//               class="logo-dark"
//               src="assets/images/logo/logo-dark.png"
//               alt="logo"
//             />{" "}
//           </a>{" "}
//           <button class="navbar-toggler" type="button">
//             {" "}
//           </button>
//           <div id="mainNavigation" class="collapse navbar-collapse">
//             <ul class="navbar-nav mx-auto">
//               <li class="nav__item with-dropdown">
//                 <a
//                   class="dropdown-toggle nav__item-link active"
//                   href="index.html"
//                 >
//                   Home
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="index.html">
//                       Home Main
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="home-classic.html">
//                       Home classic
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav__item with-dropdown">
//                 <a class="dropdown-toggle nav__item-link" href="about-us.html">
//                   ઈતિહાસ
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="about-us.html">
//                       About Us
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="why-us.html">
//                       Why Choose Us
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="leadership-team.html">
//                       Leadership Team
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="awards.html">
//                       Award &amp; Recognition
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="pricing.html">
//                       Pricing &amp; Plans
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="faqs.html">
//                       Help &amp; FAQs
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="careers.html">
//                       careers
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav__item with-dropdown">
//                 <a
//                   class="dropdown-toggle nav__item-link"
//                   href="Industries-industry-served.html"
//                 >
//                   ધરોહર
//                 </a>
//                 <ul class="dropdown-menu wide-dropdown-menu">
//                   <li class="nav__item">
//                     <div class="row mx-0">
//                       <div class="col-sm-6 dropdown-menu-col">
//                         <h6>Industries Served</h6>
//                         <ul class="nav flex-column">
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Petroleum &amp; Gas
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Construction &amp; Engineering
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Mechanical Engineering
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Industrial Chemicals
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Automotive Manufacturing
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-industry.html"
//                             >
//                               Bridge Construction
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div class="col-sm-6 dropdown-menu-col">
//                         <h6>Industry Sectors</h6>
//                         <ul class="nav flex-column">
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Retail &amp; Consumer
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Sciences &amp; Healthcare
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Industrial &amp; Chemical
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Power Generation
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Food &amp; Beverage
//                             </a>
//                           </li>
//                           <li class="nav__item">
//                             <a
//                               class="nav__item-link"
//                               href="industries-single-sector.html"
//                             >
//                               Oil &amp; Gas
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav__item with-dropdown">
//                 <a
//                   class="dropdown-toggle nav__item-link"
//                   href="case-studies-grid.html"
//                 >
//                   પ્રવ્રુતિઓ
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="case-studies-grid.html">
//                       Case Studies Grid
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="case-studies-classic.html">
//                       Case Studies Classic
//                     </a>
//                   </li>
//                   <li class="nav__item">
//                     <a class="nav__item-link" href="case-studies-single.html">
//                       Single Case Study
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="nav__item with-dropdown">
//                 <a class="dropdown-toggle nav__item-link" href="blog.html">
//                   સિદ્ધિઓ
//                 </a>
//               </li>
//               <li class="nav__item with-dropdown">
//                 <a class="dropdown-toggle nav__item-link" href="blog.html">
//                   પદાધિકારી
//                 </a>
//               </li>{" "}
//               <li class="nav__item with-dropdown">
//                 <a class="dropdown-toggle nav__item-link" href="blog.html">
//                   યોજનાઓ
//                 </a>
//               </li>{" "}
//               {/* <li class="nav__item with-dropdown">
//                 <a class="dropdown-toggle nav__item-link" href="blog.html">
//                   વિકાસના કામ
//                 </a>
//               </li>{" "} */}
//               {/* <li class="nav__item">
//                 <a class="nav__item-link" href="contacs.html">
//                   બ્લડ ગ્રુપની માહિતી
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//           <div class="navbar-modules">
//             <ul class="list-unstyled d-flex align-items-center modules__btns-list">
//               <li>
//                 <div class="dropdown dropdown__lang">
//                   <button
//                     id="langDrobdown"
//                     class="dropdown-toggle"
//                     data-toggle="dropdown"
//                   >
//                     {" "}
//                     {/* <img src="assets/images/flags/en.png" alt="en" /> */}
//                     ગુજરાતી
//                   </button>
//                   <div class="dropdown-menu">
//                     <a class="dropdown-item" href="#">
//                       {" "}
//                       <img src="assets/images/flags/en.png" alt="fr" />
//                       English
//                     </a>{" "}
//                     {/* <a class="dropdown-item" href="#">
//                       {" "}
//                       <img src="assets/images/flags/gr.png" alt="gr" />
//                       germany{" "}
//                     </a> */}
//                   </div>
//                 </div>
//               </li>
//               {/* <li class="d-none d-lg-block">
//                 <a
//                   class="btn btn__secondary module__btn-request"
//                   href="request-quote.html"
//                 >
//                   {" "}
//                   Request A Quote{" "}
//                 </a>
//               </li> */}
//               <li class="d-none d-lg-block">
//                 <form class="header__search-form">
//                   <input
//                     class="search__input"
//                     type="text"
//                     placeholder="Search..."
//                   />{" "}
//                   <button></button>
//                 </form>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };
// export default ComponentName;
