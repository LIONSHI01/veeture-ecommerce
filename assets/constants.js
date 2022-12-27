import {
  RiEarthFill,
  BsGithub,
  ImFacebook,
  BsTwitter,
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
    link: "https://github.com/LIONSHI01",
    icon: <BsGithub />,
  },
  { title: "facebook", link: "/", icon: <ImFacebook /> },
  { title: "twitter", link: "/", icon: <BsTwitter /> },
];
