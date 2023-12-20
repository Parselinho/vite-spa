class About {
  constructor(parent) {
    this.parent = parent;
  }
  render() {
    let parentElement = document.querySelector(this.parent);
    parentElement.innerHTML = "";

    const main = document.createElement("main");
    main.className = "";

    main.insertAdjacentHTML(
      "beforeend",
      `
    <section>
    <h1>About</h1>
    <div role="button" data-href="/search" class="button-style"><span>Search</span></div>
    </section>
    
    <a href="/about">About</a>
    <br>
    <a href="/about/me">About Me</a>
    `
    );
    document.querySelector(this.parent).append(main);
  }
}

export default About;
