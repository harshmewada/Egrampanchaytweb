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
import Achievements from "./pages/Achievements";
import LogoCarousel from "./pages/LogoCarousel";
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
import SearchComponent from "./components/Search";
import SubLayouts from "./components/Layouts";
import fontConfig from "./constants/fonts";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff5e14",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: fontConfig.regular.fontFamily,
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
              <SearchComponent data={siteData?.searchComponent} />

              <PortFolio data={siteData?.portfolio} />
              <SubLayouts data={siteData?.subLayouts} />
              <CounterContainer data={siteData?.counter} />
              <PortFolio data={siteData?.sarpanchPortFolio} />
              <PortFolio data={siteData?.talatiPortFolio} />
              <Achievements data={siteData?.achievements} />
              <LogoCarousel data={siteData?.importantLinks} />

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
