import { LovelaceCardConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

export interface ButtonEvent extends MouseEvent {
    currentTarget: ButtonEventTarget
}

export interface ButtonEventTarget extends EventTarget {
    entity: HassEntity,
    value?: string
}

export interface Config extends LovelaceCardConfig {
    fanModeReadEntity: string;
    fanModeWriteEntity: string;
    outdoorAirTemperatureEntity: string;
    indoorAirTemperatureEntity: string;
    bypassValvePositionEntity: string;
    airFlowEntity: string;
    airFilterEntity: string;
    co2Level1Entity: string;
    co2Level2Entity: string;
    co2Level3Entity: string;
    co2Level4Entity: string;
}

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}