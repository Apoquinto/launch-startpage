class AppClock extends HTMLElement {
    constructor() {
      super();
      this.currentDate = new Date();
      this.intervalId = setInterval(() => {
        this.#updateDate();
      }, 1000);
    }

    static get styles() {
      return `
        :host {

        }

        .clock {
          font-size: 5rem;
        }

        .clock > .time-mark {
          font-size: 2.5rem;
        }
      `;
    }

    connectedCallback() {
      this.#render();
    }

    disconnectedCallback() {
      clearInterval(this.intervalId);
    }

    #render() {
      this.innerHTML = `
        <style>${AppClock.styles}</style>
        <span class = "clock">
          ${this.#parseDateToDisplayHours()}
        </span>
      `;
    }

    #parseDateToDisplayHours() {
      return this.#displayIn12HoursFormat();
    }

    #displayIn24HoursFormat() {
      let currentHour = this.currentDate.getHours();
      let currentMinute = this.currentDate.getMinutes();
      return `${this.#formatDigit(currentHour)}:${this.#formatDigit(currentMinute)}`;
    }

    #displayIn12HoursFormat() {
      let currentHour = this.currentDate.getHours();
      let currentMinute = this.currentDate.getMinutes();
      let timeMark = 'AM';
      if (currentHour > 12) {
        currentHour = currentHour % 12;
        timeMark = 'PM';
      }
      return `${this.#formatDigit(currentHour)}:${this.#formatDigit(currentMinute)}<span class = "time-mark">${timeMark}</span>`;
    }

    #formatDigit(number) {
      return number > 9? number: `0${number}`;
    }

    #updateDate() {
      let currentDate = new Date();
      // Re-render only when change the minutes, avoiding unnecesary changes.
      if (currentDate.getMinutes() == this.currentDate.getMinutes()) return;
      this.currentDate = currentDate;
      this.#render();
    }
  }
  
  customElements.define("app-clock", AppClock);