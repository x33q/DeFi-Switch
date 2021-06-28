import { title } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "70px 0",
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
    marginBottom: '30px',
  },
  replaceTitle: {
    color: '#3c4859',
    fontSize: '1.1em',
    fontWeight: '700',
    marginBottom: '16px',
  },
  replaceDesc: {
    color: '#333',
    fontSize: '0.9em',
    fontWeight: '300',
  },
  flag: {
    margin: '30px 0 28px 0',
  },
};

export default productStyle;
