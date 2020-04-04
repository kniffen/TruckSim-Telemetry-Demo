<template>
  <Window title="Job" :items="['info', 'cargo']">
    <template v-slot:info>
      <div class="info list">
        <div><b>Expected:</b><span>{{formatDeliveryTime()}}</span></div>
        <div><b>Destination:</b><span>{{destination.city.name}} - {{destination.company.name}}</span></div>
        <div><b>Source:</b><span>{{source.city.name}} - {{source.company.name}}</span></div>
        <div><b>Market:</b><span>{{market.name}}</span></div>
        <div><b>Income:</b><span>{{['?', '€', '$'][game.id]}}{{income.toLocaleString()}}</span></div>
        <div><b>Special transport:</b><span>{{isSpecial ? "YES" : "NO"}}</span></div>
        <div><b>Planned distance:</b><span>{{plannedDistance.km}}km / {{plannedDistance.miles}}Miles</span></div>
      </div>
    </template>

    <template v-slot:cargo>
      <div class="cargo list">
        <div><b>Name:</b><span>{{cargo.name}}</span></div>
        <div><b>Mass:</b><span>{{(cargo.mass / 1000).toFixed()}}t</span></div>
        <div><b>Unit Mass:</b><span>{{(cargo.unitMass / 1000).toFixed()}}t</span></div>
        <div><b>Damage:</b><span>{{Math.floor(100 * cargo.damage)}}%</span></div>
        <div><b>Loaded:</b><span>{{cargo.isLoaded ? "YES" : "NO"}}</span></div>
      </div>
    </template>
  </Window>
</template>

<script>
  import Window from '@/components/Window.vue'

  export default {
    name: "Job",

    components: {Window},

    props: [
      "game",
      "deliveryTime",
      "cargo",
      "isSpecial",
      "destination",
      "source",
      "market",
      "income",
      "plannedDistance"
    ],

    methods: {
      formatDeliveryTime: function() {
        const date   = new Date(this.deliveryTime.unix)
        const double = num => num < 10 ? `0${num}` : num
        const days   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return `${days[date.getUTCDay()]} ${double(date.getUTCHours())}:${double(date.getUTCMinutes())}`
      }
    }
  }
</script>

<style scoped>
</style>