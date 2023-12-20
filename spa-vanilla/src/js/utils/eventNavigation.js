const eventNavigation = (e, cb) => {
  const targetElement = e.target.closest('[href^="/"], div[role="button"]');
  if (targetElement) {
    e.preventDefault();
    const href =
      targetElement.getAttribute("href") ||
      targetElement.getAttribute("data-href");
    cb(href);
  }
};

export default eventNavigation;
