import { title } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "40px 0",
    textAlign: "center",
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: '#000',
  },
  description: {
    color: "#666",
    marginBottom: '60px',
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
  flag: {
    margin: '30px 0 28px 0',
  },
  whyItem1: {
    backgroundColor: '#fff',
    padding: '60px !important',
  },
  whyItem2: {
    backgroundColor: '#fff',
    padding: '60px !important',
  },
  whyItem3: {
    backgroundColor: '#fff',
    padding: '60px !important',
  },
  whyItem4: {
    backgroundColor: '#fff',
    padding: '60px !important',
  },
  topHeader: {
    backgroundColor: '',
  },
};

export default productStyle;
