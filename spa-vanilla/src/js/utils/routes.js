import Home from "../components/home";
import Aboutme from "../components/aboutme";
import About from "../components/about";

const routes = {
  "": () => new Home("#root").render(),
  about: () => new About("#root").render(),
  "about/me": () => new Aboutme("#root").render(),
};

export default routes;
