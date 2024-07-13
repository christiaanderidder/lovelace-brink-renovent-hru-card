import { LitElement, html } from "lit"
import { customElement, state } from 'lit/decorators';
import { styles } from "./styles";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

window.customCards = window.customCards || [];
window.customCards.push({
    type: "brink-renovent-hru-card",
    name: "Brink Renovent HRU card",
    description: "A custom card for the Brink Renovent HRU"
});

interface Config extends LovelaceCardConfig {
    fanModeEntity: string;
    outdoorAirTemperatureEntity: string;
    indoorAirTemperatureEntity: string;
}

@customElement('brink-renovent-hru-card')
export class BrinkRenoventHruCard extends LitElement {
    
    @state() private config: Config;

    @state() private fanMode: HassEntity;
    @state() private outdoorAirTemperature: HassEntity;
    @state() private indoorAirTemperature: HassEntity;
    
    private ha;
    private fanModes = [
        { label: "Auto", value: "Auto", icon: "mdi:fan-auto" },
        { label: "Holiday", value: "Holiday", icon: "mdi:fan-off" },
        { label: "Reduced", value: "Reduced", icon: "mdi:fan-speed-1" },
        { label: "Normal", value: "Normal", icon: "mdi:fan-speed-2" },
        { label: "High", value: "High", icon: "mdi:fan-speed-3" }
    ];

    public static styles = styles;

    public static getStubConfig() {
        return {
            fanModeEntity: "sensor.ebusd_excellent400_fanmode",
            indoorAirTemperatureEntity: "sensor.ebusd_excellent400_insidetemperature",
            outdoorAirTemperatureEntity: "sensor.ebusd_excellent400_outsidetemperature"
        };
    }

    public setConfig(config: Config) {
        this.config = config;
    }

    public set hass(hass: HomeAssistant) {
        this.ha = hass;
        this.fanMode = hass.states[this.config.fanModeEntity];
        this.outdoorAirTemperature = hass.states[this.config.outdoorAirTemperatureEntity];
        this.indoorAirTemperature = hass.states[this.config.indoorAirTemperatureEntity];
    }

    public render() {
        let content;
        console.log(this.indoorAirTemperature);
        if (!this.fanMode || !this.indoorAirTemperature || !this.outdoorAirTemperature) {
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
                            <!-- https://alexwlchan.net/2021/inner-outer-strokes-svg/ -->
                            <defs>
                                <!-- polyline to prevent bottom border -->
                                <polyline id="roof-shape" points="400,45 400,40 200,0 0,40 0,45" vector-effect="non-scaling-stroke"></polyline>
                                <clipPath id="roof-shape-inside-only">
                                    <polygon points="400,45 400,40 200,0 0,40 0,45"></polygon>
                                </clipPath>
                            </defs>
                            <use id="roof" xlink:href="#roof-shape" clip-path="url(#roof-shape-inside-only)" />
                        </svg>
                    </div>
                    <div class="hru-house-body">
                        <div class="hru-temperature">
                            <div class="hru-temperature-line">
                                <ha-icon icon="mdi:arrow-left-thin"></ha-icon> ${this.outdoorAirTemperature.state}${this.outdoorAirTemperature.attributes["unit_of_measurement"]}
                            </div>
                            <div class="hru-temperature-line">
                                <ha-icon icon="mdi:arrow-right-thin"></ha-icon> ${this.indoorAirTemperature.state}${this.indoorAirTemperature.attributes["unit_of_measurement"]}
                            </div>
                        </div>
                        <div class="hru-sensors">${this.renderSensors()}</div>
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

    private renderFanModes() {
        return this.fanModes.map((button) =>
            html`
                <mwc-button
                    .value=${button.value}
                    ?active=${this.fanMode.state === button.value}
                    @click=${this.setFanMode}>
                    <ha-icon .icon=${button.icon} ></ha-icon>
                </mwc-button>
            `);
    }

    private renderSensors() {
        return html`
                <p></p>
            `;
    }

    private setFanMode(e) {
        console.log("setFanMode", e.currentTarget.value);
    }
}