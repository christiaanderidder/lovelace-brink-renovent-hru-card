class RenoventHruCard extends HTMLElement {

    config;
    content;

    setConfig(config) {
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
}

customElements.define('renovent-hru-card', RenoventHruCard);