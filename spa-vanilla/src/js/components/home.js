const injectHTML = () => {
  return `
    <h1>Home</h1>
    <div role="button" data-href="/search" class="button-style"><span>Search</span></div>
    <a href="/about">About</a>
    <br>
    <a href="/about/me">About Me</a>`;
};

export default injectHTML();
