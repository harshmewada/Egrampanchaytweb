import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Slider from "./pages/slider";
import Clients from "./pages/Clients";
import ServicesCarousel from "./pages/ServicesCarousel";
import About2 from "./pages/About2";
import Banner1 from "./pages/Banner1";
import VideoCarousel from "./pages/VideroCarousel";
import PortFolio from "./pages/Portfolio";
import About1 from "./pages/About1";
import Banner2 from "./pages/Banner2";
import ContactInfo from "./pages/Contact";
import BlogGrid from "./pages/BlogGrid";
import Footer from "./pages/Footer";
import TopBar from "./pages/TopBar";
import {
  ThemeProvider,
  createMuiTheme,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import Axios from "axios";
import SliderContainer from "./pages/SliderContainer";
import CounterContainer from "./pages/CounterContainer";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff5e14",
    },
  },
  shape: {
    borderRadius: 0,
  },
  // status: {
  //   danger: orange[500],
  // },
});

function App() {
  const [language, setLanguage] = React.useState("guj");
  const [siteData, setSiteData] = React.useState();
  React.useLayoutEffect(() => {
    Axios.get("/data/site.json").then((data) => setSiteData(data.data));
  }, []);
  return (
    <div class="wrapper">
      <ThemeProvider theme={theme}>
        <body>
          {siteData ? (
            <>
              <TopBar data={siteData?.topBar} />
              <Header data={siteData?.mainNav} />
              <SliderContainer data={siteData?.sliderContainer} />
              <PortFolio data={siteData?.portfolio} />
              <CounterContainer data={siteData?.counter} />
              <PortFolio data={siteData?.sarpanchPortFolio} />

              {/* <Slider /> */}
              {/* <About2 /> */}
              {/* <ServicesCarousel /> */}
              {/* <PortFolio /> */}
              {/* <Banner1 /> */}
              {/* <BlogGrid /> */}
            </>
          ) : (
            <CircularProgress />
          )}
          {/* <VideoCarousel /> */}
          {/* <Banner2 /> */}
          {/* <ServicesCarousel /> */}
          {/* <PortFolio />
        <About2 />
        <Banner1 />
        <ServicesCarousel />
        <Clients />
        <VideoCarousel />
        <PortFolio />
        <About1 />
        <Banner2 />
        <ContactInfo />
        <BlogGrid /> */}
          <Footer />
        </body>
      </ThemeProvider>
    </div>
  );
}

export default App;
