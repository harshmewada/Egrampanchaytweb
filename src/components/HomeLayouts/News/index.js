import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CalendarToday } from "@material-ui/icons";
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

const News = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title={props.title || "title"} />
        <CardContent>
          <CarouselProvider
            className={classes.description}
            naturalSlideWidth={100}
            naturalSlideHeight={15}
            orientation="vertical"
            // infinite
            isPlaying={true}
            totalSlides={props?.data.length}
            visibleSlides={3}
          >
            <Slider>
              {props?.data.map((news, index) => {
                return (
                  <Slide index={index}>
                    <ListItem>
                      <ListItemIcon alignItems="flex-start">
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography component="span" variant="body2">
                              {news.date}
                            </Typography>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body1"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {news.title}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
          {/* <Typography variant="body1">
            {props?.description || "description"}
          </Typography> */}
        </CardContent>
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
export default News;
