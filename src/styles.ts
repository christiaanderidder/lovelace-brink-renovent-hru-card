import { css } from "lit";

export const styles = css`
    .hru {
        align-items: center;
        justify-content: center;
    }

    .hru-house {
        width: 100%;
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

    .hru-house .hru-house-roof #roof {
        fill: var(--card-background-color);
        stroke: var(--primary-text-color);
        stroke-width: 6px; /* Double width, the outer half is clipped */
    }

    .hru-house .hru-house-body {
        border: 3px solid var(--primary-text-color);
        background: var(--card-background-color);
        border-top: 0 none;
        min-height: 120px;
        padding: 5px 60px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10px;
    }

    .hru-fan-modes, .hru-zones {
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-shrink: 0;
    }

    .hru-zones .hru-zone-line {
        --mdc-icon-size: 18px;
        cursor: pointer;
        margin: 5px 0;
    }

    .hru-zones .hru-zone-line [ha-icon] {
        margin-top: -10px;
    }

    .state-focus {
        color: var(--mdc-theme-primary);
    }
    
    .state-available {
        color: var(--primary-text-color);
    }

    .state-unavailable {
        color: var(--state-unavailable-color);
    }

    .state-error {
        color: var(--state-icon-error-color);
    }

    .hru-temperature {
        position: absolute;
        left: -15px;
    }

    ha-icon {
        padding-top: -10px;
    }

    .hru-temperature .hru-temperature-line {
        border: 3px solid var(--primary-text-color);
        border-left: 0 none;
        border-right: 0 none;
        background: var(--card-background-color);
        margin: 5px 0;
        padding: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
    }
`