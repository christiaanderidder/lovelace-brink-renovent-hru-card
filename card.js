import {
    LitElement,
    html,
    css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class RenoventHruCard extends LitElement {

    _hass;

    static get properties() {
        return {
            _config: { state: true },
            _state: { state: true },
        };
    }

    setConfig(config) {
        this._entity = config.entity;
    }

    set hass(hass) {
        this._hass = hass;
        this._state = hass.states[this._entity];
    }

    render () {
        let content;
        if (!this._state) {
            content = html`
                <p class="error">
                    ${this._entity} is unavailable.
                </p>
            `;
        } else {
            content = html`
                <p>The ${this._entity} is ${this._state.state}.</p>
            `;
        }
        return html`
            <ha-card header="Hello ${this._hass.user.name}!">
                <div class="card-content">
                    ${content}
                </div>
            </ha-card>
        `;
    }

    static getStubConfig() {
        return { entity: "sun.sun" }
    }
}

customElements.define('renovent-hru-card', RenoventHruCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'renovent-hru-card',
    name: 'Renovent HRU card',
    description: "A custom card for the Brink Renovent HRU"
});