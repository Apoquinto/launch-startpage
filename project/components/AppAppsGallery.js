import "./AppCard.js"


class AppAppsGallery extends HTMLElement {
    constructor() {
      super();
      this._apps = [];
    }

    get apps() {
      return this._apps;
    }

    set apps(apps) {
      this._apps = apps;
      this.#render();
    }

    static get styles() {
      return `
        display: flex;
        justify-content: space-around;
        overflow-x: scroll;
      `
    }

    connectedCallback() {
      this.#render()
    }
 
    #render() {
      // Add style
      this.style = AppAppsGallery.styles;

      this.apps.forEach((app) => {
        const appCard = document.createElement('app-card')
        appCard.setAttribute('name', app.name)
        appCard.setAttribute('icon', app.icon)
        appCard.setAttribute('link', app.link)
        this.appendChild(appCard)
      });
    }
  }
  
  customElements.define("app-apps-gallery", AppAppsGallery);