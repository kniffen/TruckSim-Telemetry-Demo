<template>
  <Box title="Job" :sections="['info', 'cargo']">
    <template v-slot:info>
      <List :items="infoList"></List>
    </template>
    
    <template v-slot:cargo>
      <List :items="cargoList"></List>
    </template>
  </Box>
</template>

<script>
  import Box  from "@/components/Box.vue"
  import List from "@/components/List.vue"

  export default {
    name: "Job",

    components: {
      Box,
      List
    },

    props: [
      "game",
      "expectedDeliveryTimestamp",
      "cargo",
      "isSpecial",
      "destination",
      "source",
      "market",
      "income",
      "plannedDistance"
    ],

    computed: {
      infoList: function() {
        return [
          {name: "Expected",          value: this.formatedDeliveryTime},
          {name: "Destination",       value: `${this.destination.city.name} - ${this.destination.company.name}`},
          {name: "Source",            value: `${this.source.city.name} - ${this.source.company.name}`},
          {name: "Market",            value: this.market.name},
          {name: "Income",            value: `${['?', '€', '$'][this.game.id]}${this.income.toLocaleString()}`},
          {name: "Special transport", value: this.isSpecial ? "YES" : "NO"},
          {name: "Planned distance",  value: `${this.plannedDistance.km}km / ${this.plannedDistance.miles}Miles`},
        ]
      },

      cargoList: function() {
        return [
          {name: "Name",      value: this.cargo.name},
          {name: "Mass",      value: `${(this.cargo.mass / 1000).toFixed()}t`},
          {name: "Unit Mass", value: `${(this.cargo.unitMass / 1000).toFixed()}t`},
          {name: "Damage",    value: `${Math.floor(100 * this.cargo.damage)}%`},
          {name: "Loaded",    value: this.cargo.isLoaded ? "YES" : "NO"},
        ]
      },

      formatedDeliveryTime: function() {
        const date   = new Date(this.expectedDeliveryTimestamp.unix)
        const double = num => num < 10 ? `0${num}` : num
        const days   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getUTCDay()]} ${double(date.getUTCHours())}:${double(date.getUTCMinutes())}`
      }
    }
  }
</script>