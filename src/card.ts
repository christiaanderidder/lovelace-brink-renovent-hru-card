import { LitElement, html } from "lit"
import { customElement, state } from 'lit/decorators';
import { styles } from "./styles";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, LovelaceCardConfig, MoreInfoActionConfig, handleAction } from "custom-card-helpers";

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

interface ButtonEvent extends MouseEvent {
    currentTarget: ButtonEventTarget
}

interface ButtonEventTarget extends EventTarget {
    entity: HassEntity,
    value?: string
}

interface Config extends LovelaceCardConfig {
    fanModeEntity: string;
    outdoorAirTemperatureEntity: string;
    indoorAirTemperatureEntity: string;
    bypassValvePositionEntity: string;
    airFilterEntity: string;
}

@customElement('brink-renovent-hru-card')
export class BrinkRenoventHruCard extends LitElement {
    
    @state() private config: Config;

    @state() private fanMode: HassEntity;
    @state() private outdoorAirTemperature: HassEntity;
    @state() private indoorAirTemperature: HassEntity;
    @state() private bypassValvePosition: HassEntity;
    @state() private airFilter: HassEntity;
    
    private ha;
    private fanModes = [
        { value: "Auto", icon: "mdi:fan-auto" },
        { value: "Holiday", icon: "mdi:fan-off" },
        { value: "Reduced", icon: "mdi:fan-speed-1" },
        { value: "Normal", icon: "mdi:fan-speed-2" },
        { value: "High", icon: "mdi:fan-speed-3" }
    ];

    public static styles = styles;

    public static getStubConfig() {
        return {
            fanModeEntity: "sensor.ebusd_excellent400_fanmode",
            indoorAirTemperatureEntity: "sensor.ebusd_excellent400_insidetemperature",
            outdoorAirTemperatureEntity: "sensor.ebusd_excellent400_outsidetemperature",
            bypassValvePositionEntity: "sensor.ebusd_excellent400_bypassstatus",
            airFilterEntity: "sensor.ebusd_excellent400_filternotification",
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
        this.bypassValvePosition = hass.states[this.config.bypassValvePositionEntity];
        this.airFilter = hass.states[this.config.airFilterEntity];
    }

    public render() {
        return html`
            <ha-card header="Renovent HRU">
                <div class="card-content hru">
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
                            <div class="hru-temperature">${this.renderAirTemperature()}</div>
                            <div class="hru-sensors">${this.renderSensors()}</div>
                            <div class="hru-fan-modes">${this.renderFanModes()}</div>
                        </div>
                    </div>
                </div>
            </ha-card>
        `;
    }

    private renderAirTemperature() {
        return html `
            <div class="hru-temperature-line ${this.entityStateClass(this.outdoorAirTemperature)}">
                <ha-icon icon="mdi:arrow-left-thin"></ha-icon> ${this.renderTemperature(this.outdoorAirTemperature)}
            </div>
            <div class="hru-temperature-line ${this.entityStateClass(this.indoorAirTemperature)}">
                <ha-icon icon="mdi:arrow-right-thin"></ha-icon> ${this.renderTemperature(this.indoorAirTemperature)}
            </div>
        `;
    }

    private entityStateClass(entity: HassEntity) {
        return entity ? "state-available" : "state-unavailable";
    }

    private renderTemperature(entity: HassEntity) {
        if (!entity) return "0.0";
        return this.outdoorAirTemperature.state + this.outdoorAirTemperature.attributes["unit_of_measurement"];
    }

    private renderFanModes() {
        if (!this.fanMode) return;

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

    private setFanMode(e) {
        console.log("setFanMode", e.currentTarget.value);
    }

    private renderSensors() {
        return html`
            <ha-icon icon="mdi:air-filter" class=${this.airFilterStateClass()}></ha-icon>
            <ha-icon icon=${this.bypassValveIcon()} class=${this.bypassValveStateClass()}></ha-icon>
        `;
    }

    private airFilterStateClass() {
        if (!this.airFilter) return "state-unavailable";
        if (this.airFilter.state === "Clean") return "state-available";
        if (this.airFilter.state === "Dirty") return "state-error";
        return "state-error";
    }

    private bypassValveIcon() {
        if (!this.bypassValvePosition) return "mdi:valve";
        if (this.bypassValvePosition.state === "Open") return "mdi:valve-open";
        if (this.bypassValvePosition.state === "Closed") return "mdi:valve-closed";
        return "mdi:valve";
    }

    private bypassValveStateClass() {
        if (!this.bypassValvePosition) return "state-unavailable";
        if (this.bypassValvePosition.state === "Error") return "state-error";
        return "state-available";
    }

    private moreInfo(ev: ButtonEvent) {
        var entityId = ev.currentTarget.entity.entity_id;
        var config = {
            entity: entityId,
            tap_action: {
                entity: entityId,
                action: "more-info"
            } as MoreInfoActionConfig
        }
        handleAction(this, this.ha, config, "tap");
    }
}