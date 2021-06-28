import { container } from "styles/jss/nextjs-material-kit.js";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "100px",
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
    margin: "0 20px 0 0px",
  },
  cardHeader: {
    width: "auto",
    textAlign: "left",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    padding: "80px",
    minHeight: '100%',
    borderRadius: '5px 0px 0px 5px',
    display: 'flex',
    alignItems: 'flex-end',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  cardBody: {
    textAlign: 'left',
    marginRight: '30px',
    paddingTop: '30px',
  },
  cardHero: {
    width: "auto",
    textAlign: "center",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "0px",
    padding: "20px 0",
    marginBottom: "0px",
    height: "100%",
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
    color: "#2101fc",
  },
  formTitle: {
    margin: '0px 0px 10px 0px',
    fontWeight: '700',
    fontSize: '2em',
  },
  formSubtitle: {
    margin: '0px 0px 10px 0px',
    fontWeight: '400',
    fontSize: '1.3em',
  },
};

export default signupPageStyle;
