import { css } from "lit";

export const styles = css`
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
        padding: 5px;
        position: relative;
        display: flex;
    }

    .hru-fan-modes {
        display: flex;
        justify-content: space-around;
        align-self: flex-end;
        width: 100%;
    }

    mwc-button {
        opacity: 0.5
    }

    mwc-button ha-icon {
        color: var(--primary-text-color);
    }

    mwc-button[active] {
        opacity: 1.0
    }

    mwc-button[active] ha-icon {
        color: var(--mdc-theme-primary);
    }

    .hru-temperature {
        position: absolute;
        left: -10px;
    }

    .hru-temperature .hru-temperature-line {
        border: 3px solid var(--primary-text-color);
        border-left: 0 none;
        border-right: 0 none;
        background: var(--card-background-color);
        margin: 5px 0;
        padding: 0 3px;
    }

    .hru-temperature .hru-temperature-line .arrow {
        font-size: 2em;
    }
`