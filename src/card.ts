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
    fanModeReadEntity: string;
    fanModeWriteEntity: string;
    outdoorAirTemperatureEntity: string;
    indoorAirTemperatureEntity: string;
    bypassValvePositionEntity: string;
    airFilterEntity: string;
    co2Level1Entity: string;
    co2Level2Entity: string;
    co2Level3Entity: string;
    co2Level4Entity: string;
}

@customElement('brink-renovent-hru-card')
export class BrinkRenoventHruCard extends LitElement {

    @state() private config: Config;

    @state() private fanModeRead: HassEntity;
    @state() private fanModeWrite: HassEntity;
    @state() private outdoorAirTemperature: HassEntity;
    @state() private indoorAirTemperature: HassEntity;
    @state() private bypassValvePosition: HassEntity;
    @state() private airFilter: HassEntity;

    // CO2 demand mode sensors
    @state() private zoneValvePosition: HassEntity;
    @state() private co2Level1: HassEntity;
    @state() private co2Level2: HassEntity;
    @state() private co2Level3: HassEntity;
    @state() private co2Level4: HassEntity;

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
            fanModeReadEntity: "sensor.ebusd_excellent400_fanmode",
            fanModeWriteEntity: "select.ebusd_excellent400_fanmode",
            indoorAirTemperatureEntity: "sensor.ebusd_excellent400_insidetemperature",
            outdoorAirTemperatureEntity: "sensor.ebusd_excellent400_outsidetemperature",
            bypassValvePositionEntity: "sensor.ebusd_excellent400_bypassstatus",
            airFilterEntity: "sensor.ebusd_excellent400_filternotification",
            zoneValvePositionEntity: "sensor.ebusd_zonevalve_valveposition_zone",
            co2Level1Entity: "number.ebusd_excellent400_co2sensor1level",
            co2Level2Entity: "number.ebusd_excellent400_co2sensor2level",
            co2Level3Entity: "number.ebusd_excellent400_co2sensor3level",
            co2Level4Entity: "number.ebusd_excellent400_co2sensor4level",
        };
    }

    public setConfig(config: Config) {
        this.config = config;
    }

    public set hass(hass: HomeAssistant) {
        this.ha = hass;
        this.fanModeRead = hass.states[this.config.fanModeReadEntity];
        this.fanModeWrite = hass.states[this.config.fanModeWriteEntity];
        this.outdoorAirTemperature = hass.states[this.config.outdoorAirTemperatureEntity];
        this.indoorAirTemperature = hass.states[this.config.indoorAirTemperatureEntity];
        this.bypassValvePosition = hass.states[this.config.bypassValvePositionEntity];
        this.airFilter = hass.states[this.config.airFilterEntity];

        this.zoneValvePosition = hass.states[this.config.zoneValvePositionEntity];
        this.co2Level1 = hass.states[this.config.co2Level1Entity];
        this.co2Level2 = hass.states[this.config.co2Level2Entity];
        this.co2Level3 = hass.states[this.config.co2Level3Entity];
        this.co2Level4 = hass.states[this.config.co2Level4Entity];
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
                            <div class="hru-zones">${this.renderZones()}</div>
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
                <ha-icon icon="mdi:arrow-right-thin"></ha-icon> ${this.renderTemperature(this.outdoorAirTemperature)}
            </div>
            <div class="hru-temperature-line ${this.entityStateClass(this.indoorAirTemperature)}">
                <ha-icon icon="mdi:arrow-left-thin"></ha-icon> ${this.renderTemperature(this.indoorAirTemperature)}
            </div>
        `;
    }

    private entityStateClass(entity: HassEntity) {
        return entity ? "state-available" : "state-unavailable";
    }

    private renderTemperature(entity: HassEntity) {
        if (!entity) return "0.0";
        return entity.state + entity.attributes.unit_of_measurement;
    }

    private renderZones() {
        return html`
            <div>${this.renderZoneValvePosition(this.zoneValvePosition)}</div>
            <div>
                ${this.renderCO2Level(this.co2Level1)}
                ${this.renderCO2Level(this.co2Level2)}
                ${this.renderCO2Level(this.co2Level3)}
                ${this.renderCO2Level(this.co2Level4)}
            </div>
        `;
    }

    private renderZoneValvePosition(entity: HassEntity) {
        if (!entity) return;

        return html`
            <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
                <ha-icon icon="mdi:fan"></ha-icon> ${entity.state}
            </div>
        `;
    }

    private renderCO2Level(entity: HassEntity) {
        if (!entity) return;

        return html`
            <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
                <ha-icon icon="mdi:molecule-co2"></ha-icon> ${entity.state}${entity.attributes.unit_of_measurement}
            </div>
        `;
    }

    private renderFanModes() {
        if (!this.fanModeRead || !this.fanModeWrite) return;

        return this.fanModes.map((button) =>
            html `
                <mwc-icon-button
                    .value=${button.value}
                    .entity=${this.fanModeWrite}
                    @click=${this.setFanMode}>
                    <ha-icon icon=${button.icon} class=${this.fanModeStateClass(button.value)}></ha-icon>
                </mwc-icon-button>
            `);
    }

    private setFanMode(ev: ButtonEvent) {
        var entity = ev.currentTarget.entity;
        var value = ev.currentTarget.value;

        var domain = entity.entity_id.slice(0, entity.entity_id.indexOf('.'));
        if (domain !== "select" && domain !== "input_select") return;

        console.log("setFanMode", domain, entity, value);

        this.ha.callService(domain, "select_option", { option: value }, { entity_id: entity.entity_id });
    }

    private fanModeStateClass(state) {
        if (!this.fanModeRead) return "state-unavailable";
        if (this.fanModeRead.state === state) return "state-focus";
        return "state-available";
    }

    private renderSensors() {
        return html`
            <mwc-icon-button .entity=${this.airFilter} @click=${this.moreInfo}>
                <ha-icon icon="mdi:air-filter" class=${this.airFilterStateClass()}></ha-icon>
            </mwc-icon-button>
            <mwc-icon-button .entity=${this.bypassValvePosition} @click=${this.moreInfo}>
                <ha-icon icon=${this.bypassValveIcon()} class=${this.bypassValveStateClass()}></ha-icon>
            </mwc-icon-button>
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