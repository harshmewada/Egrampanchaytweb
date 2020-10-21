import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as Inputs from "../Common/Inputs/index";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    // backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "30vh",
  },
  gridContainer: {
    height: "100%",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  searchBtn: {
    height: theme.spacing(7),
  },
}));

const SearchComponent = ({ data }) => {
  const classes = useStyles();
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => console.log("search data", data);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={classes.container}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.gridContainer}
          >
            {data?.map((item, index) => {
              const MyInput = Inputs[item.type];
              item.classes = {
                select: {
                  backgroundColor: "red",
                },
              };
              return (
                <Grid item lg={3}>
                  <Controller
                    name={item.name}
                    control={control}
                    defaultValue={undefined}
                    rules={{ required: false }}
                    render={(props) => (
                      <MyInput
                        {...props}
                        {...item}

                        // onChange={(e) => props.onChange(e.target.checked)}
                      />
                    )} // props contains: onChange, onBlur and value
                  />
                </Grid>
              );
            })}
            {data && (
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disableElevation
                  className={classes.searchBtn}
                >
                  Search
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </form>
    </div>
  );
};
export default SearchComponent;
