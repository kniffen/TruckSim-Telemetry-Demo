<template>
  <Window title="Game" :items="['info']">
    <template v-slot:info>
      <div class="info">
        <div><span>Game:</span><span>{{game.name.toUpperCase()}}</span></div>
        <div><span>Version:</span><span>{{version}}</span></div>
        <div><span>Telemetry version:</span><span>{{telemetryVersion}}</span></div>
        <div><span>Plugin revision:</span><span>{{pluginVersion}}</span></div>
        <div><span>SDK active:</span><span>{{sdkActive ? "YES" : "NO"}}</span></div>        
        <div><span>Paused:</span><span>{{paused ? "YES" : "NO"}}</span></div>
        <div><span>Uptime:</span><span>{{uptime}}</span></div>
        <div><span>Simulation uptime:</span><span>{{simulationUptime}}</span></div>
        <div><span>Render uptime:</span><span>{{renderUptime}}</span></div>
        <div><span>Game time:</span><span>{{formatedTime()}}</span></div>
        <div><span>Maximum trailers:</span><span>{{maxTrailerCount}}</span></div>
        <div><span>Scale:</span><span>{{scale}}</span></div>
      </div>
    </template>
  </Window>
</template>

<script>
  import Window from '@/components/Window.vue'

  export default {
    name: 'Game',

    components: {
      Window
    },

    props: [
      "timestamp",
      "simulationTimestamp",
      "renderTimestamp",
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
      uptime: function() {
        return this.formatTimestamp(this.timestamp.value)
      },
      simulationUptime: function() {
        return this.formatTimestamp(this.simulationTimestamp.value)
      },
      renderUptime: function() {
        return this.formatTimestamp(this.renderTimestamp.value)        
      }
    },

    methods: {
      double: function(num) {
        return  num < 10 ? `0${num}` : num
      },
      formatTimestamp: function(value) {
        const hours = Math.floor(value / 3600000)
        const min   = Math.floor(value % 3600000 / 60000)
        const sec   = Math.floor(value % 3600000 % 60000 / 1000)

        return `${this.double(hours)}:${this.double(min)}:${this.double(sec)}`
      },
      formatedTime: function() {
        const date = new Date(this.time.unix)

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getUTCDay()]} ${this.double(date.getUTCHours())}:${this.double(date.getUTCMinutes())}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .info,
  .info div {
    display: grid;    
  }

  .info {
    grid-gap: var(--spacing);
  }

  .info div {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .info div span:nth-child(1) {
    font-weight: bold;
  }
</style>