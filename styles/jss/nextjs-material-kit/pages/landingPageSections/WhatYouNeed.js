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
  },
  icons: {
    margin: '0 0 0 10px',
  },
};

export default productStyle;
