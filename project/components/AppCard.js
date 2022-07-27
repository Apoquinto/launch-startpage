class AppCard extends HTMLElement {
    constructor() {
      super();
    }

    static get styles() {
      return `
        :host {

        }

        .app-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            min-width: 5rem;
            height: 7rem;
            color: var(--text);
            border-radius: 0.5rem;
            border: 1px solid var(--border);
            background: var(--background-contrast);
            
            margin: 1rem;
            padding: 2rem;

            transition: 0.2s;
        }

        .app-card:link,
        .app-card:visited {
            text-decoration: none;
        }

        .app-card:hover,
        .app-card:focus {
            text: var(--primary);
            background: var(--border);
            outline: 2px solid var(--primary);

            transform: rotate(-2deg);
        }

        .app-card > .card-icon {
            padding-bottom: 0.5rem;
        }
      `
    }

    connectedCallback() {
      this.#render()
    }
    
    static get observedAttributes() {
      return ["name", "icon", "link"];
    }

    attributeChangedCallback(name, old, now) {
      this.#render();
    }

    #render() {
      this.innerHTML = `
        <style>${AppCard.styles}</style>
        <a class = "app-card" href = "${this.getAttribute("link")}">
            <i class = "card-icon" data-feather="${this.getAttribute("icon")}"></i>
            <span class = "card-name">${this.getAttribute("name")}</span>
        </a>
      `;
      feather.replace()
    }
  }
  
  customElements.define("app-card", AppCard);