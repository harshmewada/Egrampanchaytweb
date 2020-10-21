import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Icon,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  card: {
    height: "35vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  CardContent: {},
  description: {
    overflow: "hidden",
    display: "-webkit-box",

    height: "15vh",
    textOverflow: "ellipsis",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
  },
  link: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

const AboutUs = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title={props.title || "title"} />
        <List className={classes.CardContent}>
          {props.data?.map((data, index) => {
            return (
              <ListItem button key={index}>
                <ListItemIcon>
                  <ArrowForward />
                </ListItemIcon>
                <ListItemText primary={data.title} />
              </ListItem>
            );
          })}
          {/* <Typography variant="body1" className={classes.description}>
            {props?.description || "description"}
          </Typography> */}
        </List>

        <Typography
          align="right"
          variant="body1"
          className={classes.link}
          paragraph
        >
          <Link href={props?.link}>{props?.linkTitle}</Link>
        </Typography>
      </Card>
    </div>
  );
};
export default AboutUs;
