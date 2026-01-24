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
  ButtonEvent,
  Config,
  MoreInfoEvent,
  LocationChangedEvent,
} from './types';
import styles from './styles.scss';

console.info(
  `%cBrink Renovent HRU card`,
  'color: white; font-weight: bold; background: #03a9f4; padding: 2px 4px;',
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
  @state() private bypassValvePositionRead?: HassEntity;
  @state() private bypassValvePositionWrite?: HassEntity;
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
      bypassValvePositionReadEntity: 'sensor.ebusd_excellent400_bypassstatus',
      bypassValvePositionWriteEntity: 'select.renovent_excellent_400_hru_operationbypassvalve',
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

    const newFanModeRead = hass.states[this.config.fanModeReadEntity];
    const newFanModeWrite = hass.states[this.config.fanModeWriteEntity];
    const newOutdoorAirTemperature = hass.states[this.config.outdoorAirTemperatureEntity];
    const newIndoorAirTemperature = hass.states[this.config.indoorAirTemperatureEntity];
    const newBypassValvePositionRead = this.config.bypassValvePositionReadEntity
      ? hass.states[this.config.bypassValvePositionReadEntity]
      : undefined;
    const newBypassValvePositionWrite = this.config.bypassValvePositionWriteEntity
      ? hass.states[this.config.bypassValvePositionWriteEntity]
      : undefined;
    const newAirFlow = hass.states[this.config.airFlowEntity];
    const newAirFilter = hass.states[this.config.airFilterEntity];
    const newZoneValvePosition = this.config.zoneValvePositionEntity
      ? hass.states[this.config.zoneValvePositionEntity]
      : undefined;
    const newCo2Level1 = this.config.co2Level1Entity
      ? hass.states[this.config.co2Level1Entity]
      : undefined;
    const newCo2Level2 = this.config.co2Level2Entity
      ? hass.states[this.config.co2Level2Entity]
      : undefined;
    const newCo2Level3 = this.config.co2Level3Entity
      ? hass.states[this.config.co2Level3Entity]
      : undefined;
    const newCo2Level4 = this.config.co2Level4Entity
      ? hass.states[this.config.co2Level4Entity]
      : undefined;

    if (
      this.fanModeRead?.state !== newFanModeRead?.state ||
      this.fanModeWrite?.state !== newFanModeWrite?.state ||
      this.outdoorAirTemperature?.state !== newOutdoorAirTemperature?.state ||
      this.indoorAirTemperature?.state !== newIndoorAirTemperature?.state ||
      this.bypassValvePositionRead?.state !== newBypassValvePositionRead?.state ||
      this.bypassValvePositionWrite?.state !== newBypassValvePositionWrite?.state ||
      this.airFlow?.state !== newAirFlow?.state ||
      this.airFilter?.state !== newAirFilter?.state ||
      this.zoneValvePosition?.state !== newZoneValvePosition?.state ||
      this.co2Level1?.state !== newCo2Level1?.state ||
      this.co2Level2?.state !== newCo2Level2?.state ||
      this.co2Level3?.state !== newCo2Level3?.state ||
      this.co2Level4?.state !== newCo2Level4?.state
    ) {
      // LitElement somehow does not detect changes in the state of entities, and therefore does not update the UI.
      // For the time being, we force an update when any of the entities change.
      this.requestUpdate();
    }

    this.fanModeRead = newFanModeRead;
    this.fanModeWrite = newFanModeWrite;
    this.outdoorAirTemperature = newOutdoorAirTemperature;
    this.indoorAirTemperature = newIndoorAirTemperature;
    this.bypassValvePositionRead = newBypassValvePositionRead;
    this.bypassValvePositionWrite = newBypassValvePositionWrite;
    this.airFlow = newAirFlow;
    this.airFilter = newAirFilter;
    this.zoneValvePosition = newZoneValvePosition;
    this.co2Level1 = newCo2Level1;
    this.co2Level2 = newCo2Level2;
    this.co2Level3 = newCo2Level3;
    this.co2Level4 = newCo2Level4;
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
        ${this.renderBypassValvePosition(
          this.bypassValvePositionRead,
          this.bypassValvePositionWrite,
        )}
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

  public renderBypassValvePosition(readEntity?: HassEntity, writeEntity?: HassEntity) {
    if (!readEntity) return;

    const entity = writeEntity || readEntity;

    const actualState =
      entity.state !== readEntity.state
        ? html`<span class="state-unavailable"> (${entity.state})</span>`
        : '';

    return html`
      <div class="hru-zone-line" .entity=${entity} @click=${this.moreInfo}>
        <ha-svg-icon
          .path=${this.bypassValveIcon()}
          class=${this.bypassValveStateClass()}
        ></ha-svg-icon>
        ${readEntity.state} ${actualState}
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
          class=${this.fanModeActiveStateClass(button.value, button.canOverride).concat(
            ' ',
            this.fanModeRequestedStateClass(button.value),
          )}
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

    // Optimistically update the requested state
    if (this.fanModeWrite && value && this.fanModeWrite.state !== value) {
      this.fanModeWrite.state = value;
    }

    this.ha.callService(
      domain,
      'select_option',
      { option: value },
      { entity_id: entity.entity_id },
    );

    this.requestUpdate();
  }

  private fanModeRequestedStateClass(state: string) {
    return this.fanModeWrite && this.fanModeWrite.state === state ? 'state-requested' : '';
  }

  private fanModeActiveStateClass(state: string, canOverride: boolean) {
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
    if (!this.bypassValvePositionRead) return mdiValve;
    if (this.bypassValvePositionRead.state === 'Open') return mdiValveOpen;
    if (this.bypassValvePositionRead.state === 'Closed') return mdiValveClosed;
    return mdiValve;
  }

  private bypassValveStateClass() {
    if (!this.bypassValvePositionRead) return 'state-unavailable';
    if (this.bypassValvePositionRead.state === 'Error') return 'state-error';
    return 'state-available';
  }

  private moreInfo(ev: ButtonEvent) {
    if (!this.ha) return;

    const entityId = ev.currentTarget.entity.entity_id;
    const event = new MoreInfoEvent({entityId});
    this.dispatchEvent(event);
  }

  private navigate(path: string) {
    if (!this.ha) return;

    history.pushState(null, '', path);
    const event = new LocationChangedEvent();
    this.dispatchEvent(event);
  }
}
