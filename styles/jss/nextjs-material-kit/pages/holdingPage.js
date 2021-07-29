import { container } from "styles/jss/nextjs-material-kit.js";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    overflow: 'hidden',
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    padding: "20px 0",
    marginBottom: "15px",
    borderRadius: "5px 5px 0px 0px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  backhome: {
    backgroundColor: "rgba(255,255,255,0.1)",
    position: "fixed",
    color: "#FFF",
    fontSize: "0.8em",
    top: "20px",
    left: "20px",
    zIndex: "9999",
    padding: "8px 16px",
    borderRadius: "40px",
  },
  contentbodyleft: {
    marginRight: "60px",
  },
  desc: {
    color: "rgba(255,255,255,0.6)",
    marginTop: "30px",
  },
  logo: {
    fontWeight: "800",
    fontSize: "1.5em",
    marginBottom: "30px",
  },
  title: {
    fontWeight: "800",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  bgVideo: {
    position: 'absolute',
    top: '0',
    left: '-10%',
    margin: '0px',
    opacity: '0.2',
  },
};

export default signupPageStyle;
