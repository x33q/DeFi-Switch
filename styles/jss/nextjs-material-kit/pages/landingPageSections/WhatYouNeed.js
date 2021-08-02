import { title } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "100px 0 120px 0",
    textAlign: "center",
    borderTop: '1px solid rgba(0,0,0,0.1)',
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0px",
    minHeight: "32px",
    textDecoration: "none",
    color: '#000',
    textAlign: 'left',
  },
  description: {
    color: "#666",
    marginBottom: '60px',
    textAlign: 'left',
  },
  icons: {
    margin: '0 0 0 10px',
  },
  whyItem: {
    padding: '40px !important',
  },
  borderBox: {
    border: '1px solid rgba(104,108,122,0.2)',
  },
  sectionIntro: {
    paddingRight: '130px !important',
  },
};

export default productStyle;
