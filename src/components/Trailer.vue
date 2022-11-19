<template>
  <Box title="Trailer" :sections="[
    'general', 
    'chassis', 
    'hook', 
    'wheels',
    'liftAxle', 
    'wear'
  ]">
  
    <template v-slot:general>
      <List :items="generalList"></List>
    </template>

    <template v-slot:chassis>
      <List :items="chassisList"></List>
    </template>

    <template v-slot:hook>
      <List :items="hookList"></List>
    </template>

    <template v-slot:wheels>
      <div class="wheels">
        <Wheel v-for="wheel, i in wheels" v-bind="{...wheel, id: i+1, damage: damage.wheels}"/>
      </div>
    </template>

    <template v-slot:liftAxle>
      <List :items="liftAxleList"></List>
    </template>

    <template v-slot:wear>
      <List :items="wearList"></List>
    </template>
  
  </Box>
</template>

<script>
  import Box   from "@/components/Box.vue"
  import List  from "@/components/List.vue"
  import Wheel from "@/components/Wheel.vue"

  export default {
    name: "Trailer",

    components: {
      Box,
      List,
      Wheel
    },

    props: [
      "make",
      "model",
      "accessoryId",
      "bodyType",
      "chainType",
      "licensePlate",
      "attached",
      "wheels",
      "position",
      "orientation",
      "acceleration",
      "hook",
      "damage",
      "liftAxle"
    ],

    computed: {
      generalList: function() {
        return [
          {name: "Make",          value: this.make.name || this.make.id},
          {name: "Model",         value: this.model.name || this.model.id},
          {name: "Accessory ID",  value: this.accessoryId},
          {name: "Body type",     value: this.bodyType},
          {name: "Chain type",    value: this.chainType},
          {name: "License plate", value: `${this.licensePlate.value} (${this.licensePlate.country.name})`},
          {name: "Attached",      value: this.attached ? "YES" : "NO"},
        ]
      },
      
      chassisList: function() {
        return [
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
          {name: "Angular acceleration Z", value: this.acceleration.angularAcceleration.Z},
        ]
      },
      
      hookList: function() {
        return [
          {name: "Position X", value: this.hook.position.X},
          {name: "Position Y", value: this.hook.position.Y},
          {name: "Position Z", value: this.hook.position.Z},
        ]
      },

      liftAxleList: function() {
        return [
          {name: "Enabled",   value: this.liftAxle.enabled ? "YES" : "NO"},
          {name: "Indicator", value: this.liftAxle.indicator.enabled ? "ON" : "OFF"},
        ]
      },

      wearList: function() {
         return Object.keys(this.damage).map(key => ({
          name: key, value: `${Math.floor(100 * this.damage[key])}%`
        }))
      }
    }
  }
</script>

<style scoped lang="scss">
  #trailer {
    grid-row: span 2;
  }

  .wheels {
    display: grid;
    justify-items: center;
    grid-gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    overflow: hidden; 
  }
</style>