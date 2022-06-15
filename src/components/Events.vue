<template>
  <Box title="Events" :sections="['game', 'job', 'truck', 'trailers', 'navigation']">
    <template v-slot:game>
      <List :items="game"></List>
    </template>

    <template v-slot:job>
      <List :items="job"></List>
    </template>

    <template v-slot:truck>
      <List :items="truck"></List>
    </template>

    <template v-slot:trailers>
      <List :items="trailers"></List>
    </template>

    <template v-slot:navigation>
      <List :items="navigation"></List>
    </template>
  </Box>
</template>

<script>
  import Box  from "@/components/Box.vue"
  import List from "@/components/List.vue"

  export default {
    name: "Events",

    components: {
      Box,
      List
    },

    props: [
      "telemetry"
    ],

    data: function() {
      return {
        game:       [],
        job:        [],
        truck:      [],
        trailers:   [],
        navigation: [],
      }
    },

    computed: {
      currency: function() {
        const alts = ['?', '€', '$']
        return alts[this.telemetry.getGame().game.id || 0]
      }
    },

    methods: {
      logIt: function(key, message) {
        if (this[key].length >= 50)
          this[key].pop()
        
        this[key].unshift({
          name:  this.createTimeString(),
          value: message
        })
      },

      createTimeString: function() {
        const d      = new Date()
        const double = num => num < 10 ? `0${num}` : num

        return `${d.getFullYear()}-${double(d.getMonth()+1.)}-${double(d.getDate())} ${double(d.getHours())}:${double(d.getMinutes())}:${double(d.getSeconds())}`
      }
    },

    mounted: function() {
      // Game events
      this.telemetry.game.on(
        "connected",
        () => this.logIt("game", "Connected")
      )
      
      this.telemetry.game.on(
        "disconnected",
        () => this.logIt("game", "Disconnected")
      )
      
      this.telemetry.game.on(
        "pause",
        (isPaused) => this.logIt("game", isPaused ? "Paused" : "Unpaused")
      )
      
      this.telemetry.game.on(
        "fine",
        (fine) => this.logIt("game", `${fine.offence.name}, ${this.currency}${fine.amount.toLocaleString()} fine`)
      )
      
      this.telemetry.game.on(
        "tollgate",
        (tollgate) => this.logIt("game", `Toll paid ${this.currency}${tollgate.amount.toLocaleString()}`)
      )
      
      this.telemetry.game.on(
        "ferry",
        (ferry) => this.logIt("game", `Ferry (${ferry.source.name} -> ${ferry.destination.name})`)
      )

      this.telemetry.game.on(
        "train",
        (train) => this.logIt("game", `Train (${train.source.name} -> ${train.destination.name})`)
      )
      
      this.telemetry.game.on(
        "refuel-paid",
        (data) => this.logIt("game", `Refuel paid, ${data.amount.toLocaleString()} liters`)
      )

      // Job events
      this.telemetry.job.on(
        "cancelled",
        (data) => this.logIt("job", `Job cancelled, Penalty: ${this.currency}${data.penalty.toLocaleString()}`)
      )
      
      this.telemetry.job.on(
        "delivered",
        (data) => this.logIt("job", `Job delivered, ${this.currency}${data.revenue.toLocaleString()} / ${data.earnedXP}XP`)
      )
      
      this.telemetry.job.on(
        "finished",
        (data) => this.logIt("job", "Job finished")
      )
      
      this.telemetry.job.on(
        "started",
        (data) => this.logIt("job", `New job started, est Income: ${this.currency}${data.income.toLocaleString()}`)
      )

      // Truck events
      this.telemetry.truck.on(
        "cruise-control",
        (data) => this.logIt("truck", `Cruise control ${data.enabled ? "Enabled" : "Disabled"}`)
      )
      
      this.telemetry.truck.on(
        "cruise-control-increase",
        (data) => this.logIt("truck", `Cruise control increased to ${data.cruiseControlSpeed.kph}kph / ${data.cruiseControlSpeed.mph}mph`)
      )
      
      this.telemetry.truck.on(
        "cruise-control-decrease",
        (data) => this.logIt("truck", `Cruise control decreased to ${data.cruiseControlSpeed.kph}kph / ${data.cruiseControlSpeed.mph}mph`)
      )
      
      this.telemetry.truck.on(
        "warning",
        (warning, enabled) => this.logIt("truck", enabled ? `Warning: ${warning}` : `${warning} warning disabled`)
      )
      
      this.telemetry.truck.on(
        "emergency",
        (emergency, enabled) => this.logIt("truck", enabled ? `Emergency: ${emergency}` : `${emergency} emergency disabled`)
      )
      
      this.telemetry.truck.on(
        "electric",
        (enabled) => this.logIt("truck", `Truck electrical ${enabled ? "ON" : "OFF"}`)
      )
      
      this.telemetry.truck.on(
        "engine",
        (enabled) => this.logIt("truck", `Truck engine ${enabled ? "ON" : "OFF"}`)
      )
      
      this.telemetry.truck.on(
        "park",
        (enabled) => this.logIt("truck", `Parking brake ${enabled ? "ON" : "OFF"}`)
      )
      
      this.telemetry.truck.on(
        "damage",
        (data) => this.logIt("truck", `Truck damage increased ${(100 * data.total).toFixed()}%`)
      )
      
      this.telemetry.truck.on(
        "refuel-started",
        (data) => this.logIt("truck", `Truck refuel started, current: ${data.value} liters`)
      )
      
      this.telemetry.truck.on(
        "refuel-stopped",
        (data) => this.logIt("truck", `Truck refuel stopped, current: ${data.value} liters`)
      )

      // Trailer events
      this.telemetry.trailers.on(
        "coupling",
        (id, enabled) => this.logIt("trailers", `Trailer #${id+1} coupling ${enabled ? "connected" : "disconnected"}`)
      )
      
      this.telemetry.trailers.on(
        "damage",
        (id, data) => this.logIt("trailers", `Trailer #${id+1} damage increased ${(100 * data.total).toFixed()}%`)
      )

      // Navigation events
      this.telemetry.navigation.on(
        "speed-limit",
        (data) => this.logIt("navigation", `Speed limit changed to ${data.kph}kph / ${data.mph}mph`)
      )
    }
  }
</script>