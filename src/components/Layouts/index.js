import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import * as layouts from "../HomeLayouts/index";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    // backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const SubLayouts = ({ data }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Divider />
      <div className={classes.root}>
        {data && (
          <>
            <Grid container spacing={2}>
              {data?.map((layout, index) => {
                const Component = layouts[layout.type];
                return (
                  <Grid item lg={layout?.width || "auto"} key={index}>
                    <Component {...layout} />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </div>
    </Container>
  );
};
export default SubLayouts;
