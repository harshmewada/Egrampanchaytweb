import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import Advertise from "../../components/Advertise/";
import Carousel from "../../components/Carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const SliderContainer = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={3}>
          <Advertise data={data.advertise} />
        </Grid>
        <Grid item lg={9}>
          <Carousel data={data.carousel} />
        </Grid>
      </Grid>
    </div>
  );
};
export default SliderContainer;
