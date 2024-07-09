class RenoventHruCard extends HTMLElement {

    config;
    content;

    setConfig(config) {
        if (!config.entity) {
            throw new Error('Please define an entity!');
        }
        this.config = config;
    }

    set hass(hass) {
        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : 'unavailable';

        if (!this.content) {
            this.innerHTML = `
                <ha-card header="Hello ${hass.user.name}!">
                    <div class="card-content"></div>
                </ha-card>
            `;
            this.content = this.querySelector('div');
        }

        this.content.innerHTML = `
            <p>The ${entityId} is ${stateStr}.</p>
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