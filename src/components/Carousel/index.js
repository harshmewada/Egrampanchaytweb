import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const Index = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel
        indicators={false}
        autoPlay={true}
        interval={3000}
        animation="slide"
      >
        {data.map((item, i) => (
          <CarouselItem key={i} data={item} />
        ))}
      </Carousel>
    </div>
  );
};
export default Index;

// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Button, Paper } from "@material-ui/core";

// function Example(props) {
//   var items = [
//     {
//       name: "Random Name #1",
//       description: "Probably the most random thing you have ever seen!",
//     },
//     {
//       name: "Random Name #2",
//       description: "Hello World!",
//     },
//   ];

//   return (
// <Carousel>
//   {items.map((item, i) => (
//     <Item key={i} item={item} />
//   ))}
// </Carousel>
//   );
// }

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }
// export default Example;
