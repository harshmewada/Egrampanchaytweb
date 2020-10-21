import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import fontConfig from "../../constants/fonts";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Carousel from "react-material-ui-carousel";
import PortFolioItem from "../../components/PortFolioItem";
import AchievementItem from "../../components/AchievemntItem";
import CarouselBtn from "../../components/Common/Buttons/CarouselBtn";
import LogoItem from "../../components/LogoItem";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    // backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  Divider: {
    marginBottom: theme.spacing(5),
  },
  titleContainer: {},
  title: {
    ...fontConfig.bold,
    fontSize: "2rem",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    // awidth: "20%",
    // width: "15%",
    textAlign: "center",
    padding: 10,
    // padding: "10 30px",
    // wordWrap: "no-wrap",
  },
  personalityContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CarouselProvider: {
    marginTop: theme.spacing(5),
  },
  btns: {
    backgroundColor: "transparent",
    border: "none",
  },
}));

const PortFolio = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <div className={classes.Divider}>
            <Divider />
          </div>

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            isPlaying={true}
            infinite={true}
            totalSlides={data.data.length}
            visibleSlides={6}
          >
            <Grid container>
              <Grid item lg={10}>
                {data.title && (
                  <Grid container>
                    <Grid item className={classes.titleContainer}>
                      <Typography variant="h6" className={classes.title}>
                        {data.title}
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              {/* <Grid
                item
                lg={2}
                justify="space-evenly"
                alignItems="center"
                container
              >
                <Grid item>
                  <ButtonBack className={classes.btns}>
                    <CarouselBtn type="back" />
                  </ButtonBack>
                </Grid>
                <Grid item>
                  <ButtonNext className={classes.btns}>
                    <CarouselBtn type="next" />
                  </ButtonNext>

                </Grid>
              </Grid> */}
            </Grid>

            <div className={classes.CarouselProvider}>
              <Slider>
                {data.data.map((man, index) => {
                  return (
                    <Slide index={index} key={index}>
                      <LogoItem data={man} />
                    </Slide>
                  );
                })}
                {/* <Slide index={0}>I am the first Slide.</Slide>
              <Slide index={1}>I am the second Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide>
              <Slide index={2}>I am the third Slide.</Slide> */}
              </Slider>
            </div>
          </CarouselProvider>
        </Container>
      </div>
    </>
  );
};
export default PortFolio;
