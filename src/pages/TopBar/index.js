import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import fontConfig from "../../constants/fonts";

const logo = "/assets/images/logo/logo-light2.jpeg";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.secondary.light,
  },
  logo: {
    height: "20vh",
    // width: "20vh",
  },
  logoContainer: {},
  logoTitle: {
    ...fontConfig.medium,
    fontSize: 25,
    color: theme.palette.primary.dark,
  },
  headline: {
    ...fontConfig.medium,
    fontSize: "1rem",
  },
  otherLogo: {
    height: "8vh",
  },
}));

const TopBar = ({ data }) => {
  const classes = useStyles();
  console.log("topdata", data);
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            lg={4}
            className={classes.logoContainer}
            container
            alignItems="center"
          >
            <Grid item lg={5}>
              <img src={logo} className={classes.logo} />
            </Grid>
            <Grid item lg={7}>
              <Typography variant="h4" className={classes.logoTitle}>
                {data?.logoTitle || "E-Gram Panchayat"}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            lg={4}
            container
            alignItems="center"
            justify="space-between"
          >
            <Grid item lg={12}>
              <Typography
                variant="h6"
                align="flex-start"
                className={classes.headline}
              >
                {data?.headline}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            lg={4}
            container
            className={classes.otherLogosContainer}
            alignItems="center"
            justify="space-between"
          >
            {data?.otherLogos?.map((logo, index) => {
              return (
                <Grid item key={index}>
                  <img src={logo.src} className={classes.otherLogo} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default TopBar;
