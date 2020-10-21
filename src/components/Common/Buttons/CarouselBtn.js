import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import NextIcon from "@material-ui/icons/ChevronRightRounded";
import PreviousIcon from "@material-ui/icons/ChevronLeftRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  IconButton: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: 100,
    color: theme.palette.secondary.main,
    "&:active": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const CarouselBtn = ({ type }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton disableFocusRipple className={classes.IconButton}>
        {type === "next" ? (
          <NextIcon className={classes.Icon} />
        ) : (
          <PreviousIcon className={classes.Icon} />
        )}
      </IconButton>
    </div>
  );
};
export default CarouselBtn;
