import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  adImage: {
    height: "40vh",
    width: "40vh",
  },
  CardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Advertise = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0}>
        <CardHeader subheader="Advertise" />
        <Divider />

        <div className={classes.CardContent}>
          <img src={data.imageSrc} className={classes.adImage} />
        </div>
      </Card>
    </div>
  );
};
export default Advertise;
