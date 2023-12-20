import "./src/sass/main.scss";
import urlParse from "./src/js/utils/urlParse";
import eventNavigation from "./src/js/utils/eventNavigation";
import routes from "./src/js/utils/routes";

const root = document.getElementById("root");

const navigateTo = (url) => {
  history.pushState({}, "", url);
  app();
};

const app = () => {
  const { resource, id } = urlParse();
  const path = id ? `${resource}/${id}` : resource;

  const routeHandler = routes[path];
  if (routeHandler) {
    routeHandler();
  } else {
    root.innerHTML = `<h1>404 Not Found</h1><a href='/'>Back</a>`;
  }
};

// Event listener for navigation
document.addEventListener("DOMContentLoaded", () => {
  app();
  document.addEventListener("click", (e) => eventNavigation(e, navigateTo));

  // Handle browser back/forward
  window.addEventListener("popstate", app);
});
