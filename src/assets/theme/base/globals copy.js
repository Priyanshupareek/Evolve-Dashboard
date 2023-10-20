import colors from "assets/theme/base/colors";
import img1 from "assets/images/BGImages/background1.jpg";
import img2 from "assets/images/BGImages/background2.png";
import img3 from "assets/images/BGImages/background3.jpg";
import img4 from "assets/images/BGImages/background4.jpg";

const bgImages = [img1, img2, img3, img4];

// Select a random background image
const randomBgImage = bgImages[Math.floor(Math.random() * bgImages.length)];

const { info, dark } = colors;
export default {
  html: {
    scrollBehavior: "smooth",
    background: dark.body,
  },
  body: {
    background: `url(${randomBgImage})`,
    backgroundSize: "cover",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};
