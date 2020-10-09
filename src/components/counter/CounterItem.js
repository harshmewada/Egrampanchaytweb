import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import fontConfig from "../../constants/fonts";
import CountUp from "react-countup";
import { Button, Card, Typography } from "@material-ui/core";
const ReactDOM = require("react-dom");
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  title: {
    marginTop: theme.spacing(3),
    ...fontConfig.medium,
    fontSize: "1.5rem",
    textAlign: "center",

    color: theme.palette.secondary.main,
  },
  count: {
    marginTop: theme.spacing(3),
    ...fontConfig.semibold,
    fontSize: "3rem",
    textAlign: "center",

    color: theme.palette.primary.main,
  },
}));

const CounterItem = ({ data }) => {
  const classes = useStyles();
  //   const yourElement = React.createRef();
  //   if (document.activeElement === ReactDOM.findDOMNode(this)) {
  //     alert("focus");
  //   }
  //   React.useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <div>
        <CountUp
          start={0}
          end={data.count}
          delay={0}
          duration={1}
          className={classes.countContainer}
        >
          {({ countUpRef, start }) => (
            <>
              <div></div>
              <Typography
                ref={countUpRef}
                className={classes.count}
              ></Typography>
            </>
          )}
        </CountUp>
      </div>
      <div className={classes.title}>{data.title}</div>
    </div>
  );
};
export default CounterItem;
