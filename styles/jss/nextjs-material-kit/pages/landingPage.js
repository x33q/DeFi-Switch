import { container, title, primaryColor } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: '4.2em',
  },
  desc: {
    fontSize: "1.1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0px auto 0px",
    maxWidth: "100%",
    borderRadius: "0px",
    // boxShadow:
    //   "0 16px 24px 2px rgba(0, 0, 0, 0.03), 0 6px 30px 5px rgba(0, 0, 0, 0.03), 0 8px 10px -5px rgba(0, 0, 0, 0.03)",
  },
  mainIntro: {
    textAlign: 'center',
    maxWidth: '880px',
    margin: 'auto',
  },
  heroBG: {
    backgroundColor: '#0c1623',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  playerWrapper: {
    position: 'fixed',
    minHeight: '100%',
    top: '0px',
    left: '0%',
    zIndex: '2',
  },
  animWrapper: {
    backgroundColor: '#0b043f',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0px',
    left: '0%',
    zIndex: '1',
  },
  animatedSection: {
    height: '1920px !important',
  },
  bgVideo: {
    opacity: '0.3',
    mixBlendMode: 'multiply',
    width: '100vw !important',
    height: '100vh !important',
    position: 'relative',
    top: '-10px !important',
  },
  gutterBtn: {
    marginRight: '20px',
  },
  scrollAnim: {
    width: '30px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-15px',
    bottom: '40px',
  },
  goldTxt: {
    color: primaryColor,
  },
  biggerTxt: {
    fontSize: '150%',
    lineHeight: '1.4em',
  },
};

export default landingPageStyle;
