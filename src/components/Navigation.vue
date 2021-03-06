<template>
  <Box title="Navigation" :sections="['info']">
    <template v-slot:info>
      <div class="info">
        <div>
          <div><b>Next rest stop:</b><div>{{formatedNextRestStop}}</div></div>
          <div><b>Distance:</b><div>{{(distance / 1000).toFixed().toLocaleString()}}km / {{(distance * 0.0006213712).toFixed()}}Miles</div></div>
          <div><b>ETA</b><div>{{formatedETA}}</div></div>
          <div><b>Real ETA</b><div>{{formatedRealETA}}</div></div>
          <div><b>Speed</b><div>{{speed.kph}}kph / {{speed.mph}}mph</div></div>
        </div>
        <div class="speedLimitKPH">{{speedLimit.kph}}</div>        
        <div class="speedLimitMPH">{{speedLimit.mph}}</div>
      </div>
    </template>
  </Box>
</template>

<script>
  import Box from "@/components/Box.vue"

  export default {
    name: "Navigation",

    components: {
      Box
    },

    props: [
      "nextRestStop", 
      "distance", 
      "time", 
      "speedLimit",
      "gameTime",
      "speed",
      "scale"
    ],

    computed: {
      formatedNextRestStop: function() {
        return this.formatTime(this.nextRestStop)
      },

      formatedETA: function() {
        const eta = this.formatTime(this.time)
        const date = new Date(this.gameTime + this.time)
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getUTCDay()]} ${this.dd(date.getUTCHours())}:${this.dd(date.getUTCMinutes())} / ${eta}`
      },

      formatedRealETA: function() {
        const eta = this.formatTime(this.time / 19)
        const date = new Date(Date.now() + this.time / 19)
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        
        return `${days[date.getDay()]} ${this.dd(date.getHours())}:${this.dd(date.getMinutes())} / ${eta}`
      }
    },

    methods: {
      formatTime: function(ms) {
        const hours = Math.floor(ms / 3600000)
        const min   = Math.floor(ms % 3600000 / 60000)
        
        return `${hours}h ${min}min`
      },
      dd: function(num) {
        return num < 10 ? '0'+num : num
      }
    }
  }
</script>

<style scoped lang="scss">
  .info {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(120px, auto);
  }
  
  .info > div:nth-child(1) {
    grid-row: 1 / 3;
    display: grid;
    grid-gap: 1em;
  }

  .speedLimits {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 120px 120px;
    grid-gap: 1em;
  }

  .speedLimits span:nth-child(1) {
    grid-column: 1 / 3;
  }
  
  .speedLimitKPH,
  .speedLimitMPH {
    background-color: var(--color-txt);    
    color: black;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: calc(80px - 0.30em);
    font-size: 2.4em;
    font-weight: bold;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .speedLimitKPH {
    border: 0.15em solid var(--color-red);
    border-radius: 50%;
  }
  .speedLimitMPH {
    border: 0.15em solid var(--color-bg);
    border-radius: 0.25em;
  }
</style>