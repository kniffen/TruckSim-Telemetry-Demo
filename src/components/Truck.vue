<template>
  <Box title="Truck" :sections="[
    'general',
    'chassis',
    'cabin',
    'head',
    'hook',    
    'engine',
    'transmission',
    'differential',
    'fluids',
    'brakes',
    'lights',
    'wheels',
    'damage',
  ]">
  
    <template v-slot:general>
      <List :items="generalList"></List>
    </template>

    <template v-slot:chassis>
      <List :items="chassisList"></List>
    </template>

    <template v-slot:cabin>
      <List :items="cabinList"></List>
    </template>

    <template v-slot:head>
      <List :items="headList"></List>
    </template>

    <template v-slot:hook>
      <List :items="hookList"></List>
    </template>

    <template v-slot:engine>
      <List :items="engineList"></List>
    </template>

    <template v-slot:transmission>
      <List :items="transmissionList"></List>
    </template>

    <template v-slot:differential>
      <List :items="differentialList"></List>
    </template>

    <template v-slot:fluids>
      <div class="fluids">
        <div class="fuel">
          <div class="tank">
            <div :style="`height: ${Math.round(100 / fuel.capacity * fuel.value)}%;`"></div>
            <div>
              <div>Fuel</div>
              <div>{{Math.round(fuel.value)}}/{{fuel.capacity}} Liters</div>
              <div>{{Math.round(fuel.value * 0.2641720524)}}/{{Math.round(fuel.capacity * 0.2641720524)}} Gallons</div>
              <div>{{Math.round(100 / fuel.capacity * fuel.value)}}%</div>
            </div>
          </div>
        </div>
        <div class="adblue">
          <div class="tank">
            <div :style="`height: ${Math.round(100 / adBlue.capacity * adBlue.value)}%;`"></div>
            <div>
              <div>AdBlue</div>
              <div>{{Math.round(adBlue.value)}}/{{adBlue.capacity}} Liters</div>
              <div>{{Math.round(adBlue.value * 0.2641720524)}}/{{Math.round(adBlue.capacity * 0.2641720524)}} Gallons</div>
              <div>{{Math.round(100 / adBlue.capacity * adBlue.value)}}%</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:brakes>
      <List :items="brakesList"></List>
    </template>

    <template v-slot:lights>
      <div class="lights">
        <div><b>Dashboard backlight:</b><span :class="`light lit-${['blank', 'yellow', 'white'][lights.dashboardBacklight]}`"></span></div>
        <div><b>AUX Front:</b><span           :class="`light lit-${['blank', 'yellow', 'white'][lights.auxFront.value]}`"></span></div>
        <div><b>AUX Roof:</b><span            :class="`light lit-${['blank', 'yellow', 'white'][lights.auxRoof.value]}`"></span></div>
        <div><b>Blink left:</b><span          :class="`light lit-${['blank', 'green'][lights.blinker.left.active ? 1 : 0]}`"></span></div>
        <div><b>Blink right:</b><span         :class="`light lit-${['blank', 'green'][lights.blinker.right.active ? 1 : 0]}`"></span></div>
        <div><b>Parking:</b><span             :class="`light lit-${['blank', 'yellow'][lights.parking.enabled ? 1 : 0]}`"></span></div>
        <div><b>Low beam:</b><span            :class="`light lit-${['blank', 'white'][lights.beamLow.enabled ? 1 : 0]}`"></span></div>
        <div><b>High beam:</b><span           :class="`light lit-${['blank', 'white'][lights.beamHigh.enabled ? 1 : 0]}`"></span></div>
        <div><b>Beacon:</b><span              :class="`light lit-${['blank', 'yellow'][lights.beacon.enabled ? 1 : 0]}`"></span></div>
        <div><b>Brake:</b><span               :class="`light lit-${['blank', 'red'][lights.brake.enabled ? 1 : 0]}`"></span></div>
        <div><b>Reverse:</b><span             :class="`light lit-${['blank', 'yellow'][lights.reverse.enabled ? 1 : 0]}`"></span></div>
      </div>
    </template>

    <template v-slot:wheels>
      <div class="wheels">
        <Wheel v-for="wheel, i in wheels" v-bind="{...wheel, id: i+1}"/>
      </div>
    </template>

    <template v-slot:damage>
      <List :items="damageList"></List>
    </template>
  
  </Box>
</template>

<script>
  import Box   from "@/components/Box.vue"
  import List  from "@/components/List.vue"
  import Wheel from "@/components/Wheel.vue"

  export default {
    name: "Truck",

    components: {
      Box,
      List,
      Wheel
    },

    props: [
      "make",
      "model",
      "licensePlate",
      "transmission",
      "fuel",
      "adBlue",
      "cabin",
      "lights",
      "position",
      "acceleration",
      "orientation",
      "brakes",
      "wheels",
      "engine",
      "damage",
      "odometer",
      "wipers",
      "head",
      "hook",
      "chassis",
      "differential"
    ],

    computed: {
      generalList: function() {
        return [
          {name: "Make",                 value: this.make.name},
          {name: "Model",                value: this.model.name},
          {name: "License plate",        value: `${this.licensePlate.value} (${this.licensePlate.country.name})`},
          {name: "Odometer",             value: `${Math.round(this.odometer).toLocaleString()} KM / ${Math.round(this.odometer * 0.6213712).toLocaleString()} Miles`},
          {name: "Wipers enabled",       value: this.wipers.enabled ? "YES" : "NO"},
          {name: "Avg fuel consumption", value: `${(this.fuel.avgConsumption * 100).toFixed(1)} l/100km`},
        ]
      },

      chassisList: function() {
        return [
          {name: "Damage",                 value: `${Math.floor(100 * this.chassis.damage)}%`},
          {name: "Position X",             value: this.position.X},
          {name: "Position Y",             value: this.position.Y},
          {name: "Position Z",             value: this.position.Z},
          {name: "Orientation heading",    value: this.orientation.heading},
          {name: "Orientation pitch",      value: this.orientation.pitch},
          {name: "Orientation roll",       value: this.orientation.roll},
          {name: "Linear velocity X",      value: this.acceleration.linearVelocity.X},
          {name: "Linear velocity Y",      value: this.acceleration.linearVelocity.Y},
          {name: "Linear velocity Z",      value: this.acceleration.linearVelocity.Z},
          {name: "Angular velocity X",     value: this.acceleration.angularVelocity.X},
          {name: "Angular velocity Y",     value: this.acceleration.angularVelocity.Y},
          {name: "Angular velocity Z",     value: this.acceleration.angularVelocity.Z},
          {name: "Linear acceleration X",  value: this.acceleration.linearAcceleration.X},
          {name: "Linear acceleration Y",  value: this.acceleration.linearAcceleration.Y},
          {name: "Linear acceleration Z",  value: this.acceleration.linearAcceleration.Z},
          {name: "Angular acceleration X", value: this.acceleration.angularAcceleration.X},
          {name: "Angular acceleration Y", value: this.acceleration.angularAcceleration.Y},
          {name: "Angular acceleration Z", value: this.acceleration.angularAcceleration.Z}
        ]
      },

      cabinList: function() {
        return [
          {name: "Damage",                     value: `${Math.floor(100 * this.cabin.damage)}%`},
          {name: "Position X",                 value: this.cabin.position.X},
          {name: "Position Y",                 value: this.cabin.position.Y},
          {name: "Position Z",                 value: this.cabin.position.Z},
          {name: "Angular velocity X",         value: this.cabin.acceleration.angularVelocity.X},
          {name: "Angular velocity Y",         value: this.cabin.acceleration.angularVelocity.Y},
          {name: "Angular velocity Z",         value: this.cabin.acceleration.angularVelocity.Z},
          {name: "Angular acceleration X",     value: this.cabin.acceleration.angularAcceleration.X},
          {name: "Angular acceleration Y",     value: this.cabin.acceleration.angularAcceleration.Y},
          {name: "Angular acceleration Z",     value: this.cabin.acceleration.angularAcceleration.Z},
          {name: "Offset position X",          value: this.cabin.offset.position.X},
          {name: "Offset position Y",          value: this.cabin.offset.position.Y},
          {name: "Offset position Z",          value: this.cabin.offset.position.Z},
          {name: "Offset orientation heading", value: this.cabin.offset.orientation.heading},
          {name: "Offset orientation pitch",   value: this.cabin.offset.orientation.pitch},
          {name: "Offset orientation roll",    value: this.cabin.offset.orientation.roll},
        ]
      },

      headList: function() {
        return [
          {name: "Position X",                 value: this.head.position.X},
          {name: "Position Y",                 value: this.head.position.Y},
          {name: "Position Z",                 value: this.head.position.Z},
          {name: "Offset position X",          value: this.head.offset.position.X},
          {name: "Offset position Y",          value: this.head.offset.position.Y},
          {name: "Offset position Z",          value: this.head.offset.position.Z},
          {name: "Offset orientation heading", value: this.head.offset.orientation.heading},
          {name: "Offset orientation pitch",   value: this.head.offset.orientation.pitch},
          {name: "Offset orientation roll",    value: this.head.offset.orientation.roll},
        ]
      },

      hookList: function() {
        return [
          {name: "Position X", value: this.hook.position.X},
          {name: "Position Y", value: this.hook.position.Y},
          {name: "Position Z", value: this.hook.position.Z},
        ]
      },

      engineList: function() {
        return [
          {name: "Oil pressure",      value: `${Math.round(this.engine.oilPressure.value)}psi`},
          {name: "Oil Temperature",   value: `${Math.round(this.engine.oilTemperature.value)}°C`},
          {name: "Water Temperature", value: `${Math.round(this.engine.waterTemperature.value)}°C`},
          {name: "Battery",           value: `${Math.round(this.engine.batteryVoltage.value)} Volts`},
          {name: "RPM",               value: `${Math.round(this.engine.rpm.value)} / ${this.engine.rpm.max}`},
          {name: "Damage",            value: `${Math.floor(100 * this.engine.damage)}%`},
        ]
      },

      transmissionList: function() {
        return [
          {name: "Forward gears",       value: this.transmission.forwardGears},
          {name: "Reverse gears",       value: this.transmission.reverseGears},
          {name: "Current gears",       value: `${this.transmission.gear.selected} (${this.transmission.gear.displayed})`},
          {name: "Damage",              value: `${Math.floor(100 * this.transmission.damage)}%`},
          {name: "Forward gear ratios", value: this.transmission.gearRatiosForward.filter(ratio => ratio > 0)},
          {name: "Reverse gear ratios", value: this.transmission.gearRatiosReverse.filter(ratio => ratio < 0)},
        ]
      },

      differentialList: function() {
        return [
          {name: "Ratio", value: this.differential.ratio},
        ]
      },

      brakesList: function() {
        return [
          {name: "Air pressure",          value: `${Math.round(this.brakes.airPressure.value)}psi`},
          {name: "Temperature",           value: `${Math.round(this.brakes.temperature.value)}°C`},
          {name: "Parking brake enabled", value: this.brakes.parking.enabled ? "YES" : "NO"},
          {name: "Motor brake enabled",   value: this.brakes.motor.enabled ? "YES" : "NO"},
          {name: "Retarder steps",        value: this.brakes.retarder.steps},
          {name: "Retarder level",        value: this.brakes.retarder.level},
        ]
      },

      damageList: function() {
        return Object.keys(this.damage).map(key => ({
          name: key, value: `${Math.floor(100 * this.damage[key])}%`
        }))
      }
    }
  }
</script>

<style scoped lang="scss">
  .fluids,
  .fuel,
  .tank,
  .adBlue {
    height: 100%;
  }

  .fluids {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  .tank {
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    border: 0.05em solid var(--color-txt);

    > div:nth-child(1) {
      position: absolute;
      background-color: var(--color-red);
      bottom: 0;
      width: 100%;
    }
    
    > div:nth-child(2) {
      background-color: var(--color-bg);
      display: grid;
      text-align: center;
      z-index: 10;
      padding: 1em;
      grid-gap: 0.5em;
    }
  }
  .fuel .tank > div:nth-child(1) {
    background-color: var(--color-green);
  }
  .adblue .tank > div:nth-child(1) {
    background-color: var(--color-blue);
  }

  #truck {
    grid-row: span 2;
  }

  .lights,
  .lights > div {
    display: grid;
  }

  .lights {
    grid-gap: .25em;
    align-content: start;
  }

  .lights > div {
    grid-template-columns: 1fr minmax(0, 1fr);
  }

  .light {
    background-color: var(--color-bg);
    border: 0.1em solid white;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    margin: auto 0;
  }

  .lit-white {
    background-color: var(--color-txt);
  }

  .lit-yellow {
    background-color: var(--color-yellow);
  }

  .lit-green {
    background-color: var(--color-green);
  }

  .lit-red {
    background-color: var(--color-red);
  }

  .wheels {
    display: grid;
    justify-items: center;
    grid-gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    overflow: hidden;
  }
</style>