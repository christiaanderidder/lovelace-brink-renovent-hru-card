import { BrinkRenoventHruCard } from "./card";

customElements.define('brink-renovent-hru-card', BrinkRenoventHruCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'brink-renovent-hru-card',
    name: 'Brink Renovent HRU card',
    description: "A custom card for the Brink Renovent HRU"
});