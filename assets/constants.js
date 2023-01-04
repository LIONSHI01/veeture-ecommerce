import {
  RiEarthFill,
  BsGithub,
  ImFacebook,
  BsTwitter,
  AiFillBehanceCircle,
  AiFillHome,
  BsBagFill,
  BsGenderMale,
  BsGenderFemale,
  HiHome,
} from "../components/ReactIcons";

export const navbarItems = [
  {
    title: "all",
    url: "/products",
  },
  {
    title: "men",
    url: "/men",
  },
  {
    title: "women",
    url: "/women",
  },
];

export const FOOTER_AOUBT_LINKS = [
  { title: "Veeture", link: "/" },
  { title: "policies", link: "/" },
  { title: "investors", link: "/" },
  { title: "careers", link: "/" },
];

export const SOCIAL_LINKS = [
  { title: "homePage", link: "/", icon: <RiEarthFill /> },
  {
    title: "github",
    link: "/",
    icon: <BsGithub />,
  },
  { title: "facebook", link: "/", icon: <ImFacebook /> },
  { title: "twitter", link: "/", icon: <BsTwitter /> },
];

export const AUTHOR_INFO = [
  { title: "homePage", link: "https://lionshi.io", icon: <AiFillHome /> },
  {
    title: "github",
    link: "https://github.com/LIONSHI01",
    icon: <BsGithub />,
  },
  {
    title: "behance",
    link: "https://www.behance.net/lionc",
    icon: <AiFillBehanceCircle />,
  },
];

export const SIDE_BAR_ITEMS = [
  {
    title: "home",
    url: "/",
    icon: <HiHome />,
  },
  {
    title: "all",
    url: "/products",
    icon: <BsBagFill />,
  },
  {
    title: "men",
    url: "/men",
    icon: <BsGenderMale />,
  },
  {
    title: "women",
    url: "/women",
    icon: <BsGenderFemale />,
  },
];
