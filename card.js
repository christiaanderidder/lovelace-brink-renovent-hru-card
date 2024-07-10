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
            _fanMode: { state: true },
        };
    }

    static styles = css`
        .house {
            width: 100%;
            max-width: 400px;
            margin: 0;
        }

        .house .roof {
            z-index: 0;
            height: 100%;
            width: 100%;
            height: 40px;
        }

        .house .roof svg {
            width: 100%;
            height: 100%;
        }

        .house .roof svg #stroke {
            fill: white;
            stroke: red;
            stroke-width: 3px;
        }

        .house .roof svg #triangle1 {
            fill: var(--primary-text-color);
        }

        .house .roof svg #triangle2 {
            fill: var(--card-background-color);
        }

        .house .structure {
            border: 3px solid var(--primary-text-color);    
            background: var(--card-background-color);            
            border-top: 0 none;
            padding: 5px;
        }
                
    `;

    setConfig(config) {
        this._fanModeEntity = config.fanModeEntity;
    }

    set hass(hass) {
        this._hass = hass;
        this._fanMode = hass.states[this._fanModeEntity];
    }

    render() {
        console.log(this._fanMode);
        let content;
        if (!this._fanMode) {
            content = html`
                <p class="error">
                    ${this._fanModeEntity} is unavailable.
                </p>
            `;
        } else {
            content = html`
                <div class="house">
                    <div class="roof">
                        <svg preserveAspectRatio="none" viewBox="0 0 400 45">
                            <polygon id="triangle1" points="400,45 400,40 200,0 0,40 0,45"></polygon>
                            <polygon id="triangle2" points="397,45 397,42 200,3 3,42 3,45"></polygon>
                        </svg>
                    </div>
                    <div class="structure">
                        ${this.renderFanModes()}
                    </div>
                </div>
            `;
        }
        return html`
            <ha-card header="Renovent HRU">
                <div class="card-content">
                    ${content}
                </div>
            </ha-card>
        `;
    }

    fanModes = [
        {label: 'Auto', value: 'Auto', icon: 'mdi:fan-auto'},
        {label: 'Holiday', value: 'Holiday', icon: 'mdi:fan-off'},
        {label: 'Reduced', value: 'Reduced', icon: 'mdi:fan-speed-1'},
        {label: 'Normal', value: 'Normal', icon: 'mdi:fan-speed-2'},
        {label: 'High', value: 'High', icon: 'mdi:fan-speed-3'}
    ];

    setFanMode(e) {
        console.log("setFanMode", e.currentTarget.value);
    }

    renderFanModes() {
        return this.fanModes.map((button) =>
            html`
                <mwc-button
                    .value=${button.value}
                    ?active=${this._fanMode.state === button.value}
                    @click=${this._changeFanSpeed}>
                    <ha-icon
                        .icon=${button.icon}>
                    </ha-icon>
                </mwc-button>
            `);
    }

    static getStubConfig() {
        return { fanModeEntity: "sensor.ebusd_excellent400_fanmode" }
    }
}

customElements.define('renovent-hru-card', RenoventHruCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'renovent-hru-card',
    name: 'Renovent HRU card',
    description: "A custom card for the Brink Renovent HRU"
});