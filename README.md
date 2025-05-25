# Brink Renovent HRU card
This repository contains a custom Home Assistant card for the Brink Renovent heat recuperation unit (HRU / WTW).

The card was tested on a Brink Renovent 400, but should work for other Brink Renovent systems as well.

![Card](/card.png?raw=true)

The card supports the following features
- Incoming and outgoing air temperatures
- Current air flow
- Manual air flow override
- Bypass valve position
- Filter status
- CO2 sonsor values (when using demand ventilation)
- The active zone (when using a zone valve)

## Installation

### HACS
[![Install using HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=christiaanderidder&repository=lovelace-brink-renovent-hru-card&category=plugin)

### Manual
1. Copy `brink-renovent-hru-card.js` to your `/var/lib/hass/www` folder.
2. Click on `Edit Dashboard`,  `Manage resources` add `/local/brink-renovent-hru-card.js` as `JavaScript Module`.

## Configuration
The following configuration options are supported:

```yaml
type: custom:brink-renovent-hru-card
deviceId: 627c99aa501bfdfc49b0bd2dea952d8b
fanModeReadEntity: sensor.renovent_excellent_400_hru_fanmode
fanModeWriteEntity: select.hru_fan_fan_mode_override
indoorAirTemperatureEntity: sensor.renovent_excellent_400_hru_insidetemperature
outdoorAirTemperatureEntity: sensor.renovent_excellent_400_hru_outsidetemperature
bypassValvePositionReadEntity: sensor.renovent_excellent_400_hru_bypassstatus
bypassValvePositionWriteEntity: select.renovent_excellent_400_hru_operationbypassvalve
airFlowEntity: sensor.renovent_excellent_400_hru_exhaustflowsetting
airFilterEntity: sensor.renovent_excellent_400_hru_filternotification
zoneValvePositionEntity: sensor.ebusd_zonevalve_valveposition_zone
co2Level1Entity: sensor.living_room_co2_sensor_co2sensorlevel_3
co2Level2Entity: sensor.study_co2_sensor_co2sensorlevel_3
co2Level3Entity: sensor.bedroom_co2_sensor_co2sensorlevel_3
```

The sensor values can be obtained using eBUS
The air flow override requires a custom relay that acts as a three-position switch.
For a full guide and sample configuration files, please refer to [Brink Renovent Excellent Home Automation](https://github.com/christiaanderidder/brink-renovent-hru)

## Acknowledgements
The card layout was inspired by [lovelace-hacomfoairmqtt](https://github.com/mweimerskirch/lovelace-hacomfoairmqtt/).
