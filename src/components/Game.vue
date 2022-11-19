<template>
  <Box title="Game" :sections="['info']">
    <template v-slot:info class="info">
      <List :items="infoList"></List>
    </template>
  </Box>
</template>

<script>
  import Box  from "@/components/Box.vue"
  import List from "@/components/List.vue"

  export default {
    name: "Game",

    components: {
      Box,
      List
    },

    props: [
      "timestamp",
      "simulationTimestamp",
      "renderTimestamp",
      "multiplayerTimeOffset",
      "time",
      "game",
      "paused",
      "sdkActive",
      "pluginVersion",
      "version",
      "telemetryVersion",
      "maxTrailerCount",
      "scale"
    ],
    
    computed: {
      infoList: function() {
        return [
          {name: "Game",              value: this.game.name.toUpperCase()},
          {name: "Version",           value: this.version},
          {name: "Telemetry version", value: this.telemetryVersion},
          {name: "Plugin revision",   value: this.pluginVersion},
          {name: "SDK active",        value: this.sdkActive ? "YES" : "NO"},       
          {name: "Paused",            value: this.paused ? "YES" : "NO"},
          {name: "Uptime",            value: this.formatTimestamp(this.timestamp.value)},
          {name: "Simulation uptime", value: this.formatTimestamp(this.simulationTimestamp.value)},
          {name: "Render uptime",     value: this.formatTimestamp(this.renderTimestamp.value)},
          {name: "MP time offset",    value: this.multiplayerTimeOffset.value},
          {name: "Game time",         value: this.gameTime},
          {name: "Maximum trailers",  value: this.maxTrailerCount},
          {name: "Scale",             value: this.scale}
        ]
      },

      gameTime: function() {
        const date = new Date(this.time.unix)
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getUTCDay()]} ${this.doubleDigits(date.getUTCHours())}:${this.doubleDigits(date.getUTCMinutes())}`
      }
    },

    methods: {
      doubleDigits: function(num) {
        return  num < 10 ? `0${num}` : num
      },

      formatTimestamp: function(value) {
        const hours = Math.floor(value / 3.6e+9)
        const min   = Math.floor(value % 3.6e+9 / 6e+7)
        const sec   = Math.floor(value % 3.6e+9 % 6e+7 / 1000000)

        return `${this.doubleDigits(hours)}:${this.doubleDigits(min)}:${this.doubleDigits(sec)}`
      }
    }
  }
</script>