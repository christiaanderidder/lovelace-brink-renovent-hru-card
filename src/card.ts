import { LitElement, html } from "lit"
import { styles } from "./styles";

export class BrinkRenoventHruCard extends LitElement {

    _hass;

    static styles = styles;

    static get properties() {
        return {
            _config: { state: true },
            _fanMode: { state: true },
            _outdoorAirTemperature: { state: true },
            _indoorAirTemperature: { state: true },
        };
    }

    setConfig(config) {
        this._fanModeEntity = config.fanModeEntity;
        this._outdoorAirTemperatureEntity = config.outdoorAirTemperatureEntity;
        this._indoorAirTemperatureEntity = config.indoorAirTemperatureEntity;
    }

    set hass(hass) {
        this._hass = hass;
        this._fanMode = hass.states[this._fanModeEntity];
        this._outdoorAirTemperature = hass.states[this._outdoorAirTemperatureEntity];
        this._indoorAirTemperature = hass.states[this._indoorAirTemperatureEntity];
    }

    render() {
        let content;
        console.log(this._indoorAirTemperature)
        if (!this._fanMode || !this._indoorAirTemperature || !this._outdoorAirTemperature) {
            content = html`
                <p class="error">
                    Some entities are unavailable.
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
                        <div class="hru-temperature">
                            <div class="hru-temperature-line">
                                <span class="arrow">⇨</span> ${this._outdoorAirTemperature.state}${this._outdoorAirTemperature.attributes["unit_of_measurement"]}
                            </div>
                            <div class="hru-temperature-line">
                                <span class="arrow">⇦</span> ${this._indoorAirTemperature.state}${this._indoorAirTemperature.attributes["unit_of_measurement"]}
                            </div>
                        </div>
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
        { label: "Auto", value: "Auto", icon: "mdi:fan-auto" },
        { label: "Holiday", value: "Holiday", icon: "mdi:fan-off" },
        { label: "Reduced", value: "Reduced", icon: "mdi:fan-speed-1" },
        { label: "Normal", value: "Normal", icon: "mdi:fan-speed-2" },
        { label: "High", value: "High", icon: "mdi:fan-speed-3" }
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
                    <ha-icon .icon=${button.icon} ></ha-icon>
                </mwc-button>
            `);
    }

    static getStubConfig() {
        return {
            fanModeEntity: "sensor.ebusd_excellent400_fanmode",
            indoorAirTemperatureEntity: "sensor.ebusd_excellent400_insidetemperature",
            outdoorAirTemperatureEntity: "sensor.ebusd_excellent400_outsidetemperature"
        };
    }
}