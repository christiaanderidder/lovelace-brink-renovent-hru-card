import { LitElement, CSSResultGroup, html, unsafeCSS } from 'lit';
import {
  mdiFanAuto,
  mdiFanOff,
  mdiFanSpeed1,
  mdiFanSpeed2,
  mdiFanSpeed3,
  mdiArrowRightThin,
  mdiArrowLeftThin,
  mdiHome,
  mdiWeatherWindy,
  mdiAirFilter,
  mdiMoleculeCo2,
  mdiValve,
  mdiValveOpen,
  mdiValveClosed,
  mdiGauge,
} from '@mdi/js';
import { customElement, state } from 'lit/decorators.js';
import { HassEntity } from 'home-assistant-js-websocket';
import {
  HomeAssistant,
  MoreInfoActionConfig,
  NavigateActionConfig,
  handleAction,
} from '@dermotduffy/custom-card-helpers';
import { ButtonEvent, Config } from './types';
import styles from './styles.scss';

console.info(
	`%cBrink Renovent HRU card`,
	'color: white; font-weight: bold; background: #03a9f4; padding: 2px 4px;'
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'brink-renovent-hru-card',
  name: 'Brink Renovent HRU card',
  description: 'A custom card for the Brink Renovent HRU',
});

@customElement('brink-renovent-hru-card')
export class BrinkRenoventHruCard extends LitElement {
  @state() private config?: Config;

  @state() private deviceId?: string;

  @state() private fanModeRead?: HassEntity;
  @state() private fanModeWrite?: HassEntity;
  @state() private outdoorAirTemperature?: HassEntity;
  @state() private indoorAirTemperature?: HassEntity;
  @state() private bypassValvePosition?: HassEntity;
  @state() private airFlow?: HassEntity;
  @state() private airFilter?: HassEntity;

  // CO2 demand mode sensors
  @state() private zoneValvePosition?: HassEntity;
  @state() private co2Level1?: HassEntity;
  @state() private co2Level2?: HassEntity;
  @state() private co2Level3?: HassEntity;
  @state() private co2Level4?: HassEntity;

  private ha?: HomeAssistant;

  private fanModes = [
    { value: 'Auto', icon: mdiFanAuto, canOverride: true },
    { value: 'Holiday', icon: mdiFanOff, canOverride: false },
    { value: 'Reduced', icon: mdiFanSpeed1, canOverride: false },
    { value: 'Normal', icon: mdiFanSpeed2, canOverride: true },
    { value: 'High', icon: mdiFanSpeed3, canOverride: true },
  ];

  public static get styles(): CSSResultGroup {
    return unsafeCSS(styles);
  }

  public static getStubConfig() {
    return {
      deviceId: '',
      fanModeReadEntity: 'sensor.ebusd_excellent400_fanmode',
      fanModeWriteEntity: 'select.ebusd_excellent400_fanmode',
      indoorAirTemperatureEntity: 'sensor.ebusd_excellent400_insidetemperature',
      outdoorAirTemperatureEntity: 'sensor.ebusd_excellent400_outsidetemperature',
      bypassValvePositionEntity: 'sensor.ebusd_excellent400_bypassstatus',
      airFlowEntity: 'sensor.renovent_excellent_400_hru_exhaustflowsetting',
      airFilterEntity: 'sensor.ebusd_excellent400_filternotification',
      zoneValvePositionEntity: 'sensor.ebusd_zonevalve_valveposition_zone',
      co2Level1Entity: 'number.ebusd_excellent400_co2sensor1level',
      co2Level2Entity: 'number.ebusd_excellent400_co2sensor2level',
      co2Level3Entity: 'number.ebusd_excellent400_co2sensor3level',
      co2Level4Entity: 'number.ebusd_excellent400_co2sensor4level',
    };
  }

  public setConfig(config: Config) {
    this.config = config;
  }

  public set hass(hass: HomeAssistant) {
    if (!this.config) return;

    this.ha = hass;

    this.deviceId = this.config.deviceId;

    this.fanModeRead = hass.states[this.config.fanModeReadEntity];
    this.fanModeWrite = hass.states[this.config.fanModeWriteEntity];
    this.outdoorAirTemperature = hass.states[this.config.outdoorAirTemperatureEntity];
    this.indoorAirTemperature = hass.states[this.config.indoorAirTemperatureEntity];
    this.bypassValvePosition = hass.states[this.config.bypassValvePositionEntity];
    this.airFlow = hass.states[this.config.airFlowEntity];
    this.airFilter = hass.states[this.config.airFilterEntity];

    this.zoneValvePosition = hass.states[this.config.zoneValvePositionEntity];
    this.co2Level1 = hass.states[this.config.co2Level1Entity];
    this.co2Level2 = hass.states[this.config.co2Level2Entity];
    this.co2Level3 = hass.states[this.config.co2Level3Entity];
    this.co2Level4 = hass.states[this.config.co2Level4Entity];
  }

  public render() {
    return html`
      <ha-card>
        <div class="card-content hru">
          <div class="hru-house">
            <div class="hru-house-roof">
              <svg preserveAspectRatio="none" viewBox="0 0 400 45">
                <!-- https://alexwlchan.net/2021/inner-outer-strokes-svg/ -->
                <defs>
                  <!-- polyline to prevent bottom border -->
                  <polyline
                    id="roof-shape"
                    points="400,45 400,40 200,0 0,40 0,45"
                    vector-effect="non-scaling-stroke"
                  ></polyline>
                  <clipPath id="roof-shape-inside-only">
                    <polygon points="400,45 400,40 200,0 0,40 0,45"></polygon>
                  </clipPath>
                </defs>
                <use id="roof" xlink:href="#roof-shape" clip-path="url(#roof-shape-inside-only)" />
              </svg>
            </div>
            <div class="hru-house-body">
              <div class="hru-temperature">${this.renderAirTemperature()}</div>
              <div class="hru-zones">${this.renderZones()}</div>
              <div class="hru-fan-modes">${this.renderFanModes()}</div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private renderAirTemperature() {
    return html`
      <div
        class="hru-temperature-line ${this.entityStateClass(this.outdoorAirTemperature)}"
        .entity=${this.outdoorAirTemperature}
        @click=${this.moreInfo}
      >
        <ha-svg-icon .path=${mdiArrowRightThin}></ha-svg-icon> ${this.renderTemperature(
          this.outdoorAirTemperature,
        )}
      </div>
      <div
        class="hru-temperature-line ${this.entityStateClass(this.indoorAirTemperature)}"
        .entity=${this.indoorAirTemperature}
        @click=${this.moreInfo}
      >
        <ha-svg-icon .path=${mdiArrowLeftThin}></ha-svg-icon> ${this.renderTemperature(
          this.indoorAirTemperature,
        )}
      </div>
    `;
  }

  private entityStateClass(entity?: HassEntity) {
    return entity ? 'state-available' : 'state-unavailable';
  }

  private renderTemperature(entity?: HassEntity) {
    if (!entity) return '0.0';
    return entity.state + entity.attributes.unit_of_measurement;
  }

  private renderZones() {
    return html`
      <div>
        ${this.renderZoneValvePosition(this.zoneValvePosition)} ${this.renderAirFlow(this.airFlow)}
        ${this.renderBypassValvePosition(this.bypassValvePosition)}
        ${this.renderAirFilterState(this.airFilter)}
      </div>
      <div>
        ${this.renderCO2Level(this.co2Level1)} ${this.renderCO2Level(this.co2Level2)}
        ${this.renderCO2Level(this.co2Level3)} ${this.renderCO2Level(this.co2Level4)}
        ${this.renderDetails(this.deviceId)}
      </div>
    `;
  }

  private renderZoneValvePosition(entity?: HassEntity) {
    if (!entity) return;

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon .path=${mdiHome}></ha-svg-icon> ${entity.state}
      </div>
    `;
  }

  private renderAirFlow(entity?: HassEntity) {
    if (!entity) return;

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon .path=${mdiWeatherWindy}></ha-svg-icon> ${entity.state}${entity.attributes
          .unit_of_measurement}
      </div>
    `;
  }

  public renderBypassValvePosition(entity?: HassEntity) {
    if (!entity) return;

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon
          .path=${this.bypassValveIcon()}
          class=${this.bypassValveStateClass()}
        ></ha-svg-icon>
        ${entity.state}
      </div>
    `;
  }

  public renderAirFilterState(entity?: HassEntity) {
    if (!entity) return;

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon .path=${mdiAirFilter} class=${this.airFilterStateClass()}></ha-svg-icon>
        ${entity.state}
      </div>
    `;
  }

  private renderCO2Level(entity?: HassEntity) {
    if (!entity) return;

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon .path=${mdiMoleculeCo2}></ha-svg-icon> ${entity.state}${entity.attributes
          .unit_of_measurement}
      </div>
    `;
  }

  private renderDetails(deviceId?: string) {
    if (!deviceId || (this.ha && !this.ha.user.is_admin)) return;

    return html`
      <div
        class="hru-zone-line"
        @click=${() => this.navigate(`/config/devices/device/${deviceId}`)}
      >
        <ha-svg-icon .path=${mdiGauge}></ha-svg-icon> View device
      </div>
    `;
  }

  private renderFanModes() {
    if (!this.fanModeRead || !this.fanModeWrite) return;

    return this.fanModes.map(
      (button) => html`
        <ha-icon-button
          .value=${button.value}
          .entity=${this.fanModeWrite}
          @click=${this.setFanMode}
          .disabled=${!button.canOverride}
          .path=${button.icon}
          class=${this.fanModeStateClass(button.value, button.canOverride)}
        >
        </ha-icon-button>
      `,
    );
  }

  private setFanMode(ev: ButtonEvent) {
    if (!this.ha) return;

    const entity = ev.currentTarget.entity;
    const value = ev.currentTarget.value;

    const domain = entity.entity_id.slice(0, entity.entity_id.indexOf('.'));
    if (domain !== 'select' && domain !== 'input_select') return;

    this.ha.callService(
      domain,
      'select_option',
      { option: value },
      { entity_id: entity.entity_id },
    );
  }

  private fanModeStateClass(state: string, canOverride: boolean) {
    if (!this.fanModeRead || !canOverride) return 'state-unavailable';
    if (this.fanModeRead.state === state) return 'state-focus';
    return 'state-available';
  }

  private airFilterStateClass() {
    if (!this.airFilter) return 'state-unavailable';
    if (this.airFilter.state === 'Clean') return 'state-available';
    if (this.airFilter.state === 'Dirty') return 'state-error';
    return 'state-error';
  }

  private bypassValveIcon() {
    if (!this.bypassValvePosition) return mdiValve;
    if (this.bypassValvePosition.state === 'Open') return mdiValveOpen;
    if (this.bypassValvePosition.state === 'Closed') return mdiValveClosed;
    return mdiValve;
  }

  private bypassValveStateClass() {
    if (!this.bypassValvePosition) return 'state-unavailable';
    if (this.bypassValvePosition.state === 'Error') return 'state-error';
    return 'state-available';
  }

  private moreInfo(ev: ButtonEvent) {
    if (!this.ha) return;

    const entityId = ev.currentTarget.entity.entity_id;
    const config = {
      entity: entityId,
      tap_action: {
        entity: entityId,
        action: 'more-info',
      } as MoreInfoActionConfig,
    };
    handleAction(this, this.ha, config, 'tap');
  }

  private navigate(path: string) {
    if (!this.ha) return;

    const config = {
      tap_action: {
        navigation_path: path,
        action: 'navigate',
      } as NavigateActionConfig,
    };
    handleAction(this, this.ha, config, 'tap');
  }
}
