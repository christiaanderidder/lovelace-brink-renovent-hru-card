# Brink Renovent HRU card
This repository contains a custom Home Assistant card for the Brink Renovent heat recuperation unit (HRU).

![Card](/card.png?raw=true)

For more information on how to connect the Brink Renovent Excellent heat recuperation unit (HRU / WTW) to Home Assistant, see: [Brink Renovent Excellent Home Automation](https://github.com/christiaanderidder/brink-renovent-hru)

**This code is provided as-is. No support will be provided through issues. PRs are welcome.**

The card layout was inspired by [lovelace-hacomfoairmqtt](https://github.com/mweimerskirch/lovelace-hacomfoairmqtt/).

## Installation

### HACS
[![Install using HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=christiaanderidder&repository=lovelace-brink-renovent-hru-card&category=plugin)

### Manual
1. Copy `brink-renovent-hru-card.js` to your `/var/lib/hass/www` folder.
2. Click on `Edit Dashboard`,  `Manage resources` add `/local/brink-renovent-hru-card.js` as `JavaScript Module`.
