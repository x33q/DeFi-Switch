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
  icons: {
    margin: '0 0 0 10px',
  },
  whyItem: {
    padding: '40px !important',
  },
  borderBox: {
    border: '1px solid rgba(104,108,122,0.2)',
    borderRadius: '20px',
  },
  sectionIntro: {
    paddingRight: '130px !important',
  },
  whyItem: {
    padding: '50px 60px 40px 60px !important',
  },
  scrollAnims: {
    width: '100%',
    height: '110px',
    margin: '0 auto',
    marginBottom: '0px',
  },
};

export default productStyle;
