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
        .hru {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hru-house {
            width: 100%;
            max-width: 400px;
            margin: 0;
        }

        .hru-house .hru-house-roof {
            z-index: 0;
            height: 100%;
            width: 100%;
            height: 40px;
        }

        .hru-house .hru-house-roof svg {
            width: 100%;
            height: 100%;
        }

        .hru-house .hru-house-roof svg #stroke {
            fill: white;
            stroke: red;
            stroke-width: 3px;
        }

        .hru-house .hru-house-roof svg #triangle1 {
            fill: var(--primary-text-color);
        }

        .hru-house .hru-house-roof svg #triangle2 {
            fill: var(--card-background-color);
        }

        .hru-house .hru-house-body {
            border: 3px solid var(--primary-text-color);    
            background: var(--card-background-color);            
            border-top: 0 none;
            padding: 5px;
        }

        .hru-fan-modes {
            display: flex;
            justify-content: space-around;
        }

        mwc-button {
            opacity: 0.5
        } 

        mwc-button ha-icon {
            color: var(--primary-text-color);     
        }

        mwc-button[active]  {
            opacity: 1.0
        }

        mwc-button[active] ha-icon {
            color: var(--mdc-theme-primary);
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
                <div class="hru-house">
                    <div class="hru-house-roof">
                        <svg preserveAspectRatio="none" viewBox="0 0 400 45">
                            <polygon id="triangle1" points="400,45 400,40 200,0 0,40 0,45"></polygon>
                            <polygon id="triangle2" points="397,45 397,42 200,3 3,42 3,45"></polygon>
                        </svg>
                    </div>
                    <div class="hru-house-body">
                        <div class="hru-fan-modes">${this.renderFanModes()}</div>
                    </div>
                </div>
            `;
        }
        return html`
            <ha-card header="Renovent HRU">
                <div class="card-content hru">
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
                    <ha-icon .icon=${button.icon} />
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