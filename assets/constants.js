import {
  RiEarthFill,
  BsGithub,
  ImFacebook,
  BsTwitter,
} from "../components/ReactIcons";

export const navbarItems = [
  {
    title: "all",
    url: "/all",
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

export const footerAboutLinks = [
  { title: "Veeture", link: "/" },
  { title: "policies", link: "/" },
  { title: "investors", link: "/" },
  { title: "careers", link: "/" },
];

export const socialLinks = [
  { title: "homePage", link: "/", icon: <RiEarthFill /> },
  {
    title: "github",
    link: "https://github.com/LIONSHI01",
    icon: <BsGithub />,
  },
  { title: "facebook", link: "/", icon: <ImFacebook /> },
  { title: "twitter", link: "/", icon: <BsTwitter /> },
];
