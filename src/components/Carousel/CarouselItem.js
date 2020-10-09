import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, colors, Paper, Typography } from "@material-ui/core";
import fontConfig from "../../constants/fonts";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  imgContainer: {
    height: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  titleContainer: {
    margin: "5vh",
    padding: "3vh",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    ...fontConfig.medium,
    fontSize: "2.5rem",
    color: "white",
  },
}));

const CarouselItem = ({ data }) => {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${data.imageSrc})`,
      backgroundRepeat: "no-repeat",
    },
  };

  return (
    <div className={classes.root}>
      <Paper>
        <div style={styles.paperContainer} className={classes.imgContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>{data.title}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};
export default CarouselItem;
