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
    color: '#FFF',
    fontSize: '1.1em',
    fontWeight: '700',
    marginBottom: '16px',
  },
  replaceDesc: {
    color: '#FFF',
    fontSize: '0.9em',
    fontWeight: '300',
  },
  flag: {
    margin: '30px 0 28px 0',
  },
  whyItem1: {
    backgroundColor: '#8800fc',
    padding: '60px !important',
  },
  whyItem2: {
    backgroundColor: '#4caf50',
    padding: '60px !important',
  },
  whyItem3: {
    backgroundColor: '#1c193a',
    padding: '60px !important',
  },
  whyItem4: {
    backgroundColor: '#f0f0f0',
    padding: '60px !important',
  },
};

export default productStyle;
