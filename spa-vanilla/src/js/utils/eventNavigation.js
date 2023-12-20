const eventNavigation = (e, cb) => {
  if (e.target.matches('[href^="/"]')) {
    e.preventDefault();
    cb(e.target.getAttribute("href"));
  } else if (e.target.matches('div[role="button"]')) {
    e.preventDefault();
    cb(e.target.getAttribute("data-href"));
  }
};
export default eventNavigation;
