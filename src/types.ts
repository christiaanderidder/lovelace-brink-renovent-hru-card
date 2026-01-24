import {
  HassEntity,
  HassEntities,
  HassServices,
  HassConfig,
  HassServiceTarget,
  Connection,
  MessageBase,
} from 'home-assistant-js-websocket';

// Re-export HassEntity for convenience
export type { HassEntity };

/**
 * Home Assistant user information
 */
export interface HassUser {
  id: string;
  is_admin: boolean;
  is_owner: boolean;
  name: string;
}

/**
 * Main Home Assistant interface
 * Based on the official HA frontend types, but only including what's needed for custom cards
 */
export interface HomeAssistant {
  states: HassEntities;
  services: HassServices;
  config: HassConfig;
  user: HassUser;
  connection: Connection;
  connected: boolean;
  language: string;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: HassServiceTarget,
  ): Promise<void>;
  callApi<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    parameters?: Record<string, unknown>,
    headers?: Record<string, string>,
  ): Promise<T>;
  fetchWithAuth(path: string, init?: Record<string, unknown>): Promise<Response>;
  sendWS(msg: MessageBase): void;
  callWS<T>(msg: MessageBase): Promise<T>;
}

/**
 * Base Lovelace card configuration
 */
export interface LovelaceCardConfig {
  type: string;
  view_index?: number;
  view_layout?: unknown;
  [key: string]: unknown;
}

/**
 * Card configuration for the Brink Renovent HRU card
 */
export interface Config extends LovelaceCardConfig {
  deviceId?: string;
  fanModeReadEntity: string;
  fanModeWriteEntity: string;
  outdoorAirTemperatureEntity: string;
  indoorAirTemperatureEntity: string;
  bypassValvePositionReadEntity?: string;
  bypassValvePositionWriteEntity?: string;
  airFlowEntity: string;
  airFilterEntity: string;
  zoneValvePositionEntity?: string;
  co2Level1Entity?: string;
  co2Level2Entity?: string;
  co2Level3Entity?: string;
  co2Level4Entity?: string;
}

export interface MoreInfoEventDetail {
  entityId: string;
}

export class MoreInfoEvent extends CustomEvent<MoreInfoEventDetail> {
  constructor(detail: MoreInfoEventDetail) {
    super('hass-more-info', {
      detail,
      bubbles: true,
      composed: true,
    });
  }
}

export class LocationChangedEvent extends CustomEvent<void> {
  constructor() {
    super('location-changed', {
      bubbles: true,
      composed: true,
    });
  }
}

/**
 * Button event with entity and value attached
 */
export interface ButtonEvent extends MouseEvent {
  currentTarget: ButtonEventTarget;
}

export interface ButtonEventTarget extends EventTarget {
  entity: HassEntity;
  value?: string;
}

declare global {
  interface Window {
    customCards: Array<object>;
  }
}
