import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/drone2.webp";
import benefitTwoImg from "../public/img/drone3.webp";

const benefitOne = {
  title: "Beneficii",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue quam quis magna porta, quis faucibus orci fermentum.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Client fericit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Business de success",
      desc: "Nullam congue quam quis magna porta, quis faucibus orci fermentum.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Expunere maxima",
      desc: "Google Street View.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Detalii",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue quam quis magna porta, quis faucibus orci fermentum.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Usor accesibil de pe mobil",
      desc: "Mobile first responsive site.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Facut cu Next.js & TailwindCSS",
      desc: "Siteul foloseste next-seo.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Light & Dark Mode",
      desc: "Site cu button de light si dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
