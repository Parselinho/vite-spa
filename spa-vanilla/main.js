import "./src/sass/main.scss";
import urlParse from "./src/js/utils/urlParse";
import eventNavigation from "./src/js/utils/eventNavigation";
import routes from "./src/js/utils/routes";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const navigateTo = (url) => {
    history.pushState({}, "", url);
    root.innerHTML = app();
  };

  const app = () => {
    const { resource, id } = urlParse();
    const path = id ? `${resource}/${id}` : resource;
    return routes[path] || `<h1>404 Not Found</h1>`;
  };

  root.innerHTML = app();
  // Event listener for navigation
  document.addEventListener("click", (e) => eventNavigation(e, navigateTo));

  // Handle browser back/forward
  window.addEventListener("popstate", () => {
    root.innerHTML = app();
  });
});
