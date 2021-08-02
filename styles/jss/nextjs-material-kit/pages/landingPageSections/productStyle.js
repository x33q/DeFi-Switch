import { title, roseColor } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "140px 0",
    textAlign: "center",
    // width: '100vw',
    // position: 'absolute',
    // left: '0px',
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    marginRight: '180px',
    minHeight: "32px",
    textDecoration: "none",
    color: '#000',
    textAlign: 'left',
  },
  description: {
    color: "#666",
    marginBottom: '60px',
    marginRight: '80px',
    textAlign: 'left',
  },
  replaceTitle: {
    color: '#000',
    fontSize: '1.5em',
    fontWeight: '700',
    marginBottom: '16px',
  },
  replaceDesc: {
    color: '#000',
    fontSize: '18px',
    fontWeight: '300',
  },
  whiteTitle: {
    color: '#FFF',
    fontSize: '1.5em',
    fontWeight: '700',
    marginBottom: '16px',
    marginTop: '0',
  },
  whiteDesc: {
    color: '#FFF',
    fontSize: '18px',
    fontWeight: '300',
  },
  flag: {
    margin: '30px 0 28px 0',
  },
  whyItem1: {
    backgroundColor: '#f1f1f1',
    padding: '60px !important',
  },
  whyItem2: {
    backgroundColor: '#C4AC6B',
    padding: '60px !important',
  },
  whyItem3: {
    backgroundColor: '#605c6c',
    padding: '60px !important',
  },
  whyItem4: {
    backgroundColor: roseColor,
    padding: '60px !important',
  },
  topHeader: {
    backgroundColor: '',
  },
};

export default productStyle;
