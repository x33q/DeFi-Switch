import { container, title } from "styles/jss/nextjs-material-kit.js";

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
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 80px 0px",
    // maxWidth: "1600px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.03), 0 6px 30px 5px rgba(0, 0, 0, 0.03), 0 8px 10px -5px rgba(0, 0, 0, 0.03)",
  },
  heroBG: {
    backgroundColor: '#0c1623',
  },
  tempGraphic: {
    backgroundColor: 'blue',
    width: 'calc(100% - 40px)',
    minHeight: 'calc(100% - 40px)',
    marginTop: '40px',
    marginLeft: '40px',
    borderRadius: '400px',
  },
};

export default landingPageStyle;
