class Counter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(val) {
    this.setAttribute("count", val);
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === "count") {
      this.render();
      let btn = this.shadow.querySelector('#btn');
      btn.classList="btnPrimary"
    btn.addEventListener('click',this.inc.bind(this))
    }
  }

  inc()
  {
    this.count++;
  }
  connectedCallback() {
    this.render();
    let btn = this.shadow.querySelector('#btn');
    btn.addEventListener('click',this.inc.bind(this))
  }

  render() {
    this.shadow.innerHTML = `
    <div>
        <div><h1>Counter</h1></div>
        ${this.count}
        <button id="btn">Increment</button>
        </div>
        `;
  }
}

customElements.define("my-counter", Counter);
