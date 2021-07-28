import { title } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "50px 0 70px 0",
    textAlign: "center",
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
  icons: {
    margin: '0 0 0 10px',
  },
  whyItem: {
    border: '1px solid red',
    borderRadius: '20px',
    padding: '40px !important',
  },
};

export default productStyle;
